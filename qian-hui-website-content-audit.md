# Qianhui 酒店布草 B2B 网站文案审查与修改清单

**网站：** https://qian-hui.com/  
**用途：** 提供给网站开发人员、内容编辑人员及工厂产品负责人，作为逐页核对和修改依据。  
**审查重点：** 技术描述准确性、纺织品专业术语、产品参数表达、认证及检测文件的适用范围、英文表达是否容易令海外 B2B 买家误解。

---

## 1. 修改原则（执行前请先阅读）

### 1.1 SEO 页面元素锁定，不随意修改

本清单**不要求修改 SEO Title、Meta Description、H1、URL Slug、目标关键词及既定关键词布局**。这些页面元素是按 SEO 目标规划的，不能仅因为另一种英文表达更自然就擅自替换。

本次建议原则上只针对正文中的技术说明、产品解释、参数注释和容易引起误解的英文句子。若某一处文案本身承担目标关键词布局功能，应先保留原文，再单独评估是否有必要调整。

### 1.2 工厂提供的产品资料和证书是产品事实核对的首要依据

产品成分、纱支、织法、尺寸、重量、克重、结构、包装方式、生产能力及检测结果，应优先以工厂提供并确认的最新资料为准。

本清单不会擅自推翻工厂数据，也不会凭行业经验编造新的产品参数。遇到下列情况时，标记为“需工厂确认”，确认前不要直接替换为未经证实的数据：

- 网页描述与工厂产品规格书不一致；
- 参数没有单位，或单位含义不清楚；
- 产品功能描述没有对应测试或技术资料支持；
- 检测报告的持有人、样品、型号、材料或适用范围与网页说法不完全一致；
- 同一页面或不同页面对同一产品的描述互相矛盾。

### 1.3 认证、证书和检测报告不得扩大解释

展示或描述证书时，应核对并区分：

- 证书持有人（Certificate Holder）；
- 生产企业及生产地址（Manufacturer / Manufacturing Site）；
- 认证或检测对象（产品、材料、面料、部件或管理体系）；
- 产品型号、样品结构及规格；
- 标准名称、版本、测试日期和有效状态；
- 报告结论究竟证明了什么，以及没有证明什么。

例如，面料供应商的材料证书不能直接写成 Qianhui 成品酒店布草获得该认证；某一床垫样品的测试报告，也不能自动说明所有尺寸、结构和材料组合均符合相同要求。

### 1.4 建议状态说明

- **可直接修改：** 属于表达、逻辑或已能确认的标准信息问题。
- **需工厂确认：** 涉及产品实际结构、参数、测试结果或企业资质，必须先对照原始资料。
- **建议优化：** 原意未必错误，但表述过于绝对、口语化，或可能令采购商误解。

---

## 2. 高优先级：技术标准、产品功能及前后矛盾

