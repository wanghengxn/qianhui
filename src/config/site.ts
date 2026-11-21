/**
 * 站点级配置。所有页面从这里取常量，不要在页面里硬编码。
 * 标记 TODO 的字段需要在正式上线前补：
 *   - 对外品牌名 / 简称
 *   - 联系方式（邮箱、电话、WhatsApp）
 *   - 社交与认证信息
 */

export const SITE = {
  url: 'https://qian-hui.com',
  /** TODO: 确认对外使用的英文品牌名 */
  name: 'Qianhui',
  legalName: 'Qingdao Qianhui Home Textile Group',
  tagline: 'Wholesale hotel linens and bedding, direct from manufacturer',
  locale: 'en_US',
  lang: 'en',

  contact: {
    email: 'info@qian-hui.com',
    phone: '+86-17554200155',
    whatsapp: '8617554200155', // 纯数字，含国家码（wa.me 要求）
    /** 中文：山东省青岛即墨市经济开发区烟青一级路208号，266200（街道写法与 ISO 证书一致） */
    address: 'No. 208 Yanqing First-Class Road, Economic Development Zone, Jimo District, Qingdao, Shandong 266200, China',
    /** 只用于 JSON-LD PostalAddress 的 streetAddress，不含市/省/邮编 */
    street: 'No. 208 Yanqing First-Class Road, Economic Development Zone, Jimo District',
    postalCode: '266200',
  },

  /** 默认分享图，放在 /public 下 */
  defaultOgImage: '/og-default.png',

  /** 面向的采购方类型，用于表单业务类型字段 */
  businessTypes: ['Hotel', 'Distributor', 'OEM project', 'Individual'] as const,
} as const;

export type PageKind = 'supplier' | 'category' | 'product' | 'guide';

export interface RouteItem {
  /** 不带尾斜杠的路径，例如 /hotel-towels */
  href: string;
  label: string;
  kind: PageKind;
  /** 首页与产品目录用的一行摘要，只写能从价目表核对的事实 */
  hint: string;
  /** 是否在类目页强制显示 wholesale-only 意图过滤条（plan.md §5.1） */
  intentFilter?: boolean;
}

/** 供应商页：承担采购场景的前 40%，不做意图过滤 */
export const SUPPLIER_PAGES: RouteItem[] = [
  {
    href: '/hotel-bedding-supplier/',
    label: 'Bedding Supplier',
    kind: 'supplier',
    hint: 'MOQ, sampling, supply terms',
  },
  {
    href: '/hotel-mattress-supplier/',
    label: 'Mattress Supplier',
    kind: 'supplier',
    hint: 'Four builds, 20–30 cm deep',
  },
  {
    href: '/hotel-towel-supplier/',
    label: 'Towel Supplier',
    kind: 'supplier',
    hint: '490–1000 GSM, MOQ and sampling',
  },
];

/** 类目页：接产品词流量，必须做意图过滤 */
export const CATEGORY_PAGES: RouteItem[] = [
  {
    href: '/hotel-linens/',
    label: 'Hotel Linens',
    kind: 'category',
    hint: 'Sheets, duvet covers, pillowcases',
    intentFilter: true,
  },
  {
    href: '/hotel-towels/',
    label: 'Hotel Towels',
    kind: 'category',
    hint: '490–1000 GSM',
    intentFilter: true,
  },
  {
    href: '/hotel-slippers/',
    label: 'Hotel Slippers',
    kind: 'category',
    hint: 'Terry, waffle, coral fleece',
    intentFilter: true,
  },
  {
    href: '/hotel-mattress-protectors/',
    label: 'Mattress Protectors',
    kind: 'category',
    hint: 'Fitted, four-corner elastic',
    intentFilter: true,
  },
];

/** 普通产品页：仅供浏览和询盘，不做 SEO 投入 */
export const PRODUCT_PAGES: RouteItem[] = [
  {
    href: '/products/bathrobes/',
    label: 'Bathrobes',
    kind: 'product',
    hint: '16s cut pile, kimono collar',
  },
  {
    href: '/products/duvet-covers/',
    label: 'Duvet Covers',
    kind: 'product',
    hint: 'Percale, sateen stripe, jacquard',
  },
  {
    href: '/products/pillowcases/',
    label: 'Pillowcases',
    kind: 'product',
    hint: 'Matched to the sheet line',
  },
  {
    href: '/products/mattresses/',
    label: 'Mattresses',
    kind: 'product',
    hint: 'Pocket spring, medium firm',
  },
];

export interface NavGroup {
  label: string;
  /** 有 href 时渲染为一级链接，不再出下拉；没有则按分组渲染 */
  href?: string;
  items: { href: string; label: string }[];
}

export const NAV: NavGroup[] = [
  {
    label: 'Suppliers',
    items: SUPPLIER_PAGES.map(({ href, label }) => ({ href, label })),
  },
  {
    label: 'Products',
    items: [
      ...CATEGORY_PAGES.map(({ href, label }) => ({ href, label })),
      ...PRODUCT_PAGES.map(({ href, label }) => ({ href, label })),
    ],
  },
  { label: 'Certifications', href: '/certifications/', items: [] },
  { label: 'Guides', href: '/guides/', items: [] },
  { label: 'About Us', href: '/company/', items: [] },
];

/** 站内绝对 URL，用于 canonical / og:url / JSON-LD */
export function absUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}
