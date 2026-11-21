# 千惠 B2B 站 · 执行计划

- **更新**：2026-11-18（v4）
- **输入文件**：`关键词.md`（原始 108 词）、`star-hotel-merchandise-catalogue.md`（价目表 59 个 SKU）——只读
- **本文定位**：**唯一主文档**。决策、关键词、站点结构、产品规格、排期、数据附录全在这里
- **状态**：`gefeiseo.md` 已停止维护，内容并入本文（见附录 B）

---

## 0. 一页速览

| 项目 | 结论 |
|---|---|
| 站点 | 全新独立域名，不与现有 thevoguehospitality.com 混用 |
| **业务模式** | **C 混合**：类目页抢产品词流量，页内用 MOQ/认证筛出 B 端 |
| **对外定位** | **批发商身份**（wholesale / supply / manufacturer），**不做"大牌平替"**——理由见 §2 决策 4 |
| 主打市场 | 美国（量最大）+ 澳/加/英（中国份额更高）+ 海湾（增长最快） |
| 第一阶段语言 | 英文单语 |
| 首页核心词 | `hotel linen supplier`(390) + `hotel linen supply`(480) + `hotel linen wholesale`(170) + `hotel linens wholesale`(140) + `wholesale hotel linens`(140) ≈ **1320/月** |
| 页面规模 | 首页 1 + 供应商页 3 + 类目页 4 + 合规文章 1 = **9 个 SEO 页**（另加 4 个普通产品页） |
| 流量口径 | B 端词 ≈2600/月（首页 1320 + 供应商页 310 + linens 590 + commercial 族 400，含重叠）+ 可筛的产品词 ~4000/月（含 C 端） |
| 询盘天花板 | **几十个/月**（B 端词决定的，产品词带不来更多询盘） |
| 最大风险 | **混合路线退化成纯 C 端站**——MOQ/认证筛选没做好，流量来了全是散客 |

---

## 1. 不用再讨论的结论

这些已经有数据支撑，不再反复：

1. **`hotel linen supplier` 是唯一撑得起首页的词**。390/月，KD 0，首页第 1 名是 DR 3、域龄 3.9 年的小站。
2. **供应商词簇的量极小**。`bedding` 170、`mattress` 30、`towel` 10，其余供应商词全部 <10/月。
3. **`/hotel-xxx-supplier/` 只做 3 个**，不是 11 个。其余 7 个供应商词并入这 3 页的 H2。
4. **床垫不是红海**。我此前判断"被阿里国际站/中国制造网占据"是错的——首页一个中国 B2B 平台都没有。
5. **JS Hotelier 的打法失败**。556 页 → 24 个词有排名 → 估算月搜索流量 2。禁止复制 `/news/` 模式。
6. **产品词的意图结构分两级**：`hotel towels`(1900) 的 SERP 里有 towelhub.com、hotels4humanity.com 两个 B2B 站，说明混着采购方，**可做**；`hotel bedding`(6600)、`hotel bedding set`(3600)、`down alternative duvet insert`(1300) 的 SERP 里**零 B2B 席位**（全是希尔顿/万豪/四季 to-home 店 + Amazon/Macy's/DTC），即使走混合路线也**不该做**。
7. **西班牙本土不做**。SERP 被雅高品牌店（Ibis 26 / Novotel 20 / Sofitel 54）+ Lusini（58）占据，中国进口份额仅 14%/32%。
8. **指南长尾不做流量规划**。6 个指南词全部 <10/月，只有 `16 CFR 1633`（50/月）值得写。
9. **「对标大牌」（Brand Alternatives）路子不成立**。8 个 `xxx alternatives` 词全部**无搜索量数据**，5 个连 Google 补全都不给；`marriott bedding`(1900) 首页 7/7 是万豪自家店 + Amazon。搜这个的人是嫌 1041 美元被子贵的**散客**，不是酒店采购。详见 §4.7 / §9.8。

---

## 2. 决策状态

### 决策 1：业务分叉 —— ✅ 已定：**C 混合**

**含义**：类目页去抢产品词流量，页内用 MOQ / 认证 / 批发条款把 C 端散客筛走，留下 B 端。

**代价**：转化率会很低，但成本最低，不需要改造供应链（不用做零售包装、退换货、B2C 物流、信用卡收款）。

**这条路线能不能成，取决于一条硬标准：**

> **SERP 前 10 里有没有明确的 B2B 站（bulk / wholesale / supplier 定位）？**
> 有 → 这个词混着采购方，可以做类目页。
> 没有 → 这个词是纯 C 端，做了只会来散客，不做。

实测结果：

| 词 | 月搜 | SERP 前十有无 B2B 站 | C 路线判定 |
|---|---:|---|---|
| `hotel towels` | 1900 | ✅ towelhub.com、hotels4humanity.com | ✅ 做 |
| `hotel bedding` | 6600 | ❌ 全是品牌 to-home 店 + Amazon/Costco | ❌ **不做**（量最大但不该要） |
| `hotel bedding set` | 3600 | ❌ 四季 / 希尔顿 / Macy's / Amazon | ❌ **不做** |
| `hotel linens` | 590 | ✅ innstyle、1concier、nathosp、directtextile（3–4 席） | ✅ 做 |
| `hotel slippers` | 1600 | ✅✅ **4 席**：robemart、softtouchhospitality、amenitiesdepot、hotelify | ✅✅ 最佳样本 |
| `hotel mattress protector` | 50 | ✅✅ **5 席** | ✅✅ B2B 密度最高 |
| `hotel linen supply` | 480 | ✅ **10 席**（整页全是批发商） | ✅ 首页承接 |
| 其余产品词 | 40–1900 | ❌ 0–2 席 | 见 §4.2 / §4.5 |

**C 路线的三个执行要件**（缺一个就会退化成纯 C 端站）：

1. **意图过滤前置**：类目页 H1 下方常驻一行 `Wholesale only · MOQ 50 pcs · Trade accounts available`——不能让访客滑到第 3 屏才知道这是 B2B。
2. **不标零售价**：价格一律用 "per dozen / per case" 或 "Request quote"，页面不出现单件零售价。
3. **表单加业务类型字段**：`Hotel / Distributor / OEM project / Individual`。这是唯一能算出真实 B 端占比的方法——否则做半年也不知道来的到底是谁。

**C 路线的现实预期**：头部词（`hotel bedding` 6600）打不动，SERP 被酒店品牌官方店和 Amazon 锁死。**量只能从"有 B2B 席位的中长尾"拿**：`hotel towels` 1900、`hotel linens` 590、以及规格词（GSM / thread count / 尺寸）。

### 决策 2：第二语言先做哪个

| 语言 | 中国货规模 | 竞争状态 | 成本 |
|---|---:|---|---|
| **西语（拉美）** | ≈$0.9–1.0B | 墨西哥本土厂 + 中国同行机翻站，但**三国 SERP 里零中国供应商**；词真实存在 | 中低 |
| **日语** | ≈$1.66B | ❌ **采购意图的搜索行为几乎不存在**（见下） | 不建议做 |
| 韩语 | ≈$0.43B | ❌ 更差——韩国搜索被 Naver 主导，不是 Google | 不建议 |
| 德语 | ≈$0.7B | ❌ 中国份额仅 15%/30% | 不建议 |

**✅ 已验证（2026-11-17）：日语不建议做 SEO 站。** 三条证据：

1. **采购类词的自动补全几乎为空**：`寝装品 卸`（寝装品批发）、`ホテル用リネン`、`ホテル リネン 製造`、`業務用 寝具 卸` 全部 **0 条建议**；`ホテル用タオル`、`ベッドシーツ 業務用` 只有它自己。对比英文 `hotel linens wholesale` 有完整 10 条 SERP。
2. **`ホテル リネン 業者` 的首页全是「リース（租洗）」公司**：白洋舍、共同リネンサプライ、日本リネンサプライ協会、布団リース。日本酒店的布草主流模式是**租洗承包**，不是买货——和千惠的卖货模式对不上。
3. **`ホテル リネン メーカー` 第一名打「国産」**（hatly.co.jp「最高峰の国産ホテルリネンメーカー」），第二名也是「国内」。**国产在日本是卖点，是直接对进口货的反向定位。**

> **⚠️ 这里修正了我此前的一个错误推断**：我之前说"日本进口 $2.27B、中国份额 67–79%，所以日语是第二语言首选"。数字没错，但把**市场需求**当成了**SEO 可触达需求**。日本确实大量从中国买布草，但通道是**商社、OEM 合约、展会**，不是"搜 Google 找供应商"。
>
> **如果要做日本，正确渠道是**：东京国际ホテル・レストランショー、找日本商社做代理、给寝装品卸做 OEM。**不是建日语 SEO 站。**