| URL | 原描述 | 应该描述 |
|---|---|---|
| https://qian-hui.com/guides/16-cfr-1633-hotel-mattress/ | `The test method is CPSC's TB 129.` | **建议改为：** `Mattress testing under 16 CFR Part 1633 is conducted in accordance with the test procedure specified in 16 CFR §1633.7.` 16 CFR Part 1633 与 California TB 129 是不同的标准/测试文件，不应将二者写成同一测试方法。 |
| https://qian-hui.com/guides/16-cfr-1633-hotel-mattress/ | `Peak heat release rate no higher than 200 kW`; `Total heat release no higher than 25 MJ`; `both measured in the first ten minutes` | **建议改为：** `Peak heat release rate: no more than 200 kW at any time during the 30-minute test. Total heat release: no more than 15 MJ during the first 10 minutes.` 原文的 25 MJ 限值不正确；峰值热释放率也不应描述为只在前 10 分钟考核。此处属于网站对法规的解释，不是工厂产品参数，应按适用法规原文核对。 |
| https://qian-hui.com/guides/16-cfr-1633-hotel-mattress/ | `A tested prototype covers a range of sizes, not every size in the catalogue.` | **建议改为：** `A qualified prototype does not automatically cover every mattress size or construction. Certain length and width variations may be permitted under 16 CFR §1633.4, but buyers should verify the prototype documentation and applicable qualification requirements for each mattress construction and size.` 不应让读者误以为一个测试样品可以无条件覆盖产品目录中的所有尺寸。具体适用范围应根据法规及测试文件确认。 |
| https://qian-hui.com/hotel-mattress-protectors/ | `It keeps spills and stains out of the mattress` 与 `The standard build is not a waterproof barrier.` | **建议改为：** `The standard polyester protector provides a washable protective layer between the guest and the mattress. It is not waterproof and does not prevent liquid spills from reaching the mattress. Waterproof protection is available only when specified as a separate construction.` 两句话存在功能矛盾。若工厂另有防水款，应把标准款与防水款的结构、材料和功能分别说明。 |
| https://qian-hui.com/hotel-mattress-protectors/ | `A 30 cm deep mattress and a 20 cm one take the same protector size and a different skirt depth.` | **需工厂确认后修改。** 页面其他位置若描述的是 `four-corner elastic`，就不应同时把产品说成带有 `fitted skirt` 的包裹式保护垫。若实际为四角松紧带结构，可写：`For four-corner elastic protectors, confirm the mattress dimensions and elastic strap configuration to ensure a secure fit.` 若实际为包裹式结构，则应按真实结构说明 `skirt depth` 或 `pocket depth`。 |
| https://qian-hui.com/certifications/ | `16 CFR 1633, barrier material` | **建议按报告原件准确命名。** 如果报告测试对象是使用阻燃隔离材料的床垫组件，可考虑：`Supplier Test Report for a Mattress Assembly Using Fire-Retardant Barrier Material`。不能仅凭床垫组件测试报告，将阻燃材料本身描述为已经单独通过 16 CFR 1633 测试。最终表述必须以报告的 Test Sample、Construction、Applicant 和 Conclusion 字段为准。 |
| https://qian-hui.com/products/mattresses/ | `Fire barrier | All widths | 220 g fire-retardant cotton + 90 g fire-retardant foam` | **需工厂确认单位及适用范围。** 可暂时写成：`Specified fire-barrier construction: 220 g [unit to be confirmed] fire-retardant cotton and 90 g [unit to be confirmed] fire-retardant foam.` 请确认 220 g 和 90 g 分别是 g/m²、单件材料重量还是其他计量方式；并核对测试报告对应的样品尺寸、厚度、材料和结构。不要仅凭一个样品报告暗示所有厚度及结构都已获得同样测试覆盖。 |
| https://qian-hui.com/hotel-mattress-supplier/ | `one person turning over does not move the other side of the mattress` | **建议改为：** `Individually pocketed coils can help reduce motion transfer between sleeping partners, although actual performance depends on the spring configuration and comfort layers.` 原文 `does not move` 是绝对承诺。若工厂有独立的动态测试数据，可以再加入有数据支持的性能描述。 |
| https://qian-hui.com/hotel-mattress-supplier/ | `Mattresses compress and roll for container freight. That changes the packing plan, not the finished dimensions — once opened, the mattress recovers to the spec on the drawing.` | **需工厂确认不同型号是否均可压缩卷装。** 若只适用于部分结构，建议写：`Compression and roll-packing are available for suitable mattress constructions. The applicable models, packing limits, recovery time and dimensional requirements should be confirmed for each order.` 不应将某一型号的包装方式推广到所有弹簧床垫。 |

---

## 3. 纺织品术语、GSM 和 Thread Count

