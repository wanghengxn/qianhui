// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://qian-hui.com',
  // 站内 URL 一律带尾斜杠，与 plan.md §5 的目录式结构一致
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // /products/ 是纯导航页且标了 noindex，/thank-you/ 只给表单提交后用，都不进 sitemap
      filter: (page) =>
        page !== 'https://qian-hui.com/products/' && page !== 'https://qian-hui.com/thank-you/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
