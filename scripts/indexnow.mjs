#!/usr/bin/env node
/**
 * Submit the site's URLs to IndexNow (Bing, Yandex, Seznam, Naver, ...).
 *
 * IndexNow proves ownership with a key file hosted at the site root:
 *   https://<host>/<KEY>.txt   whose content is exactly <KEY>
 * That file lives at public/<KEY>.txt and is copied to dist/ on build.
 *
 * Usage (run `pnpm build` first so dist/ and the sitemap exist):
 *   pnpm indexnow                                  # submit every URL in the sitemap
 *   pnpm indexnow -- /hotel-linens/ /hotel-towels/ # submit only these paths
 *   pnpm indexnow -- --dry-run                     # print what would be sent, no request
 *
 * Note: Google does not participate in IndexNow. Keep submitting Google
 * via Search Console; this covers Bing and the other engines.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');

/** Must match the file at public/<KEY>.txt (served at the site root). */
const KEY = 'd56204d61dd0404fa7473b7d7e859311';
const HOST = 'qian-hui.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_PER_REQUEST = 10_000;

/**
 * Read every <urlset> in dist/. sitemap-index.xml also contains <loc> entries,
 * but those point at other sitemap files, not at pages — submitting them would
 * be wrong. Astro splits large sites into sitemap-0.xml, sitemap-1.xml, ...,
 * so all of them have to be merged.
 */
function findUrls() {
  const dist = join(root, 'dist');
  if (!existsSync(dist)) return null;
  const sources = [];
  const urls = [];
  for (const f of readdirSync(dist).filter((n) => /^sitemap.*\.xml$/.test(n))) {
    const xml = readFileSync(join(dist, f), 'utf8');
    if (!xml.includes('<urlset')) continue;
    sources.push(f);
    urls.push(...extractUrls(xml));
  }
  return urls.length ? { sources, urls: [...new Set(urls)] } : null;
}

function extractUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

function explain(status) {
  switch (status) {
    case 400:
      return 'Bad request — the payload was malformed.';
    case 403:
      return 'Forbidden — the key was rejected. Check that the key file is live and its content matches.';
    case 422:
      return 'Unprocessable — the URLs do not belong to the host, or the key does not match.';
    case 429:
      return 'Too many requests — slow down and retry later.';
    default:
      return `Unexpected status ${status}.`;
  }
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  return res.status;
}

const found = findUrls();
if (!found) {
  console.error('✖ No sitemap with <urlset> found in dist/. Run `pnpm build` first.');
  process.exit(1);
}

let urls = found.urls;
console.log(`Found ${urls.length} URL(s) in ${found.sources.map((f) => `dist/${f}`).join(', ')}`);

const wrongHost = urls.filter((u) => new URL(u).host !== HOST);
if (wrongHost.length) {
  console.error(`✖ ${wrongHost.length} sitemap URL(s) are not on ${HOST}, e.g. ${wrongHost[0]}`);
  console.error('  HOST in this script and `site` in astro.config.mjs disagree.');
  process.exit(1);
}

// Command-line options: optional paths to submit, plus --dry-run.
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run') || args.includes('--dry');
const paths = args.filter((a) => !a.startsWith('--'));
if (paths.length) {
  // Sitemap URLs end with a slash (trailingSlash: 'always'); accept both forms.
  const normalize = (p) => {
    const url = new URL(p.startsWith('/') ? p : `/${p}`, `https://${HOST}/`);
    if (!url.pathname.endsWith('/')) url.pathname += '/';
    return url.toString();
  };
  const wanted = new Set(paths.map(normalize));
  urls = urls.filter((u) => wanted.has(u));
  console.log(`Filtered to ${urls.length} URL(s) from the arguments.`);
  if (urls.length < wanted.size) {
    const missing = [...wanted].filter((u) => !urls.includes(u));
    console.warn(`⚠ Not in the sitemap (skipped): ${missing.join(', ')}`);
  }
}

if (urls.length === 0) {
  console.log('Nothing to submit.');
  process.exit(0);
}

// Sanity-check the key file that IndexNow will fetch for verification.
// public/ is copied into dist/ at build time; check what will actually deploy.
const keyFile = join(root, 'public', `${KEY}.txt`);
const distKeyFile = join(root, 'dist', `${KEY}.txt`);
if (!existsSync(keyFile)) {
  console.warn(`⚠ public/${KEY}.txt is missing — IndexNow will reject the submission.`);
} else if (readFileSync(keyFile, 'utf8').trim() !== KEY) {
  console.warn(`⚠ public/${KEY}.txt does not contain the expected key.`);
} else if (!existsSync(distKeyFile)) {
  console.warn(`⚠ dist/${KEY}.txt is missing — the key file was added after the last build. Rebuild before deploying, or IndexNow will reject the submission.`);
}

if (dryRun) {
  console.log(`\nDRY RUN — would POST to ${ENDPOINT}:`);
  console.log(JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }, null, 2));
  process.exit(0);
}

// IndexNow fetches the key file itself. If the latest build has not been
// deployed yet, the submission is rejected with 403/422 — check first.
async function verifyKeyLive() {
  try {
    const res = await fetch(`${KEY_LOCATION}?ts=${Date.now()}`, { redirect: 'follow' });
    if (!res.ok) return `HTTP ${res.status} from ${KEY_LOCATION}`;
    const body = (await res.text()).trim();
    if (body !== KEY) return `${KEY_LOCATION} does not contain the key`;
    return null;
  } catch (err) {
    return `could not reach ${KEY_LOCATION}: ${err.message}`;
  }
}

const keyProblem = await verifyKeyLive();
if (keyProblem) {
  console.error(`✖ ${keyProblem}`);
  console.error('  Deploy the current build first, then run this again.');
  process.exit(1);
}

let submitted = 0;
for (let i = 0; i < urls.length; i += MAX_PER_REQUEST) {
  const batch = urls.slice(i, i + MAX_PER_REQUEST);
  let status;
  try {
    status = await submit(batch);
  } catch (err) {
    console.error(`✖ Network error: ${err.message}`);
    process.exit(1);
  }
  const ok = status === 200 || status === 202;
  console.log(`${ok ? '✔' : '✖'} HTTP ${status} — ${batch.length} URL(s)`);
  if (!ok) {
    console.error(explain(status));
    process.exit(1);
  }
  submitted += batch.length;
}

console.log(`Done: ${submitted} URL(s) submitted to IndexNow.`);
