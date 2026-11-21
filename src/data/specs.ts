/**
 * 规格数据：唯一来源是 59 个 SKU 的价目表（star-hotel-merchandise-catalogue.md）。
 * 全站页面从这里取，不要在页面里另抄一份数字。
 *
 * 换算口径（plan.md §8.1）：
 *   床单 40s×40s 145×95 → 240 TC
 *   床单 60s×40s 173×120 → ≈293 TC
 *   床单 60s×80s 200×(92+92) → 384 TC
 *   提花 173×180 → 353 TC
 *   GSM = 克重 ÷ (长×宽，米)
 */

export interface SpecRow {
  item: string;
  sizes: string;
  spec: string;
}

/** 首页汇总表：一行一个品类，具体型号见各分类页 */
export const HOME_SPECS: SpecRow[] = [
  {
    item: 'Flat sheets',
    sizes: '200 / 230 / 260 × 280 cm',
    spec: '40s×40s 145×95 (≈240 TC) to 60s×80s 200×(92+92) (≈384 TC)',
  },
  {
    item: 'Duvet covers',
    sizes: '180–250 × 245 cm',
    spec: 'Percale, sateen stripe, mercerized, jacquard',
  },
  { item: 'Pillowcases', sizes: '58 × 85 cm', spec: 'Cut to match the sheet line' },
  { item: 'Bath towels', sizes: '80 × 160 cm / 800 g', spec: '100% cotton, ≈625 GSM' },
  { item: 'Face towels', sizes: '35 × 75 cm / 150 g', spec: '100% cotton, ≈571 GSM' },
  { item: 'Hand towels', sizes: '35 × 35 cm / 60 g', spec: '100% cotton, ≈490 GSM' },
  { item: 'Bath mats', sizes: '50 × 80 cm / 400 g', spec: '100% cotton, 1000 GSM' },
  {
    item: 'Mattresses',
    sizes: '110 / 120 / 150 / 180 × 200 cm, 20 / 25 / 30 cm deep',
    spec: 'Pocket spring, 1.9 or 2.0 mm wire, medium firm as standard',
  },
  {
    item: 'Mattress protectors',
    sizes: '120 / 150 / 180 × 200 cm',
    spec: 'Polyester face and fill, four-corner elastic',
  },
  { item: 'Bathrobes', sizes: 'About 1,200 g per robe', spec: '100% cotton, 16s cut pile, kimono collar' },
  { item: 'Disposable slippers', sizes: 'Four faces', spec: 'Terry, waffle, coral fleece, dense velvet' },
];

export const BEDDING_SPECS: SpecRow[] = [
  { item: 'Flat sheet (≈240 TC)', sizes: '200 / 230 / 260 × 280 cm', spec: '40s×40s, 145×95' },
  { item: 'Flat sheet (≈293 TC)', sizes: '200 / 230 / 260 × 280 cm', spec: '60s×40s, 173×120' },
  {
    item: 'Flat sheet (≈384 TC)',
    sizes: '200 / 230 / 260 × 280 cm',
    spec: '60s×80s, 200×(92+92)',
  },
  { item: 'Flat sheet, jacquard (≈353 TC)', sizes: '200 / 230 / 260 × 280 cm', spec: 'Jacquard, 173×180' },
  {
    item: 'Duvet cover',
    sizes: '180–250 × 245 cm',
    spec: 'Percale, sateen stripe, mercerized or jacquard',
  },
  { item: 'Pillowcase', sizes: '58 × 85 cm', spec: 'Cut to match the sheet line' },
  {
    item: 'Mattress protector',
    sizes: '120 / 150 / 180 × 200 cm',
    spec: 'Polyester face and fill, four-corner elastic',
  },
  {
    item: 'Down alternative comforter',
    sizes: 'To bed width',
    spec: 'Quilted, down-alternative fill. Listed as "quilt" on our price list',
  },
  { item: 'Down alternative pillow', sizes: 'Standard', spec: 'Down-alternative fill' },
  { item: 'Summer quilt', sizes: 'To bed width', spec: 'Light fill, for warm rooms' },
];