**修正后的建议**：
- **不要做日语站。**
- 第二语言如果要做，只有**西语（拉美）**一个候选——词真实存在、竞争是本土的、中国份额在墨西哥 53–68%。
- 但仍需守住门槛：**英文站月均询盘 ≥10 再启动**。在英文站跑通之前，多语言都是在放大一个未验证的模型。

### 决策 3：第一阶段主攻市场

| 方案 | 理由 |
|---|---|
| **美国优先** | B2B 词量最大，且已有完整 SERP/KD 数据 |
| **澳/加/英优先** | 中国份额更高（澳 54%/81%、加 35%/39%、英 18%/50%），但**搜索量数据缺失** |
| **海湾（沙特/阿联酋）** | 增长最快（沙特在建 105,648 间，+13%），英语 B2B 通用，但量小 |

**我的建议**：**美国优先做，但页面文案不写死"USA"**——同一套英文页可服务澳/加/英，等地基打好再用网页版关键词工具补测这三个市场的量。

### 决策 4：站点的对外定位 —— ✅ 已定：**批发商身份，不做"大牌平替"**

两种可选的对外说法：

| 方案 | 说法 | 判定 |
|---|---|---|
| A. 品牌平替 | "Affordable alternatives to Standard Textile / Matouk / Frette / SFERRA / Westin" | ❌ **否决**（§4.7）：8 个 alternatives 词全部无搜索量，SERP 里全是嫌贵的散客 |
| **B. 批发商身份** | "Wholesale hotel linens & bedding — direct from manufacturer" | ✅ **采用**：`hotel linen supply` / `wholesale` 族 / `commercial linens` 都是真实 B 端词、真实 B 端 SERP |

**为什么 B 比 A 好，不只是搜索量的问题**：

1. **人不一样**。搜 alternatives 的人要**一条** 200 美元的床被；千惠要卖的是**500 套**客房布草。这两拨人永远不会转成同一单。
2. **能举证的东西不一样**。说"和 Frette 相当"要纤维长度、耐磨、缩水率数据——千惠只有 TC / GSM / 成分（§8.1），**没有性能测试，说了就是无依据宣称**。说"wholesale / MOQ 50 / 厂家直供"是**事实**，不需要举证。
3. **A 会毁掉 C 路线的意图过滤**。站一旦用"平替"语言，来的必然是按零售逻辑比价的散客，§2 决策 1 的三个执行要件全部失效。

> **一句话**：这个站的定位是"**青岛的酒店布草批发厂**"，不是"**便宜版的 Frette**"。前者有人搜、能举证、能筛客；后者没人搜、不能举证、筛不掉客。

---

## 3. 市场数据（实底）

### 3.1 进口规模与中国的份额

UN Comtrade，2024，HS 6302（布草）+ HS 9404（寝具），美元。

| 市场 | 布草进口 | 中国份额 | 寝具进口 | 中国份额 | 判断 |
|---|---:|---:|---:|---:|---|
| 美国 | 6.23B | 34% | 4.46B | 55% | 量最大，竞争最烈 |
| 德国 | 1.62B | **15%** | 1.49B | **30%** | 欧盟内采，不做 |
| 日本 | 1.03B | **67%** | 1.24B | **79%** | 语言壁垒，后置 |
| 英国 | 990M | 18% | 832M | 50% | 寝具可用，布草难 |
| 澳大利亚 | 684M | **54%** | 573M | **81%** | ✅ 第二市场 |
| 加拿大 | 539M | 35% | 610M | 39% | ✅ 可与美国合并 |
| 西班牙 | 501M | **14%** | 352M | **32%** | 不做 |
| 墨西哥 | 213M | 53% | 286M | 68% | 西语首选 |
| 沙特 | 102M | 45% | 210M | 66% | ✅ 增长梯队 |
| 阿联酋 | 182M(2023) | 35% | 183M(2023) | 41% | ✅ 增长梯队 |

> 法国、印度、俄罗斯在 Comtrade 该口径下无记录，未纳入。

### 3.2 酒店新建管道（CoStar / Lodging Econometrics，2026）

| 区域 | 2025 开业房间 | 2026 预计 | 变化 |
|---|---:|---:|---:|
| 亚太 | 189,471 | 251,234 | +33% |
| 美洲 | 99,056 | 132,479 | +34% |
| 欧洲 | 56,043 | 123,789 | **+121%** |
| 中东非 | 18,273 | 54,238 | **+197%** |

在建项目数：美国 5,975（全球 37%）、中国 3,588、印度 1,033、沙特 387、加拿大 345。

> **注意矛盾**：欧洲增速最快，但中国份额最低。不要因为"欧洲在涨"就去做欧洲。

---

## 4. 关键词最终清单

### 4.1 必做（有量、有盘面）

| 关键词 | 月搜(US) | KD | 首页盘面 | 归属 |
|---|---:|---:|---|---|
| `hotel linen supplier` | **390** | 0 | 第 1 名 DR 3 | `/` 首页 |
| `hotel linen supply` | **480** | — | **10/10 全是 B2B**，第 1 名 DR 2.5；竞争度 LOW（全表最低） | `/` 首页 |
| `hotel linen wholesale` | 170 | — | 同族 B2B | `/` 首页 |
| `hotel linens wholesale` | 140 | — | **10/10 全是 B2B**，bulklinensupply(DR 3) 在第 2 | `/` 首页 |
| `wholesale hotel linens` | 140 | — | 同族 B2B | `/` 首页 |
| `hotel bedding supplier` | 170→近期 50–70 | 0 | DR 12（第 4 名） | `/hotel-bedding-supplier/` |
| `hotel bedding wholesale` | 110 | — | 未查 SERP | `/hotel-bedding-supplier/` |
| `hotel mattress supplier` | 30 | 0 | DR 8（第 2 名） | `/hotel-mattress-supplier/` |
| `16 CFR 1633` | 50 | — | Evergo（需做得更细） | 合规文章——**指南 + 自证合体**，可直接提供报告，见 §8.2.3 |

> **⭐ 关键**：`supplier` 族 + `wholesale` 族是**同一个意图的两个说法**，SERP 里是同一批 DR 1–20 的小站。**一个首页可以同时吃 ≈1320/月**，而不是只有 390。
>
> `hotel linen supply` 是这个家族里被漏掉的最大一块（480/月）。它的 SERP 与 `hotel linens wholesale` 几乎逐条重合（同为 bulklinensupply / innstyle / nathosp / 1concier / dzeeusa / hotels4humanity），**所以不另建页，直接进首页**。

### 4.2 类目页承接（已按 SERP 的 B2B 席位重新裁定）

| 关键词 | 月搜 | SERP 前 10 的 B2B 站 | 判定 |
|---|---:|---|---|
| `hotel slippers` | **1600** | **4 席**：robemart、softtouchhospitality、amenitiesdepot、hotelify | ✅✅ **C 路线最佳样本** |
| `hotel towels` | 1900 | 2 席：towelhub、hotels4humanity | ✅ 做 |
| `hotel linens` | 590 | 3–4 席：innstyle、1concier、nathosp、directtextile | ✅ 做（但和首页重叠，注意差异化） |
| `hotel mattress protector` | 50 | **5 席**：bargoose、downlite、nathosp、thelinenfactory、rifz | ✅✅ B2B 密度最高 |
| `hotel bath mats` | 480 | 2 席：visionlinens、webstaurantstore | ⚠️ 偏弱，建议并入 `/hotel-towels/` 段落 |
| `hotel mattress` | 1900 | 1 席：hotels4humanity | ❌ 太弱，不做独立类目页 |
| `hotel bathrobes` | 590 | **0 席**：全是 luxurysparobes / Marriott / 四季 / Reddit / Travel+Leisure | ❌ 不做 |
| `hotel duvet cover` | 480 | **0 席**：四季 / Marriott / fluff / Bellagio / Frette | ❌ 不做 |
| `hotel pillowcase` | 140 | **0 席**：Hilton / Marriott / Sferra / Bellagio / Amazon | ❌ 不做 |

> **⚠️ 反直觉但重要**：量最大的三个词（mattress 1900、bathrobes 590、duvet cover 480）B2B 席位是 0–1，做它们只会来零售客。**量的排序和可做性的排序几乎是相反的。**

### 4.3 次级目标（可做，但有定位风险）

| 关键词 | 月搜 | 问题 | 建议 |
|---|---:|---|---|
| `hotel supplies wholesale` | **480** | SERP 10/10 全是 B2B，但品类范围比千惠宽（对手覆盖清洁用品、FF&E、餐饮设备） | **只写进首页 H2 和正文段落，不做独立页、不进 Title**——避免访客来了发现只有纺织品 |
| `hotel supply company` | 210 | 同上 | 同上 |