| URL | 原描述 | 应该描述 |
|---|---|---|
| https://qian-hui.com/hotel-towel-supplier/ | `Same weight, different cloth.` | **建议改为：** `Same weight, different GSM.` 这里讨论的是同样重量、不同成品面积所计算出的单位面积重量不同，不一定代表面料本身不同。 |
| https://qian-hui.com/hotel-towel-supplier/ | `If a supplier will not say how theirs were measured, assume the figure flatters the product.` | **建议改为：** `When comparing supplier quotations, ask whether the weight and dimensions refer to the finished towel, and whether GSM is calculated from the finished product or measured using a standardized fabric test method.` 原句对供应商动机的判断过于武断；更专业的做法是要求对方说明测量口径。 |
| https://qian-hui.com/hotel-towels/ | `Below about 450 GSM a towel feels thin after a few washes and dries fast.` | **建议改为：** `Lower-GSM towels generally use less material per unit area and may dry faster, depending on fibre type, pile construction and laundry conditions.` GSM 不能单独决定毛巾洗涤后的厚薄、吸水性或使用寿命。若工厂有特定产品洗涤测试，可再补充测试结果。 |
| https://qian-hui.com/hotel-towels/ | `550 to 650 GSM is the range most hotels settle on.` | **建议改为：** `A 550–650 GSM range can be considered for projects seeking a balance between towel weight, absorbency and drying efficiency. The appropriate specification depends on the property's laundry capacity, usage and budget.` 除非有可靠市场数据，否则不要把这个范围说成大多数酒店统一采用的标准。 |
| https://qian-hui.com/hotel-towels/ | `A 1000 GSM bath towel would sit damp in the dryer and cost you more in gas than it does in cotton.` | **建议改为：** `Higher-GSM towels generally retain more moisture and may require longer drying times, increasing laundry operating costs. Actual drying performance depends on towel construction, moisture extraction and dryer efficiency.` 原句对燃气成本的比较没有量化依据。 |
| https://qian-hui.com/hotel-towel-supplier/ | `Face towels 35 × 75 cm`; `Hand towels 35 × 35 cm` | **需工厂确认产品用途及目标市场命名。** 35 × 35 cm 在一些市场更常称为 `Washcloth` 或 `Face Cloth`；35 × 75 cm 可能称为 `Hand Towel` 或 `Face Towel`。不同酒店及市场命名并不完全统一，应根据工厂产品定义和目标客户习惯统一，不要仅凭尺寸擅自改名。 |
| https://qian-hui.com/hotel-bedding-supplier/ | `Thread count is the number of warp and weft threads per square inch.` | **建议改为：** `For woven fabrics, thread count is commonly expressed as the total number of warp ends and weft picks per square inch. The individual warp and weft counts should also be disclosed for accurate specification comparisons.` 可进一步在规格表中分别列出 `Warp Ends per Inch (EPI)` 和 `Weft Picks per Inch (PPI)`，便于采购商核对。 |
| https://qian-hui.com/hotel-bedding-supplier/ | `Numbers above 400 in hotel linen are usually reached by counting plies separately. We do not do that.` | **建议改为：** `When comparing thread-count claims, ask suppliers to disclose the actual warp and weft counts and explain how multi-ply yarns are counted. A headline thread-count figure alone is not sufficient to compare fabric construction.` 不宜笼统认为超过 400 TC 都是通过重复计算纱线股数产生的。 |
| https://qian-hui.com/hotel-bedding-supplier/ | `A 240 TC single-ply percale and a "600 TC" two-ply sheet can be the same cloth.` | **建议改为：** `Two fabrics with different advertised thread counts may have similar underlying constructions if different counting conventions are used. Compare their actual warp and weft densities, yarn counts and fabric specifications.` 不应在没有具体规格证据的情况下直接说两种织物是同一种面料。 |
| https://qian-hui.com/hotel-bedding-supplier/ | `A finer yarn feels softer and wears faster under commercial laundry. On a 100-wash contract, 240 TC percale often outlives 384 TC sateen.` | **建议改为：** `Finer yarns and higher thread counts do not automatically guarantee better commercial performance. Durability depends on yarn quality, fibre composition, fabric construction and laundering conditions. For high-volume hotel programmes, compare tensile strength, tear strength, dimensional stability and performance after repeated washing.` 原文对 240 TC percale 与 384 TC sateen 的耐洗寿命作了比较，但没有给出对应测试依据。 |
| https://qian-hui.com/hotel-linens/ | `Percale at 240 TC... It handles high-temperature wash cycles... Most four-star properties never move off it.` | **建议改为：** `240 TC percale is a practical option for hotel bed linen requiring a crisp hand feel and a plain-weave construction. Its suitability for commercial laundering depends on fibre composition, finishing and the property's specified wash conditions.` 不应将高温洗涤能力单纯归因于 percale 织法，也不应在没有市场依据时声称大多数四星级酒店都使用该规格。若工厂对具体面料有洗涤测试，应按测试条件描述。 |
| https://qian-hui.com/hotel-linens/ | `Sateen stripe uses a satin weave with a woven band.`; `The satin face is also the one that snags.` | **建议改为：** `Sateen stripe fabric combines woven stripe patterns with a cotton sateen weave. Its longer yarn floats create a smoother surface but may be more susceptible to snagging than a plain-weave fabric.` 对棉面料建议使用 `cotton sateen`，不要在描述中随意将 `sateen` 与 `satin` 混用。实际织物组织仍须以工厂资料为准。 |
| https://qian-hui.com/hotel-linens/ | `Mercerized cotton... holds colour better through washing.` | **建议改为：** `Mercerization is a cotton finishing process that enhances lustre and can improve dye affinity. Actual colour retention depends on dye selection, dyeing quality and wash conditions.` 丝光处理可以改善光泽及染色性能，但不能单独保证长期洗涤不褪色。 |
| https://qian-hui.com/hotel-linens/ | `Jacquard... It does not fade off.` | **建议改为：** `Jacquard patterns are woven into the fabric rather than applied as surface prints. The pattern itself does not peel off like a printed coating, although colourfastness still depends on the yarn, dyeing and finishing process.` 提花图案是织造形成的，但织物颜色仍可能受染料、整理和洗涤条件影响。 |

