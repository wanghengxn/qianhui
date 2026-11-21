import { SITE } from '@/config/site';

/** plan.md §5.1：供应商页 Title 模板 */
export function supplierTitle(product: string): string {
  return `Hotel ${product} Supplier & Wholesale Manufacturer | ${SITE.name}`;
}

/**
 * plan.md §5.1：类目页 Title 模板 = `Hotel {Category}: {Spec A}, {Spec B}`
 * specs 留空时退化为 `Hotel {Category} | {Brand}`，写入规格后再补全。
 */
export function categoryTitle(term: string, specs: string[] = []): string {
  const suffix = specs.filter(Boolean).slice(0, 2).join(', ');
  return suffix ? `Hotel ${term}: ${suffix} | ${SITE.name}` : `Hotel ${term} | ${SITE.name}`;
}

/** 普通产品页 / 工厂站通用模板 */
export function pageTitle(label: string): string {
  return `${label} | ${SITE.name}`;
}