### 4.4 并入正文（不单独建页）

`hotel bath mat supplier`、`hotel bathrobe supplier`、`hotel slippers supplier`、`hotel duvet cover supplier`、`hotel pillowcase supplier`、`hotel mattress protector supplier`、`hotel bed sheet supplier`、`hotel comforter supplier`、`hospitality bedding supplier`、`custom hotel mattresses`、`commercial hotel mattress`、`double sided hotel mattress`（10/月）、`bulk hotel bedding`（10/月）

> `hotel towel supplier` 单数只有 10/月，但复数变体 `hotel towels suppliers` 2026-11-21 复核为 70/月、哥飞版 KD 0.2、前 10 全部是 B2B 批发站、CPC $9.35。已升级为 `/hotel-towel-supplier/` 独立供应商页，不再并入正文。

**commercial / hospitality 同义词族**（补查实测，全部并入正文，不建页）：

| 词 | 月搜 | 备注 |
|---|---:|---|
| `commercial linens` | 110 | 天然同义替换，写进首页与 `/hotel-linens/` |
| `hospitality linen` | 110 | 同上；`hospitality` 是 B 端行话，比 `hotel` 更专业 |
| `hospitality linens` | 90 | 复数变体 |
| `hospitality bedding` | 90 | 补查发现它**有真实 B 端补全**（suppliers / wholesale / grade），比 `hotel bedding` 干净 |
| `commercial towels` | 70 | 并入 `/hotel-towels/` |
| `hospitality bedding wholesale` | 30 | 并入首页 |
| `commercial bath towels` | 20 | 并入 `/hotel-towels/` |
| `commercial bedding` | 20 | 并入首页 |
| `commercial hotel bedding` | 20 | 并入首页 |
| `bedding used in hotels`（10）、`commercial hotel sheets`（10）、`commercial hotel towels`（10）、`commercial hotel supplies`（10）、`hotel bedding supply`（10）、`commercial hotel mattresses`（10） | 10 | 全部并入正文 |

> **价值**：这一族合计 ≈ 400/月，且是**纯 B 端词**（搜 `commercial linens` 的人不会是想给自己买床单的散客）。混合路线最怕 C 端污染，这批词正好补上"零污染"那一档。优先写进首页和类目页的 H2 / 正文首段，不必单独立页。

### 4.5 明确不做

| 词 | 原因 |
|---|---|
| `hotel bedding`(6600)、`hotel bedding set`(3600) | **SERP 前十零 B2B 席位** |
| `hotel quality bedding`(**880**) | 补查实测：10/10 全是零售——四季 shop、Hilton to Home、万豪 shop、Costco、Travel+Leisure、Company Store。**880 的量是个陷阱，零 B2B 席位** |
| `hotel quality sheets`(880)、`luxury hotel sheets`(880)、`hotel bedding brands`(720)、`hotel collection bedding`(5400)、`luxury hotel bedding supplier` | 同上，全是对标大牌的**散客**搜索 |
| `down alternative duvet insert`(1300)、`hotel duvet insert`(260) | 同上，SERP 全是 Boll & Branch / Parachute 等 DTC 品牌 |
| `hotel bathrobes`(590)、`hotel duvet cover`(480)、`hotel pillowcase`(140)、`hotel mattress`(1900) | **0–1 席 B2B**，做独立类目页等于建零售页 |
| `hotel textile manufacturer`、`hotel supplies manufacturer` | 意图过宽 |
| 6 个 `white hotel xxx`、`premium cotton hotel bed linen`、`premium hotel pillowcases`、`commercial hotel towels`、`independent spring hotel mattress`、`two sided hotel mattress`、`hotel bed mattress` | 无独立意图，会自我蚕食 |
| 全部指南长尾（GSM、thread count、par levels、percale vs sateen…） | 全部 <10/月，只做转化支撑不建独立页 |

> **注意**：bathrobes / duvet covers / pillowcases 仍然是目录里的产品，**要有产品页**（供访客浏览和询盘），只是**不做 SEO 类目页、不投入优化资源**。

### 4.6 目录衍生词（**规格已确认，搜索量待查**）

价目表规格已核实（见 §8），这些词的**卖点都站得住**，但**搜索量全部未知**。混合路线下这批词价值更高——规格词天然是 B 端意图，不存在 C 端污染：

```
纱支类  240/300/400 thread count hotel sheets、40s cotton hotel sheets、
        mercerized cotton hotel sheets、jacquard hotel bedding、air jet woven
毛巾类  625 gsm hotel towel、16s cotton bath towel、hotel hand towel 490 gsm
被芯类  hotel duvet insert、down alternative duvet insert、200gsm down alternative comforter
结构类  pocket spring hotel mattress、medium firm hotel mattress、
        mattress with topper、20/25/30cm hotel mattress
面料类  viscose cooling fabric hotel bedding（冰丝）
合规类  16 CFR 1633 hotel mattress（**指南 + 自证，可直接提供报告**，见 §8.2）
场景类  hotel bedding set、hotel linen set、hotel opening supplies、china hotel linen manufacturer
```

**动作**：用网页版批量跑一轮搜索量，只保留月搜 ≥30 且 SERP 里有 B2B 站的，再决定要不要建页。

> **注意**：`800g bath towel` 这个写法要改。800g 是单件克重，GSM 是 625。英文市场搜 `800 gsm` 的人指的是克重/㎡，写错会被懂行的采购方看出来。

### 4.7 「对标大牌」（Brand Alternatives）——❌ 已用数据否决

想法是：把站点定位成"Standard Textile / Matouk / Marriott / Frette / SFERRA / Westin 的平价替代"。**这在本项目里不成立**，三条独立证据：

| 证据 | 结果 |
|---|---|
| **搜索量** | 8 个 `xxx alternatives` 词：`matouk alternatives`、`sferra alternatives`、`frette alternatives`、`standard textile alternatives`、`marriott bedding alternatives`、`westin heavenly bed alternatives`、`hotel bedding alternatives`、`hotel linen alternatives` —— **全部无数据（NULL）** |
| **Google 补全** | 5 个词连补全都不给（sferra / standard textile / hotel bedding / hotel linen 的 alternatives 全空）。`matouk alternatives` 的补全串到 `alternatives for master` / `alternatives to makehuman`（技术软件），说明需求低到无法聚类 |
| **SERP 意图** | `matouk alternatives` 前十：Reddit ×3、Robb Report / Town&Country 榜单、CB Insights 公司页、`Matouk Sheet Dupe`、**"Looking for an Affordable Alternative to this Matouk Duvet ($1041 for duvet + …)"** ——**零 B2B，全是嫌贵的零售消费者** |
| **品牌词本身** | `sferra bedding` 6600、`westin heavenly bed` 4400、`marriott hotel bedding` 2400、`frette bedding` 1900、`marriott bedding` 1900 —— 量大但全部 HIGH 竞争且**纯导航意图**：`marriott bedding` 首页 **7/7 是 shop.marriott.com + Amazon** |
| **autocomplete 旁证** | `marriott bedding` 的补全：for sale / store / **promo code** / reviews / canada —— 买东西的人，不是采购的人 |

**根本问题**：`alternatives` 是**价格敏感型消费者**的搜索词，不是采购员的搜索词。采购员不会搜"这家不行还有什么牌子"，他搜的是 `hotel linen supply`、`commercial linens`、`hospitality bedding`。

**结论**：不建 Brand Alternatives 页面，不做对标式定位文案。**同类需求用 commercial / hospitality 词族承接**（§4.4），同样是"专业 B 端语言"，但有真实搜索量、有 B2B 席位。

> **附带风险提示**：即使将来要做品牌对比内容，`Frette` / `SFERRA` / `Westin Heavenly Bed` 的对比都需要**纤维长度、纱支、克重、耐磨测试**等可举证数据才能说"相当"。千惠目前只有 TC / GSM / 成分（§8.1），**没有性能测试数据 → 无法做 FTC 意义上的等效宣称**。所以这条路在数据层面也是走不通的。

---

## 5. 站点结构（9 个 SEO 页 + 4 个普通产品页）