---

## 4. 产品页面：参数、结构和性能表达

| URL | 原描述 | 应该描述 |
|---|---|---|
| https://qian-hui.com/products/duvet-covers/ | `Mercerized for a brighter white.` | **建议改为：** `Mercerized cotton offers enhanced lustre and a smoother fabric appearance.` 如果工厂有白度测试数据，且该处理确实用于提升白度，可保留 `brighter white`，否则不宜把丝光处理直接等同于白度提升。 |
| https://qian-hui.com/products/duvet-covers/ | `Buttons survive industrial pressing better than a flap.` | **建议改为：** `Available closure options can include button and envelope-style closures, depending on the production specification. The preferred closure should be selected according to the hotel's laundering, ironing and housekeeping requirements.` 不同闭合方式各有特点，不能在没有测试或工厂依据时笼统判断纽扣更耐工业熨烫。 |
| https://qian-hui.com/products/pillowcases/ | `Ordering them together is the only way to guarantee the whites match after a year of laundering.` | **建议改为：** `Ordering pillowcases and sheets within the same production lot helps maintain consistent colour at delivery. However, colour differences may develop over time due to separate laundering cycles and fabric wear.` 同批生产有助于交货时颜色一致，但不能保证经过一年不同洗涤周期后仍完全一致。 |
| https://qian-hui.com/products/pillowcases/ | `Mercerized satin` | **需工厂确认织物组织。** 如果实际是棉缎纹，可写为 `Mercerized cotton sateen`；如果采用其他纤维或织物组织，则应按实际成分和组织命名，不要仅为追求英文习惯而改变产品事实。 |
| https://qian-hui.com/products/bathrobes/ | `100% cotton in a 16s cut pile, about 1200 g` | **建议改为：** `100% cotton cut-pile terry bathrobe, made with 16s yarn, approximately 1,200 g per garment in [specified size].` 需工厂确认 `16s` 的具体纱支体系和 1,200 g 对应的浴袍尺码。不要未经确认就把 `16s` 改写成 `16 Ne`；1,200 g 是单件重量，不是 GSM。 |
| https://qian-hui.com/products/bathrobes/ | `less lint in the wash` 与后文 `releases water and lint more readily` | **需工厂确认或删除无依据的性能承诺。** 同一页面对掉絮表现的说法不一致。若工厂有明确的洗涤测试，可以按测试方法、洗涤次数和结果描述；没有测试依据时，建议不承诺 `less lint`。 |
| https://qian-hui.com/hotel-slippers/ | `Terry and waffle are the throwaway end. Coral fleece and dense velvet get taken home.` | **建议改为：** `The intended use of a hotel slipper depends on its upper material, sole construction, durability and whether it is designed for single-use or repeated laundering.` 客人是否带走拖鞋不能由面料名称直接判断。建议优先展示鞋面材料、鞋底材质及厚度、防滑结构、是否可水洗和适用场景等工厂可确认的信息。 |
| https://qian-hui.com/hotel-mattress-supplier/ | `Pocket spring` 和 `Independent spring` 分成两个独立结构，但后者描述为 `the same idea with individually pocketed coils` | **需工厂确认结构差异。** 如果两者都是独立袋装弹簧，应考虑合并为 `Pocket Spring Mattress (Individually Pocketed Coils)`；如果确实为不同结构，需要工厂提供弹簧排列、连接方式或内部结构说明，再分别介绍。 |
| https://qian-hui.com/hotel-mattress-supplier/ | `That covers single, small double, double and king in most of Europe and Asia.` | **建议改为：** `Available mattress widths are 110, 120, 150 and 180 cm. Standard mattress dimensions and size names vary by country, so buyers should confirm the exact finished dimensions for their project.` 保留工厂实际提供的尺寸，但不要将这些宽度直接对应为大多数欧洲和亚洲市场通用的床型名称。 |
| https://qian-hui.com/products/duvet-covers/ | `The cover size follows the duvet, not the bed.` | **原意正确，可保留并完善：** `Duvet cover dimensions should be matched to the finished dimensions of the duvet insert, with appropriate allowances for fit and shrinkage.` 这句话讲的是被套与被芯尺寸匹配，原则正确。 |
| https://qian-hui.com/hotel-bedding-supplier/ | `The down-alternative item is a quilt. In the US the same construction is usually sold as a comforter. It is the same product.` | **建议改为：** `Product terminology varies by market. Depending on its filling, quilting and intended use, the item may be described as a quilted comforter or quilt. Buyers should confirm the actual construction and whether it is designed for use as a standalone bedcover or as a duvet insert.` `Quilt` 和 `comforter` 在不同市场的定义和使用方式并不总是相同，不宜直接说它们一定是同一种产品。 |

