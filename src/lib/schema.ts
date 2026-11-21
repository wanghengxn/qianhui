import { SITE, absUrl } from '@/config/site';

/**
 * 结构化数据。
 *
 * ⚠️ plan.md §5.1 硬性要求：全站**不使用** `Product` + `Offer`。
 * 一旦打上 Product/Offer，页面可能被判定为零售页并进入 Shopping 流量池，
 * 混合路线（C 类目页抢流量 + 页内筛 B 端）就会退化成纯 C 端站。
 * 需要描述产品能力时用 Service / Organization。
 */

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  const { contact } = SITE;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    foundingDate: '1987',
    ...(contact.email ? { email: contact.email } : {}),
    ...(contact.phone ? { telephone: contact.phone } : {}),
    ...(contact.address
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: contact.street,
            addressLocality: 'Qingdao',
            addressRegion: 'Shandong',
            postalCode: contact.postalCode,
            addressCountry: 'CN',
          },
        }
      : {}),
  };
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.lang,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

/** 用 Service 表达"可以做某类供应"，替代被禁用的 Product/Offer */
export function serviceSchema(input: {
  name: string;
  /** 必须按页面实际供应的品类写，不要用全站通用值 */
  serviceType: string;
  description?: string;
  url?: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    serviceType: input.serviceType,
    ...(input.description ? { description: input.description } : {}),
    ...(input.url ? { url: input.url } : {}),
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: ['US', 'CA', 'GB', 'AU'],
  };
}