```
/                                   ← hotel linen supplier 390 + hotel linen supply 480
│                                      + linen wholesale 170 + linens wholesale 140
│                                      + wholesale hotel linens 140
│                                      ≈ 1320/月 打在一个页面上
│
├── /hotel-bedding-supplier/        ← bedding supplier 170 + bedding wholesale 110
├── /hotel-mattress-supplier/       ← mattress supplier 30
├── /hotel-towel-supplier/          ← hotel towels suppliers 70（复数变体），KD 0.2，10/10 B2B
│
├── /hotel-slippers/                ← hotel slippers 1600，4 席 B2B（C 路线最佳样本）
├── /hotel-towels/                  ← hotel towels 1900 + hotel bath mats 480（段落）
├── /hotel-mattress-protectors/     ← hotel mattress protector 50，5 席 B2B
├── /hotel-linens/                  ← hotel linens 590（需与首页差异化）
│
├── /products/                      ← 普通产品页（不做 SEO 投入，仅供浏览和询盘）
│   ├── bathrobes/                  ← 590/月但 0 席 B2B
│   ├── duvet-covers/               ← 480/月但 0 席 B2B
│   ├── pillowcases/                ← 140/月但 0 席 B2B
│   └── mattresses/                 ← 1900/月但 1 席 B2B
│
├── /company/                       ← 信任页：1987 年建厂、4 万㎡、2008 奥运布草订单
│                                      不做关键词投入，承接"这家厂靠不靠谱"
│
├── /guides/16-cfr-1633-hotel-mattress/
├── /request-a-quote/
└── /certifications/
```

**为什么类目页从 7 个减到 5 个**：bathrobes / duvet covers / pillowcases / mattress 这四个词虽然量大（合计 3110/月），但 SERP 前十里 B2B 席位是 0–1，做类目页只会建成零售页。它们保留产品页，不做 SEO 投入。

### 5.1 供应商页 vs 类目页的强制差异化（C 路线核心）

| | 供应商页 | 类目页 |
|---|---|---|
| Title | `Hotel {X} Supplier & Wholesale Manufacturer \| {Brand}` | `Hotel {Category}: {Spec A}, {Spec B}` |
| 前 40% | 采购场景：房型、MOQ、打样、交期、认证、付款 | 产品图墙 + 规格表 |
| CTA | RFQ 表单 + WhatsApp | 进供应商页 + RFQ |
| **意图过滤** | 不需要 | **必须做**，见下 |
| 篇幅 | 1200–1800 词 | 400–800 词 + 密集图片 |

#### 类目页的意图过滤清单（C 路线成败在此）

类目页会同时接到 C 端和 B 端流量。以下 5 项**全部到位**，才算混合路线成立：

| # | 位置 | 做法 | 作用 |
|---|---|---|---|
| 1 | H1 下方第一行 | `Wholesale only · MOQ 50 pcs · Trade accounts` | 3 秒内劝退散客 |
| 2 | 价格区 | 用 `per dozen` / `per case` / `Request quote`，**绝不出现单件零售价** | 不触发比价型 C 端行为 |
| 3 | 规格表 | 列 GSM、纱支、成分、认证——**列采购参数，不列"适合家庭"卖点** | 自然筛出专业读者 |
| 4 | 表单 | 首字段 `Business type: Hotel / Distributor / OEM project / Individual` | 唯一能量化 B 端占比的手段 |
| 5 | 结构化数据 | **不用** `Product` + `Offer`（会进 Google Shopping，把页面推给消费者），用 `Service` / B2B 描述 | 避免被判定为零售页 |

**内链方向**：类目页 → 供应商页 → 指南。类目页之间不互链。

---

## 6. 实施排期

| 阶段 | 周期 | 交付 | 验收标准 |
|---|---|---|---|
| **P0 准备** | 第 1–2 周 | 域名注册、GA4/GSC、表单（含 business type 字段）+ WhatsApp、认证素材整理 | 能收到测试询盘 |
| **P1 核心页** | 第 3–6 周 | 首页 + 3 个供应商页 + RFQ 页 | 提交收录，4 页全部 indexed |
| **P2 类目页** | 第 7–12 周 | 4 个类目页（slippers / towels / mattress-protectors / linens）+ 4 个普通产品页 | 每页有规格表 + MOQ + 认证图标 + 意图过滤 5 项齐全 |
| **P3 内容** | 第 13–16 周 | 16 CFR 1633 指南 + 自证页 + Spec Sheet 模板 + MOQ 说明 | 能下载 PDF 换邮箱；报告可应询提供（先确认 §8.2.2 的 4 份文件齐备） |
| **P4 观察** | 第 17–24 周 | 看 GSC 曝光、询盘数、B 端占比 | 判断是否加第二语言/第二市场 |

> SERP 补查已完成（8 个产品词 + 2 个 wholesale 词），类目页名单已收敛，可直接进入 P2。

**排名预期**：B 端词 KD 0 + 首页 DR 1–12，乐观估计 3–6 个月进首页。产品词受 C 端大站挤压，排名更难，但流量基数大。

---

## 7. 天花板与风险（必须提前对齐）

| 风险 | 说明 | 应对 |
|---|---|---|
| **⚠️ 合规宣称缺少文件支撑（法律风险）** | 工厂确认符合 1633，但若拿不出「CPSC 认可实验室报告 + 受测原型覆盖说明」，宣称仍属未证实，FTC 可执法 | 上线前收齐 §8.2.2 的 4 份文件；优先用 `tested to` 而非 `compliant`；尺寸/结构变更需确认是否重测 |
| **混合路线退化成纯 C 端站** | 类目页引来大量散客，B 端被稀释，最终既没有 B2B 询盘也没有零售转化 | §5.1 的 5 项意图过滤必须全部到位；表单 business type 字段必填 |
| **产品词打不过品牌店** | `hotel bedding` 级别被希尔顿/万豪/四季官方店 + Amazon 锁死 | 只做 SERP 里有 B2B 席位的中长尾，不碰头部 |
| **B 端询盘天花板** | 整个 B2B 供应商词簇月搜 <600，询盘只能是几十个/月量级 | SEO 不做唯一渠道，Alibaba/展会/直邮并行 |
| **预期错配** | 老板可能看到"6600/月的词"就以为能做起来 | 开工前说清楚：6600 那个词我们不做，也做不动 |
| **转换成本** | B2B 决策周期长，流量≠询盘 | 转化设计（报价单、MOQ 表、认证清单）比排名更重要 |
| **多语言误启动** | 英文站没跑通就做第二语言，等于放大未验证的模型 | 设门槛：月询盘 ≥10 才启动；且日语已验证不可行，只剩西语一个候选 |

---

## 8. 产品规格（✅ 全部已确认）

尺寸定制已确认没问题（澳标/英标/美标均可）。原来卡住文案的 6 个规格问题已全部有答案，**规格表现在可以落笔了**：

| # | 问题 | ✅ 答案 | 对页面的影响 |
|---|---|---|---|
| 1 | 床单密度 `145*95` 的单位 | **根/英寸，= 240TC** | 可写 `240 thread count`；四档规格全部可以按 TC 标注（见下表） |
| 2 | 毛巾实际 GSM | **按面积折算，取整数**：浴巾 625、面巾 571、手巾 490、浴垫 1000 | 可写 `625 GSM`，**不能写 800 GSM**（800 是单件克重，不是克重/㎡） |
| 3 | `Tiger-month` 结构 | **with topper（带顶垫/加垫层）** | 英文用 `mattress with topper` / `topper mattress`；不要直译 Tiger-month |
| 4 | `Ice Silk` 成分 | **VISCOSE（粘胶纤维）** | 可写 `viscose cooling fabric`；`ice silk` 只作辅助描述，不作主关键词 |
| 5 | 硬度分级 | **有，默认适中硬度（medium firm），可定制** | 可写 `medium firm`，并加 `custom firmness available` 作为差异化 |
| 6 | 防火检测报告 | **有报告** | ⚠️ 见下方提醒——必须确认是哪个标准 |

### 8.1 由答案推导的规格 → 关键词映射

| 产品 | 价目表规格 | 可标注的英文卖点 | 对应关键词 |
|---|---|---|---|
| 床单 | 40S×40S / 145×95 | **240 thread count**, 40s cotton | `240 thread count hotel sheets` |
| 床单 | 60S×40S / 173×120 | **≈293 TC（写 290 或 "300 thread count class"）**, 60s | `300 thread count hotel sheets` |
| 床单 | 60S×80S / 200×(92+92) | **384 TC**, 60s×80s, mercerized sateen | `400 thread count hotel sheets` |
| 提花 | 60S×80S / 173×180 | **353 TC**, jacquard | `jacquard hotel bedding` |
| 浴巾 | 80×160 / 800g | **625 GSM**, 16S spiral | `600 gsm hotel towel`（注意：实际 625，写精确值更可信） |
| 面巾 | 35×75 / 150g | **571 GSM** | `hotel face towel` |
| 手巾 | 35×35 / 60g | **490 GSM** | `hotel hand towel` |
| 浴垫 | 50×80 / 400g | **1000 GSM** | `cotton bath mat 50x80` |
| 床垫 | 独立袋装弹簧 + 220g 防火棉 | medium firm, **with topper**, 20/25/30cm | `medium firm hotel mattress`、`pocket spring hotel mattress` |