---

## 5. 公司介绍、工厂身份及认证表述

| URL | 原描述 | 应该描述 |
|---|---|---|
| https://qian-hui.com/ | `One plant, one QC process, one shipment.` | **需确认实际供应链范围。** 如果订单涉及自有工厂和合作工厂，`One plant` 可能让采购商误以为所有产品都在同一工厂生产。可考虑：`One coordinated order, one quality-control process, one export shipment.` 但只有在订单确实由统一团队协调、执行统一质量控制并合并出口时才使用。若产品生产地点不同，建议在相关产品页如实说明。 |
| https://qian-hui.com/ | `Hotel linen supply, direct from the manufacturer` | **需按产品实际生产关系确认。** 如果床单、毛巾和浴袍由 Qianhui 自有工厂生产，而床垫由合作工厂生产，可在正文解释：`Bed linen, towels and bathrobes are manufactured at our Qingdao facility. Mattresses are sourced from specialist manufacturing partners to project specifications.` 不要把合作工厂生产的产品说成自有工厂制造。若工厂提供的实际情况不同，应按真实供应链调整。 |
| https://qian-hui.com/hotel-mattress-supplier/ | `Hotel mattress supplier & custom manufacturer` | **需确认 Qianhui 是否实际制造床垫。** 如果床垫由专业合作工厂生产，建议正文明确 Qianhui 的角色是供应、项目配套或采购协调；例如：`Hotel Mattress Supplier & Project Sourcing Partner`。此项不应仅凭网站措辞判断，需先确认企业实际制造关系。 |
| https://qian-hui.com/company/ | `Hotel textiles made in Qingdao since 1987` | **需核对企业历史资料。** 如果 1987 年是集团或相关纺织生产业务开始运营的年份，可按证明文件准确说明；如果只是旗下某一企业或工厂的成立时间，不应让读者误以为当前网站主体自 1987 年起一直以同一法人身份经营。 |
| https://qian-hui.com/company/ | `was authorised by the International Olympic Committee as an Olympic licensed product supplier.` | **需核实授权文件原文。** 请确认文件是否由 IOC 或其授权机构出具，授权主体、授权产品类别、授权期限及具体身份是什么。如果实际身份是某届奥运会酒店布草项目供应商，而不是 IOC 授权商品供应商，应按文件中的真实身份改写。不要将项目供货经历扩大描述为 IOC 商品授权。 |
| https://qian-hui.com/certifications/ | `OEKO-TEX STANDARD 100, 3D mesh fabric` | **根据证书持有人和认证对象准确说明。** 如果证书属于面料供应商且适用于特定 3D mesh fabric，应明确写为该供应商的材料证书，不要放在容易被理解为 Qianhui 全部成品布草均已获认证的位置。若证书明确列出 Qianhui 或其成品，则按证书范围展示。 |

---

## 6. 已检查且计算逻辑基本正确的内容

以下内容在上一轮审查中未发现计算错误，但仍需确保输入数据与工厂最新规格表一致。

### 6.1 毛巾 GSM 示例

计算公式：

`GSM = Weight (g) ÷ Area (m²)`

| 产品 | 成品尺寸 | 单件重量 | 按成品尺寸及重量计算的 GSM |
|---|---:|---:|---:|
| Bath towel | 80 × 160 cm | 800 g | 625 GSM |
| Face towel | 35 × 75 cm | 150 g | 约 571 GSM |
| Hand towel | 35 × 35 cm | 60 g | 约 490 GSM |
| Bath mat | 50 × 80 cm | 400 g | 1,000 GSM |