export const TOWEL_SPECS: SpecRow[] = [
  { item: 'Bath towel', sizes: '80 × 160 cm / 800 g', spec: '100% cotton, ≈625 GSM' },
  { item: 'Face towel', sizes: '35 × 75 cm / 150 g', spec: '100% cotton, ≈571 GSM' },
  { item: 'Hand towel', sizes: '35 × 35 cm / 60 g', spec: '100% cotton, ≈490 GSM' },
  { item: 'Bath mat', sizes: '50 × 80 cm / 400 g', spec: '100% cotton, 1000 GSM' },
];

export const MATTRESS_SPECS: SpecRow[] = [
  { item: 'Single', sizes: '110 × 200 cm, 20 / 25 / 30 cm deep', spec: 'Pocket spring, medium firm' },
  { item: 'Small double', sizes: '120 × 200 cm, 20 / 25 / 30 cm deep', spec: 'Pocket spring, medium firm' },
  { item: 'Double', sizes: '150 × 200 cm, 20 / 25 / 30 cm deep', spec: 'Pocket spring, medium firm' },
  { item: 'King', sizes: '180 × 200 cm, 20 / 25 / 30 cm deep', spec: 'Pocket spring, medium firm' },
  { item: 'Spring unit', sizes: 'All widths', spec: 'Pocket spring, 1.9 or 2.0 mm wire' },
  {
    item: 'Fire barrier',
    sizes: 'All widths',
    spec: '220 g fire-retardant cotton + 90 g fire-retardant foam',
  },
  { item: 'Comfort layer', sizes: 'All widths', spec: 'Medium firm as standard, changed to order' },
];

export const PROTECTOR_SPECS: SpecRow[] = [
  { item: 'Mattress protector', sizes: '120 × 200 cm', spec: 'Polyester face and fill, four-corner elastic' },
  { item: 'Mattress protector', sizes: '150 × 200 cm', spec: 'Polyester face and fill, four-corner elastic' },
  { item: 'Mattress protector', sizes: '180 × 200 cm', spec: 'Polyester face and fill, four-corner elastic' },
];

export const BATHROBE_SPECS: SpecRow[] = [
  { item: 'Hotel bathrobe', sizes: 'About 1,200 g per robe', spec: '100% cotton, 16s cut pile' },
  { item: 'Collar', sizes: '—', spec: 'Kimono' },
];

export const SLIPPER_SPECS: SpecRow[] = [
  { item: 'Terry cloth', sizes: 'Per SKU', spec: 'Loop-pile face, the standard hotel slipper' },
  { item: 'Waffle', sizes: 'Per SKU', spec: 'Open weave, dries faster than terry' },
  { item: 'Coral fleece', sizes: 'Per SKU', spec: 'Soft pile, warmer underfoot' },
  { item: 'Dense velvet', sizes: 'Per SKU', spec: 'Flat, denser face; the closest to a reusable slipper' },
];

export const DUVET_SPECS: SpecRow[] = [
  { item: 'Duvet cover', sizes: '180–250 × 245 cm', spec: 'Percale' },
  { item: 'Duvet cover', sizes: '180–250 × 245 cm', spec: 'Sateen stripe' },
  { item: 'Duvet cover', sizes: '180–250 × 245 cm', spec: 'Mercerized cotton' },
  { item: 'Duvet cover', sizes: '180–250 × 245 cm', spec: 'Jacquard, 173×180 yarn count' },
];

export const PILLOWCASE_SPECS: SpecRow[] = [
  { item: 'Pillowcase', sizes: '58 × 85 cm', spec: 'Cotton, cut to match the sheet line' },
  { item: 'Pillowcase', sizes: '58 × 85 cm', spec: 'Mercerized cotton sateen' },
  { item: 'Pillowcase', sizes: '58 × 85 cm', spec: 'Jacquard' },
];