> **精度提醒**：B2B 买家看规格表时会核数。384 写成 "400TC" 在零售语境常见，但采购方拿样品一测就对不上。**建议规格表写精确值（240 / 293 / 384 / 353），正文和小标题再用 300TC/400TC 这类常见说法。**

### 8.2 ✅ 防火合规：工厂确认符合 US 16 CFR 1633

**结论：可以打美国合规，但"能写什么"取决于你手上有没有完整文件链，不是取决于结论本身。**

> 前一版记录为"国内标准"。工厂复核后确认产品符合 16 CFR 1633，本条以工厂最终结论为准。

#### 8.2.1 先分清三种说法，风险完全不同

| 说法 | 性质 | 风险 |
|---|---|---|
| `fire retardant materials / filling` | 材料事实描述 | 无风险，随便写 |
| **`tested to 16 CFR 1633`** | **测试事实** | 低——只要确有测试，这是最稳的写法 |
| `16 CFR 1633 compliant` | **法律结论** | 中——需要能证明"该 SKU 落在受测原型范围内"，否则是未证实的宣称 |

**推荐主用第二种：`Tested to 16 CFR 1633 — test report available on request`。**

理由：`tested to` 陈述的是做过的事，`compliant` 下的是法律结论。前者经得起核对，后者一旦买家发现你的具体尺寸/结构不在受测范围内，就变成虚假宣称。

美国 FTC 要求**在作出宣称之前就持有实证**，不是"被问到时再去找"。

#### 8.2.2 上线前必须到手的 4 份文件

| # | 文件 | 为什么必须有 |
|---|---|---|
| 1 | **16 CFR 1633 测试报告**，CPSC 认可实验室出具（报告上有 Lab ID） | 买家第一句就会问"哪家实验室" |
| 2 | **受测原型（qualified prototype）的规格描述** | 1633 按原型认证，不是一个型号一个证书 |
| 3 | **你实际要卖的 SKU 与受测原型的比对说明** | 结构/厚度/防火层/面料任一变更都可能需要重测 |
| 4 | **16 CFR 1632（香烟点燃）报告** | 与 1633 并列的强制项，只有 1633 不够 |

**另外两个高频追问点：**

- **尺寸覆盖**：1633 通常按某一尺寸原型测试，其他尺寸可能需要单独测试或做 pooling。**报价表里 110/120/150/180 四种宽度，要确认哪些在覆盖范围内。**
- **责任主体**：如果千惠卖的是成品床垫，责任在制造方；如果只供防火层材料、由他人组装，则 1633 责任在组装方/进口商。**这决定你能不能对外宣称。**

#### 8.2.3 页面怎么写

**认证区建议：**

```
Compliance & Testing
├── Flammability: 16 CFR 1632 / 16 CFR 1633 tested (US) — reports available on request
├── Production: ISO 9001 · OEKO-TEX（如实际持有）
└── Other markets: BS 7177 (UK) · EN 597 (EU) testing arranged on request
```

**关键词 `16 CFR 1633`（50/月）的那篇文章，现在可以两种价值合体：**

| 原设想（只有国标时） | 现在 |
|---|---|
| 纯指南："教买家怎么核供应商" | **指南 + 自证**："买家该核什么" + "我们的报告长什么样、覆盖哪些尺寸" |
| 标题：What Buyers Must Verify | `16 CFR 1633 Hotel Mattress: What US Buyers Must Verify (and How We Test)` |
| CTA：按需送检 | **直接给报告**：Request the test report |

这个写法比纯指南转化高得多——搜这个词的人就是要有 1633 的供应商，我们能直接给文件。

#### 8.2.4 对站点结构的影响

**美国床垫品类现在可以主推了。** §5 的 `/hotel-mattress-supplier/` 是独立页，之前因为合规存疑建议主推非美市场，现在可以：

- Title/H1 正常打 `hotel mattress supplier`
- 页面增加 Compliance 区块，列出 1632/1633 + 覆盖尺寸
- 询盘表单加一个勾选项 `Need 16 CFR 1633 documentation?`

#### 8.2.5 仍需你确认（3 项，不是阻塞项但不确认有风险）

1. **报告是 CPSC 认可实验室出的吗？Lab ID 是多少？** —— 普通第三方实验室的报告美国买家不认。
2. **110 / 120 / 150 / 180 四种宽度，哪些在受测原型覆盖范围内？**
3. **千惠卖的是成品床垫，还是防火层材料？** —— 决定责任主体和能不能直接宣称。

---

## 9. 数据附录：所有实测数字

### 9.1 搜索量（Google Ads 关键字规划师，美国口径）

```
── supplier 族 ──
hotel linen supplier        390   KD 0
hotel bedding supplier      170   KD 0   （近三月 70/170/50）
hotel mattress supplier      30   KD 0
hotel towel supplier         10   KD 0
hotel towels suppliers       70   KD 0.2（复数变体，2026-11-21 复核；前 10 10/10 B2B）
其余 supplier 词              全部 <10

── wholesale 族（v4 新发现）──
hotel supplies wholesale    480   竞争度 HIGH   近三月 390/320/390
hotel supply company        210   竞争度 HIGH   近三月 170/260/210
hotel linen wholesale       170   竞争度 HIGH   近三月 110/260/170
hotel linens wholesale      140   竞争度 MEDIUM 近三月 170/210/170
wholesale hotel linens      140   竞争度 MEDIUM 近三月 170/210/170
hotel bedding wholesale     110   竞争度 MEDIUM 近三月 140/90/90

── 产品词 ──
bedding 6600 / bedding set 3600 / mattress 1900 / towels 1900 / slippers 1600 /
bathrobes 590 / linens 590 / bath mats 480 / duvet cover 480 /
pillowcase 140 / mattress protector 50

── 其他 ──
16 CFR 1633                  50
```

### 9.2 产品词的 B2B 席位（SERP 前 10 实测）

| 词 | 月搜 | B2B 站数 | B2B 站 |
|---|---:|---:|---|
| hotel slippers | 1600 | **4** | robemart、softtouchhospitality、amenitiesdepot、hotelify |
| hotel mattress protector | 50 | **5** | bargoose、downlite、nathosp、thelinenfactory、rifz |
| hotel linens | 590 | 3–4 | innstyle、1concier、nathosp、directtextile |
| hotel towels | 1900 | 2 | towelhub、hotels4humanity |
| hotel bath mats | 480 | 2 | visionlinens、webstaurantstore |
| **hotel linen supply** | **480** | **10** | 见 §9.8.1（整页全是批发商） |
| hotel mattress | 1900 | 1 | hotels4humanity |
| hotel bathrobes | 590 | **0** | — |
| hotel duvet cover | 480 | **0** | — |
| hotel pillowcase | 140 | **0** | — |
| hotel bedding | 6600 | **0** | — |
| hotel bedding set | 3600 | **0** | — |
| hotel quality bedding | **880** | **0** | 四季 / Hilton to Home / 万豪 / Costco / T+L |
| down alternative duvet insert | 1300 | **0** | — |

### 9.3 wholesale 族的 SERP（`hotel linens wholesale`，140/月）

```
1  directtextilestore.com
2  bulklinensupply.com        ← DR 3
3  innstyle.com               Wholesale Hotel Linens
4  hotellinensource.com       ← DR 1
5  nathosp.com
6  shop.1concier.com
7  factorydirectlinen.com
8  dzeeusa.com
9  palmettolinen.com
10 hotels4humanity.com
```

**10/10 全是 B2B 批发站**，没有品牌 to-home 店、没有 Amazon/Costco、没有 Alibaba/Made-in-China。

### 9.4 SERP / DR（供应商词，美国）

| 词 | 第 1 名 | 关键低 DR 站 |
|---|---|---|
| hotel linen supplier | bulklinensupply.com **DR 3**（域龄 3.9 年） | 第 10 名 DR 1、第 8 名 DR 10 |
| hotel bedding supplier | — | 第 2 名 DR 3、第 4 名 DR 12、第 8 名靠行为数据 |
| hotel mattress supplier | — | 第 2 名 DR 8、第 7 名 DR 12、第 8 名 Marriott DR 92 |
| hotel towel supplier | — | 第 8 名 DR 1（用首页） |

### 9.5 竞品与现有站

#### 9.5.1 站点规模总表（sitemap 实测）