**注意：** 这是用成品单件重量除以成品面积计算的平均单位面积重量。它不应在没有说明测量方法时，被直接等同于按照标准实验室取样、调湿和测试流程获得的面料 GSM。网站应清楚说明采用的是计算值还是标准测试值。

### 6.2 床单 Thread Count 示例

如果表格中的经纬密度单位均为每英寸根数，且 TC 采用经纱密度与纬纱密度相加的口径，则加法逻辑如下：

| 织物结构示例 | 计算方式 | TC |
|---|---:|---:|
| 40s × 40s | 145 + 95 | 240 |
| 60s × 40s | 173 + 120 | 293 |
| 60s × 80s | 200 + 92 + 92 | 384 |
| Jacquard | 173 + 180 | 353 |

**需工厂确认：** 表格中的数字是否分别代表经纱和纬纱密度；`200 + 92 + 92` 中两个 92 的技术含义是什么；是否采用同一 TC 统计口径。建议规格表同时提供 EPI、PPI、纱支及纤维成分，避免只提供一个 TC 数字。

---

## 7. 建议执行顺序

| 优先级 | 修改内容 | 执行动作 |
|---|---|---|
| P0 | 16 CFR 1633 的限值、测试方法及原型适用范围 | 先按法规原文修正网站通用指南，再由负责床垫产品的工厂核对报告范围。 |
| P0 | Mattress Protector 防水描述矛盾 | 对照产品结构和工厂规格，区分标准款与防水款。 |
| P0 | 床垫阻燃材料、检测报告及产品规格 | 对照完整测试报告、样品结构、尺寸、厚度和材料清单，不扩大解释报告结论。 |
| P1 | GSM、TC、Sateen、Satin 等术语 | 统一全站纺织品术语和计算口径。 |
| P1 | 毛巾、浴袍、床垫等产品的尺寸、重量及结构 | 与工厂最新产品规格表逐项核对，保留实际数据。 |
| P1 | 自有工厂、合作工厂及供应链关系 | 按真实生产和质量控制流程准确说明。 |
| P1 | 公司历史、奥运项目经历及证书 | 对照证书、授权文件和企业资料核对持有人、范围及时间。 |
| P2 | 耐洗、吸水、掉絮、色牢度、耐用性等性能用语 | 有测试数据则引用测试条件和结果；没有数据则使用有限定条件的描述，避免绝对承诺。 |

---

## 8. 修改前需要工厂提供或再次确认的资料

1. **酒店毛巾规格表：** 每个尺寸的成品尺寸、单件重量、GSM 的计算/测试口径、纤维成分、纱支、织造结构及洗涤测试资料。
2. **酒店床单及被套规格表：** 纤维成分、纱支体系、经纬密度（EPI/PPI）、TC 计算方式、织物组织、缩水率和色牢度测试。
3. **浴袍规格表：** `16s` 的具体含义、织物结构、每件重量对应尺码、掉絮或洗涤测试依据。
4. **床垫保护垫规格：** 四角松紧带还是包裹式结构；标准款是否防水；防水款的膜层/涂层材料及测试依据。
5. **床垫技术资料：** 弹簧结构、可压缩包装型号、恢复时间、各型号尺寸与结构差异。
6. **床垫防火文件：** 完整测试报告、报告持有人、制造商、测试样品照片/结构、材料清单、厚度和尺寸，以及报告所依据的标准版本。
7. **认证文件：** 证书完整页、持有人、适用产品/材料、工厂地址、有效期及认证范围。
8. **企业资质文件：** 1987 年历史依据、奥运相关授权或项目供货证明及准确的授权/供货身份。

---

## 9. 给网站开发人员的执行说明

- 不要修改 SEO Title、Meta Description、H1、URL Slug 和目标关键词，除非收到单独、明确的 SEO 修改指令。
- 不要更改工厂已确认的产品成分、尺寸、重量、纱支、GSM、TC、材料结构和产能数字。
- 对标记为“需工厂确认”的项目，先保留原文并在任务中标记，不要自行猜测后直接上线。
- 正文改写应尽量保留原页面的关键词、搜索意图、内部链接和内容结构。
- 涉及认证或法规的表述，必须核对官方标准或原始证书/报告，不得根据证书 Logo 或文件标题推断认证范围。
- 修改完成后，检查同一产品在首页、分类页、产品页、指南页和认证页中的名称、规格及功能描述是否一致。

**最终原则：保留 SEO 架构，以工厂原始资料为产品事实依据，只修正能够确认的技术错误、逻辑矛盾和英文表达问题。**
