/**
 * 产品图清单。
 *
 * 换图流程：把同名 .jpg 覆盖到 src/assets/products/ 即可，页面不用改。
 * 文件名就是 key，alt 写在本文件 IMAGE_ALT 里（按 key 一一对应）。
 * 占位图不能上线：上线前确认 src/assets/products/ 里没有占位图残留。
 *
 * 拍摄要求：实拍，不要图库图和 AI 图；最短边不低于 1200 px；JPG。
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/products/*.jpg', {
  eager: true,
});

export function productImage(key: string): ImageMetadata {
  const mod = files[`/src/assets/products/${key}.jpg`];
  if (!mod) {
    throw new Error(`Missing image "${key}.jpg" in src/assets/products/`);
  }
  return mod.default;
}

/** 每张图的 alt。key 与文件名一致，方便按文件名核对。 */
export const IMAGE_ALT: Record<string, string> = {
  'hotel-linens-hero': 'White cotton hotel flat sheet and pillowcases made up on a bed',
  'hotel-linens-percale':
    'Close-up of a 240 thread count cotton percale weave on a white hotel flat sheet',
  'hotel-linens-jacquard':
    'Jacquard hotel duvet cover with a woven pattern, laid flat on a bed',
  'hotel-towels-hero':
    'White cotton hotel bath towel draped over a chair, dobby border at the hem',
  'hotel-towels-loop': 'Close-up of the loop pile on a 625 GSM hotel bath towel',
  towel: 'Qianhui hotel linen catalogue spread: a white bath towel on a chair and a folded towel set',
  towel1:
    'Stack of folded white cotton hotel towels with a woven diamond border, on a white side table',
  slipper:
    'Pair of cream canvas hotel slippers with a woven upper and stitched sole, standing upright against a grey wall',
  slipper2:
    'Five hotel slipper faces lined against a skirting board: white canvas with yellow binding, grey ribbed, grey terry, cream waffle and tan woven',
  'hotel-mattress-protectors':
    'Close-up of a quilted white hotel mattress protector fitted over a mattress, zip running along the side panel',
  'hotel-mattress-protectors1':
    'White quilted hotel mattress protector stretched over a platform bed, two pillows against a grey fluted wall',
  'hotel-towels-mat':
    'White, sand and grey cotton hotel bath mats with an embossed wreath border',
  'hotel-slippers-hero':
    'Hotel slippers in four faces side by side: terry, waffle, coral fleece and dense velvet',
  'hotel-slippers-terry':
    'White terry cloth hotel slipper with a stitched sole on a bathroom floor',
  'hotel-slippers-waffle': 'Waffle weave hotel slipper showing the open weave texture',
  'hotel-mattress-protectors-hero':
    'Folded white hotel mattress protectors in two thicknesses, piped edges showing',
  'hotel-mattress-protectors-elastic':
    'Four-corner elastic holding a hotel mattress protector in place',
  'hotel-bedding-supplier-hero': 'White duvet and pillows made up on a hotel bed',
  'hotel-bedding-supplier-hem':
    'Double-stitched hem on a white hotel flat sheet, shown close up',
  'hotel-mattress-supplier-hero':
    'White quilted hotel mattress on the plant floor beside packed cartons',
  'hotel-mattress-supplier-barrier':
    'Fire-retardant cotton and foam barrier layer inside an opened hotel mattress',
  'products-bathrobes-hero':
    'Two white cotton hotel bathrobes, front and back, hanging on wooden hangers',
  'products-bathrobes-detail': 'Close-up of the cut-pile cotton terry on a white hotel bathrobe',
  'products-duvet-covers-hero':
    'White hotel duvet cover with a button closure, made up on a bed',
  'products-duvet-covers-detail': 'Close-up of the sateen stripe weave on a white duvet cover',
  'products-pillowcases-hero':
    'Two white cotton hotel pillowcases with a flanged edge on a dark floor',
  'products-pillowcases-detail': 'White cotton hotel pillowcase laid flat, showing the flange stitching',
  'products-mattresses-hero':
    'Grey quilted pillow-top hotel mattress on a showroom display base',
  'products-mattresses-detail':
    'White quilted hotel mattress on the factory floor beside packed cartons',
  'bedding-comforter-hero': 'White quilted comforter and four white pillows on a hotel bed',
  'bedding-comforter-detail':
    'Close-up of the quilted surface of a white comforter beside a white hotel pillow',
  'bedding-pillow-stack': 'Stacks of finished white hotel pillows on the packing floor',
  'bedding-pillow-detail': 'A hand pressing the face of a white hotel pillow',
  'company-plant':
    'Exterior of the Qianhui plant on Yanqing First-Class Road, Jimo District, Qingdao',
  'company-workshop': 'Rows of looms on the Qianhui textile production floor',
};