| 站点 | URL 数 | 内容模型 | 首页 Title | 出词能力 |
|---|---:|---|---|---|
| **jshotelier.com**（江苏，1999） | **556** | 356 文章 + 131 产品 + 40 页；大量 `/news/` 薄页 | Hotel Linen Manufacturer Since 1999 | 24 词有排名，估算流量 **2/月**，前 10 位 0 词 |
| **hotelweave.com**（中国） | **83** | 51 篇买家指南 + 28 页；无商业落地页 | Hotel Linen Supplier & Manufacturer in China | 未查 |
| eliyahotellinen.com（中国） | 未取到 | 服务器持续返回 **520**（2026-11-17 两次尝试均失败） | — | — |
| mvtextil.com（欧洲） | 少量指南页 | 欧洲本地 B2B，有区域优势 | Wholesale Towels & Bedding for Hotels in Europe | 未查 |
| anabyn.com（印度） | — | 出口商定位 | Towel, Bed Linen & Bathrobe Exporter from India | 未查 |
| **thevoguehospitality.com**（千惠现有站） | **134** | 见 9.5.4 | — | 未查 |

#### 9.5.2 JS Hotelier：50+ 个 `/news/` 页在打采购意图词，但已被证明无效

样本：

```
/news/2026-top-5-reliable-hotel-linen-suppliers-in-c
/news/which-china-hotel-linen-suppliers-should-you-t
/news/hotel-linen-supplier-sourcing-guide-2026-how
/news/top-5-verified-hotel-linen-manufacturers-in-ch
/news/who-makes-the-best-hotel-towel-suppliers-in
/news/how-to-wholesale-hotel-towels
/news/customized-wholesale-of-hotel-slippers
/news/five-star-hotel-towel-supplier
```

**问题**：`/news/` 路径、标题被截断（`in-c`、`should-you-t`）、产品堆料式内容。**结果：556 页换来估算月搜索流量 2，4 个供应商词的首页里一个都没出现。**

→ **教训：数量堆不出排名。**

#### 9.5.3 HotelWeave：内容质量高，但没有商业落地页（最值得对标的样本）

83 个 URL 里，含 supplier/manufacturer/wholesale 的 12 个页面**全是买家指南文章**，不是落地页：

```
/how-to-vet-a-china-hotel-linen-supplier-before-you-order/
/finding-the-right-hotel-sheets-manufacturer-beyond-price-and-samples/
/best-towel-suppliers-for-boutique-hotels-a-buyers-guide/
/hotel-linen-suppliers-in-the-usa-a-smart-buyers-guide/
/bulk-hotel-linens-specs-suppliers-cost-breakdown/
```

产品页只有纯类目页：`/bed-linen/`、`/towels/`、`/bathrobe/`、`/bath-mats/`、`/slippers/`、`/mattress-protector/`、`/mattress-topper/`、`/pillow/`、`/duvet/`、`/blankets/`。

**⭐ 最值得照抄的询单漏斗文章结构**（`how-to-vet-a-china-hotel-linen-supplier-before-you-order`，正文约 3000 词）：

```
What Separates a Hospitality-Specialized Factory from a General Textile Exporter
→ Certifications You Should Require
→ MOQs & Lead Times from a China Hotel Linen Supplier
→ Shipping, Incoterms, and FTC Compliance Every US Buyer Needs to Understand
→ How to Vet and Shortlist Manufacturers Without Visiting China
→ Sampling Protocols and Pre-Shipment Inspections That Protect Your Order
→ Put the Framework to Work Before Your Next Order
→ CTA: Get My 24-Hour Quote
```

**它不卖产品，卖"我懂你的采购风险"。** 我们的合规页和 Spec Sheet 页可以按这个骨架写。

#### 9.5.4 现有站 thevoguehospitality.com 诊断（134 个 URL）

```
tag 相关       19 个   /taglist.html、/tagdetail/xxx.html
产品相关        9 个
类目页          bed-linens / towels / pillow / duvet / mattress-protector /
               bath-mat / bathrobes / curtains / mattresses / cushion-cover /
               roller-blind / voile-curtain / fabric-curtain / sports-towel /
               beach-and-pool-towel …
区域页          north-africa / asia / middle-east / europe
其他            application-scenarios / honors / case
```

**两个可直接复用的资产：**

1. **`/mattresses/` 和 `/curtains/` 已有页面**——正是竞品空白的两个品类。产品图片、规格参数、文案素材**现成**，新站不用从零拍摄和撰写。
2. **已有四个区域页**（north-africa / asia / middle-east / europe），新站的多区域结构可以直接继承这套划分。

**但现有站不能直接改**：大量 tag 页 + CMS 模板结构产不出有排名的内容页，这也是决定做新域名的原因。

#### 9.5.5 产品品类覆盖矩阵

> 下表的"空白"指**竞品站点没有这个品类的内容**，不等于 Google 首页没有这个品类的供应商。已实测：床垫是品类和关键词双重空白（首页无阿里/中国制造网，KD 0）。

| 产品线 | HotelWeave | JS Hotelier | 千惠现有站 | 千惠目录 | 判断 |
|---|---|---|---|---|---|
| 床垫 mattress | ❌ 只有 topper | ❌ 只有 topper | ✅ `/mattresses/` | ✅ 有 | 竞品品类空白 |
| 窗帘 curtains | ❌ | ❌ | ✅ `/curtains/` | ⚠️ 价目表无 | 竞品品类空白 |
| 枕套 pillowcase | 无独立页 | 1 篇 `/news/` | 含在 bed-linens | ✅ 有 | 竞品弱覆盖 |
| 床单 bed sheets | 类目页 | 类目页 | ✅ `/bed-linens/` | ✅ 有 | 有竞争 |
| 被套 duvet covers | 类目页 | 类目页 | 含在 bed-linens | ✅ 有 | 有竞争 |
| 被芯/枕芯 | 类目页 | 类目页 | ✅ `/pillow/`、`/duvet/` | ✅ 有 | 有竞争 |
| 保护垫 protector | 类目页 | 类目页 | ✅ `/mattress-protector/` | ✅ 有 | 有竞争 |
| 毛巾 towels | 类目页 | 类目页 | ✅ `/towels/` | ✅ 有 | 有竞争 |
| 浴垫 bath mats | 类目页 | 类目页 | ✅ `/bath-mat/` | ✅ 有 | 有竞争 |
| 浴袍 bathrobes | 类目页 | 类目页 | ✅ `/bathrobes/` | ✅ 有 | 有竞争 |
| 拖鞋 slippers | 类目页 | 类目页 | 未见独立页 | ✅ 有 | 千惠也缺 |

> **注意床垫的反差**：品类是空白，但 `hotel mattress` 1900/月而 `hotel mattress supplier` 只有 30/月——**品类的量在 C 端，不在采购端**。

### 9.6 西语 SERP（gl 生效，实测）

| 市场 / 词 | 头部对手（DR） | 中国供应商 |
|---|---|---|
| MX `toallas para hoteles` | toallahotel(0)、habers(0.4)、blancosselectos(0.1)、nerinatextiles(5)、burritoblanco(36) | **0 家** |
| ES `ropa de cama hotelera` | lusini(58)、sofitelboutique(54)、burritoblanco(36)、ibisstore(26)、novotelstore(20) | **0 家** |
| CL `toallas para hoteles` | cannonhome(43)、mashini(19)、toallaslourdes(3.3) | **0 家** |

> 墨西哥行业词是 **`blancos`** 而非 `ropa de cama`；拖鞋在墨西哥叫 `pantuflas`，西班牙/秘鲁叫 `zapatillas`。

### 9.7 日语实测（gl=jp 生效，2026-11-17）

**自动补全覆盖度**（对比英文）：

| 日语种子词 | 中文含义 | 自动补全 |
|---|---|---:|
| `寝装品 卸` | 寝装品批发 | **0 条** |
| `ホテル用リネン` | 酒店用布草 | **0 条** |
| `ホテル リネン 製造` | 酒店布草制造 | **0 条** |
| `業務用 寝具 卸` | 商用寝具批发 | **0 条** |
| `ホテル 備品 卸` | 酒店备品批发 | 1 条（自身） |
| `ホテル用タオル` | 酒店用毛巾 | 1 条（自身） |
| `ベッドシーツ 業務用` | 商用床单 | 1 条（自身） |

**`ホテル リネン 業者` 首页**（全是租洗公司）：

```
watakyu.co.jp / hatchi.info（布団リース）/ cleaning-m.jp /
hakuyosha.co.jp（白洋舍）/ kyodolinen.com / weeds17.jp /
hakkogroup.jp / jlsa.or.jp（日本リネンサプライ協会）/ baseconnect.in
```

**`ホテル リネン メーカー` 首页**（全是国产厂）：

```
1 hatly.co.jp        最高峰の**国産**ホテルリネンメーカー
2 hotel-blooming.com
3 linenplanning.com  大野株式会社
7 服部テキスタイル    **国内**ホテル用高級ベッドリネン
```

**`業務用タオル 卸` / `ホテル用タオル 卸売`**：itohen.jp、towel-oroshi.jp、towel-white.com、towel-kan.com、taoru.jp（マルセン）、maruwa21.com 等——**100% 日本本土批发商，零中国供应商，零阿里巴巴**。

**数据限制**：`keyword_volume --hl ja` 报错 `Invalid Field: 'language_code'`；`lookup_keywords --gl jp` 12 个词全部无数据。**日本搜索量未能获取，不做估算。**

### 9.8 补查：`hotel linen supply` 与 commercial / hospitality 族（2026-11-18）

#### 9.8.1 `hotel linen supply`（480/月）——10/10 全是批发商

```
1  bulklinensupply.com        ← DR 2.5
2  directtextilestore.com     ← DR 76
3  nathosp.com                ← DR 30
4  buyDirect.missionlinen.com ← DR 40
5  innstyle.com               ← DR 37
6  dzeeusa.com                ← DR 30
7  shop.1concier.com          ← DR 46
8  hotels4humanity.com        ← DR 8
9  standardtextile.com        ← DR 52（行业老大）
10 hotelitems.com             ← DR 7
```

**与 §9.3 的 `hotel linens wholesale` 是同一批站**（bulklinensupply / directtextile / nathosp / innstyle / 1concier / dzeeusa / hotels4humanity 七个重合）。所以：**同一个首页就能吃，不另建页**。

DR 分布：**3 个站 ≤ DR 8，且第 1 名就是 DR 2.5**。这是全项目里"首名权重最低"的一个词。

#### 9.8.2 低 DR 站的实际收入证明（这是最有说服力的一条）

| 域名 | DR | 月访问 | 域名注册 | 头部出词 |
|---|---:|---:|---|---|
| **bulklinensupply.com** | **2.5** | **21,826** | **2022-12-28（≈4 年）** | white seersucker hotel bed sheet(570)、wholesale linens(450)、throw pillows in bulk(380) |
| hotels4humanity.com | 8 | 8,838 | 2010 | rollaway bed(7000)、bed scarf(600) |
| hotelitems.com | 7 | 4,566 | 2006 | pharmacopia(2050)、pillow cases in bulk for hunting lodge(1690)、hotel bath towels(1100)、**blancos hoteleros proveedores estados unidos(120)** |

> **`bulklinensupply.com` = DR 2.5 + 4 年新域名 + 2.18 万访问/月。** 这直接否掉了"没有外链就进不去"的担忧——这个赛道的排名因子是**页面是否精准回答采购需求**，不是链接权重。
>
> 额外发现：hotelitems.com 的头部出词里有 `blancos hoteleros proveedores estados unidos`（西语"美国酒店布草供应商"，120/月）——**美国本土的西语 B 端需求已被 DR 7 的站吃到**，这是英文站之后做 `/es/` 的现成理由。

#### 9.8.3 反例：`hotel quality bedding`（880/月）——量是陷阱

```
1  shop.fourseasons.com       四季官方店
2  hiltontohome.com           Hilton to Home
3  reddit.com/r/Bedding       散客问帖
4  shop.marriott.com         万豪官方店
5  downlitebedding.com        （唯一接近 B2B 的）
6  costco.com                 Costco
7  travelandleisure.com       媒体评测
8  thecompanystore.com        零售
9  instagram.com              Reel
10 americansoftlinen.com      零售
```

**880/月看着很诱人，B2B 席位 1/10。** 和 `hotel bedding`(6600)、`hotel bedding set`(3600) 是同一类陷阱：量大、意图是 C 端。→ 见 §4.5。

#### 9.8.4 commercial / hospitality 族的搜索量（全表）

见 §4.4 表格，合计 ≈ 400/月，全部并入正文、不建页。

### 9.9 Brand Alternatives 实测（否定证据）

| 关键词 | 月搜 | Google 补全 | 判定 |
|---|---:|---|---|
| matouk alternatives | **NULL** | 有，但串到 master / makehuman | 无需求 |
| sferra alternatives | **NULL** | **无补全** | 无需求 |
| frette alternatives | **NULL** | 有，且衍生词是 "why are frette sheets so expensive" | 散客 |
| standard textile alternatives | **NULL** | **无补全** | 无需求 |
| marriott bedding alternatives | **NULL** | — | 无需求 |
| westin heavenly bed alternatives | **NULL** | 有，衍生词是 "is it worth it" / "firm or soft" | 散客 |
| hotel bedding alternatives | **NULL** | **无补全** | 无需求 |
| hotel linen alternatives | **NULL** | **无补全** | 无需求 |

品牌词本体（大但不可碰）：

| 关键词 | 月搜 | 竞争度 | SERP 性质 |
|---|---:|---|---|
| sferra bedding | 6600 | HIGH | 品牌导航 |
| hotel collection bedding | 5400 | HIGH | 品牌导航（Macy's 自有品牌） |
| westin heavenly bed | 4400 | HIGH | 品牌导航 |
| marriott hotel bedding | 2400 | HIGH | 品牌导航 |
| frette bedding | 1900 | HIGH | 品牌导航 |
| marriott bedding | 1900 | HIGH | **7/7 是 shop.marriott.com + Amazon** |

`matouk alternatives` 前十（实测）：

```
1  reddit.com/r/Bedding — "Looking for luxury bath linen recommendations"
2  cbinsights.com — Top Matouk Alternatives, Competitors
3  robbreport.com — The 15 Best Luxury Sheets of 2022
4  townandcountrymag.com — 12 Best Luxury Sheets
5  figlinensandhome.com — Buyer's Guide: Matouk, Sferra, and Frette
6  followthefind.com — Matouk Sheet Dupe
7  reddit.com/r/Bedding — "Looking for an Affordable Alternative to this
                        Matouk Duvet ($1041 for duvet + ...)"
8  rafaelinteriors.com — Matouk vs Sferra
9  dallasnews.com — linens recommendations
10 reddit.com/r/Bedding — "Luxury bedding Sferra and Matouk?"
```

**零 B2B、零采购意图。** 第 7 条就是全部答案：搜这个的人是嫌 1041 美元被子贵的**零售消费者**，他想买一条 200 美元的仿款床被，不是想订 500 套酒店客房布草。

---

## 10. 已知的数据限制

| 限制 | 影响 | 状态 |
|---|---|---|
| **Web.Cafe `keyword_volume` 的 `gl` 参数失效** | 非美国搜索量拿不到。已用对照测试证明：同一词 gl=us/mx/MX 三次返回完全相同 | 需要用 Google Keyword Planner 手动切换地区 |
| **Playwright 不支持 macOS 13** | claude-seo 的渲染类功能（截图、JS 抓取）不可用 | 只影响该插件，不影响本项目 |
| **法国/印度/俄罗斯进口数据** | Comtrade 该口径无记录 | 未纳入市场分析 |
| **产品词 B 端占比** | 无转化数据，只能靠 SERP 意图判断 | 上线后用 GSC 搜索词报告验证 |

---

## 11. 下一步（按顺序）

| # | 动作 | 谁做 | 积分 |
|---|---|---|---:|
| 1 | ✅ 决策 1 已定：**C 混合** | — | — |
| 2 | ✅ 8 个产品词 SERP 已补查，类目页名单已收敛 | — | 已完成 |
| 3 | ✅ 长尾拓词完成，挖到 `wholesale` 词族（+840/月） | — | 已完成 |
| 4 | ✅ 日语站已验证：**不建议做** | — | 已完成 |
| 5 | ✅ 6 个产品规格问题已回答（TC / GSM / topper / viscose / 硬度） | 你 | — |
| 6 | ✅ 防火合规已锁定：**US 16 CFR 1633**，写法定为 `tested to`（§8.2） | 你/工厂 | — |
| 7 | ✅ Brand Alternatives 路线已实测否决（§4.7 / §9.9） | 我 | ~10 |
| 8 | ✅ 补查挖到 `hotel linen supply`（480/月，10/10 B2B，首名 DR 2.5）→ 首页从 840 提到 1320/月 | 我 | ~8 |
| 9 | 补查 `hotel supply company`（210）的 SERP——决定首页要不要加这一段 | 我 | 2 |
| 10 | 用网页版补测 **AU / GB / CA** 三个市场的 `hotel linen supply` / `hotel linen wholesale` 量 | 你 | — |
| 11 | 定域名（`brand_naming` 或 `domain_availability`） | 我 | ~2–4 |
| 12 | 开建 P1 的 4 个页面（首页 + 2 供应商页 + RFQ） | 你/我 | — |

**关键词侧已经收口了**：有量的词、有没有 B2B 席位、归到哪个页面，三条都已实测。剩下的都不是研究问题：

1. **AU / GB / CA 的量**（第 10 项）只影响文案要不要强调市场，不影响页面结构；
2. **域名**（第 11 项）；
3. **写页面**（第 12 项）——首页的 Title/H1 已经可以用 `hotel linen supply` + `hotel linen supplier` 双主词落笔。

---

## 附录 A：询盘转化路径设计

三种转化方式（表单 / 内容 / 即时沟通）在不同页面类型要分开设计，不要把同一套 CTA 铺满全站。

```
指南页（如 16 CFR 1633 / GSM Guide）
  → 文中嵌 "Hotel Bedding Spec Sheet (PDF)" 表单换下载
  → 文末 CTA: "Need specs matched to your property? Get a quote in 24h"
  → 侧栏常驻 WhatsApp

供应商页 / 类目页
  → 规格表（TC / GSM / 尺寸 / 成分）
  → MOQ + 打样周期 + 认证图标
  → 表单 + WhatsApp 双入口
  → 类目页额外：H1 下方的 wholesale-only 声明（意图过滤）

案例页
  → 项目规模、房型数、交付周期、所用规格
  → "Similar project? Talk to us"
```

**所有内容页最终指向 `/request-a-quote/`**，而不是把表单铺满全站。

**表单必备字段**（C 路线的前提）：

```
Business type:  Hotel / Distributor / OEM project / Individual   ← 单选题，必填
Destination:    Country
Products:       Multi-select
Quantity:       Free text
Email / WhatsApp
```

`Business type` 必填的理由：这是唯一能算出真实 B 端占比的方法。否则做半年也不知道来的到底是谁。

---

## 附录 B：修订记录

### v6（2026-11-18）—— 否决 Brand Alternatives，首页扩容到 1320/月

| # | 变化 | 依据 |
|---|---|---|
| 1 | **Brand Alternatives（对标 Standard Textile / Matouk / Marriott / Frette / SFERRA / Westin）路线否决** | 8 个 `xxx alternatives` 词全部 NULL 搜索量；5 个无 Google 补全；`matouk alternatives` 前十零 B2B（Reddit + 榜单 + "$1041 duvet" 的散客抱怨）；`marriott bedding` 首页 7/7 是万豪自家店 + Amazon。见 §4.7 / §9.9 |
| 2 | **首页核心词加入 `hotel linen supply`(480)**，从 ≈840/月 提到 **≈1320/月** | 480/月、竞争度 LOW（全项目最低）、SERP 10/10 全是批发商、第 1 名 DR 2.5，且与前 4 个词是同一批站 → 一页可吃 |
| 3 | 新增 **commercial / hospitality 同义词族**（≈400/月），全部并入正文不建页 | 补查实测：`commercial linens` 110、`hospitality linen` 110、`hospitality linens` 90、`hospitality bedding` 90… 这族是**纯 B 端、零散客**，正好补混合路线的意图污染问题 |
| 4 | 新增 `hotel quality bedding`(880) 到"明确不做" | 880/月但 SERP 10/10 零售（四季 / Hilton to Home / 万豪 / Costco / T+L），B2B 席位 1/10 |
| 5 | 新增**低 DR 站实绩**证据 | `bulklinensupply.com`：**DR 2.5、4 年新域名、2.18 万访问/月**。证明该赛道靠页面匹配度而非链接权重 |
| 6 | 记录美国本土**西语 B 端需求**已被 DR 7 站吃到 | hotelitems.com 出词 `blancos hoteleros proveedores estados unidos`(120)，为将来 `/es/` 提供现成理由 |

### v5（2026-11-18）—— 防火合规结论变更

| # | 变化 | 说明 |
|---|---|---|
| 1 | 防火合规从"国内标准"改为"**工厂确认符合 US 16 CFR 1633**" | 以工厂最终复核结论为准，覆盖前一版记录 |
| 2 | 合规写法定为 `tested to` 优先，`compliant` 慎用 | `tested to` 是测试事实，`compliant` 是法律结论，后者需证明 SKU 落在受测原型范围内 |
| 3 | 新增上线前必收的 4 份文件清单 | 16 CFR 1633 报告 / 受测原型说明 / SKU 与原型比对 / 16 CFR 1632 报告（§8.2.2） |
| 4 | **美国床垫品类恢复主推** | 之前因合规存疑建议主推非美市场，现在 `/hotel-mattress-supplier/` 可正常打美国词 |
| 5 | `16 CFR 1633` 文章从"纯指南"升级为"指南 + 自证" | 搜这个词的人就是要有 1633 的供应商，能直接给报告，转化高于纯指南 |

### v5（2026-11-21）—— 新增毛巾供应商页

| # | 变化 | 依据 |
|---|---|---|
| 1 | 新增 `/hotel-towel-supplier/`，SEO 页从 8 个增加到 9 个 | `hotel towels suppliers` 70/月、哥飞版 KD 0.2、前 10 十席全是 B2B 批发站，最弱占位者 DR 8；复数变体推翻了 v3「hotel towel supplier 仅 10/月」的判断 |
| 2 | 其余复核对齐词一律不建新页 | `hotel bed linen`(90) 并入 `/hotel-linens/`；`hotel bath linen`(10) 并入 `/hotel-towels/`；`custom hotel bedding`(10) 并入 `/hotel-bedding-supplier/`；`hotel table linen`(110, KD 2.6) 因本厂不做桌布放弃 |

### v4（2026-11-18）—— 本轮

| # | 变化 | 依据 |
|---|---|---|
| 1 | 类目页从 7 个减到 4 个（砍掉 bathrobes / duvet covers / pillowcases / mattress） | 8 个产品词 SERP 实测：这 4 个词前 10 的 B2B 席位是 0–1 |
| 2 | 首页目标词从 1 个扩到 4 个（+ `hotel linen wholesale` / `hotel linens wholesale` / `wholesale hotel linens`） | 挖到 wholesale 词族，SERP 10/10 全是 B2B，合计 ≈840/月 |
| 3 | **日语从第一优先降为"不建议做"** | 采购类词自动补全近零；`業者` 首页全是租洗公司；`メーカー` 第一名打「国産」 |
| 4 | 6 个产品规格问题已回答，规格表可落笔 | 用户确认：英寸/240TC、GSM 按面积、topper、viscose、medium firm、有报告 |
| 5 | 合并 gefeiseo.md 的竞品拆解、现有站诊断、品类矩阵、询盘路径 | gefeiseo.md 停止维护，plan.md 成为唯一主文档 |

### v3（2026-11-17）—— 并入实测数据，推翻 3 条判断

| # | 原判断 | 实测 | 处理 |
|---|---|---|---|
| 1 | 床垫词被阿里国际站/中国制造网/Bossgoo 占据 | 首页**无任何中国 B2B 平台**；DR 8 / DR 12 / 万豪 DR 92；KD 0 | 判断作废 |
| 2 | 建 11–12 个 `/hotel-xxx-supplier/` 落地页 | 7 个供应商词月搜 <10；`hotel towel supplier` 仅 10 | 方案作废，砍到 3 个 |
| 3 | 指南长尾是第二梯队 | 6 个指南词全部 <10，只有 16 CFR 1633 有 50 | 降级为转化支撑 |

### v2（2026-11-17）—— 校对修正

| # | 问题 | 处理 |
|---|---|---|
| 1 | 现有站描述错误（原写"大量为 tag 页"） | 改为实测：tag 19/134，并补上 `/mattresses/`、`/curtains/` 可迁移 |
| 2 | 梯队排序缺置信度 | 增加置信度列 + 前置警告 |
| 3 | 缺关键词 → 目标 URL 映射 | 新增映射表 |
| 4 | 落地页与类目页未定义差异化 | 新增差异化规则（现为 §5.1） |

### v1（2026-11-17）
基于 sitemap 实测的初版报告。

### 已经被放弃的内容

原 `gefeiseo.md` 里的 **108 词逐行 URL 映射表**（v2 建立）**不再保留**。原因：它基于"11 个供应商落地页"的旧结构，其中 7 个页面已被取消，保留会误导。

**没有信息损失**：
- 原始 108 个词 → 仍在 `关键词.md`
- 每个词的去留 → 已收敛进 §4.1–§4.5 的分组
- 页面归属 → 见 §5 站点结构

---

## 附录 C：文件说明

| 文件 | 状态 | 作用 |
|---|---|---|
| **`plan.md`** | ✅ **唯一主文档，持续更新** | 决策、关键词、结构、规格、排期、数据附录 |
| `关键词.md` | 保留只读 | 原始 108 词需求清单 |
| `star-hotel-merchandise-catalogue.md` | 保留只读 | 原始价目表（59 个 SKU） |
| `gefeiseo.md` | ⛔ **停止维护** | 历史调研过程，内容已并入本文 |

---

*本文为唯一主文档。数据口径：搜索量 = Google Ads 关键字规划师（美国）；KD = 哥飞版；DR = Ahrefs；SERP = Google 实时。非美国市场数据缺失处均已标注。*
