# 千惠 B2B 询单站 · 关键词调研报告

- **调研对象**：`关键词.md` 中的 108 个关键词
- **项目定位**：全新独立域名，B2B 询单站（表单 + 内容 + 即时沟通三种转化并行）
- **目标客户**：酒店集团/单体酒店直采、酒店用品批发商/分销商、工程项目/OEM 贴牌、海外贸易商/进口商
- **报告日期**：2026-11-17（v3，已并入 Web.Cafe 网页版实测的搜索量 / KD / SERP / DR）
- **数据口径**：搜索量为 **Google Ads 关键字规划师·美国口径**；KD 为**哥飞版**；SERP / DR 为实测。所有数字标注来源，不做估算。

---

## 数据状态说明（先看这里）

| 数据类型 | 状态 | 说明 |
|---|---|---|
| 竞品 URL 结构、内容数量、页面类型 | ✅ 已验证 | 直接抓取 sitemap.xml |
| 竞品产品品类覆盖 | ✅ 已验证 | 逐 URL 比对 |
| 核心词月搜索量（美国口径） | ✅ 已验证 | Google Ads 关键字规划师 |
| 核心词哥飞版 KD | ✅ 已验证 | 4 个首页级词全部 KD 0 |
| Google 首页排序 + DR | ✅ 已验证 | 4 个供应商词 + 4 个产品词 |
| JS Hotelier 实际出词能力 | ✅ 已验证 | 全站 24 个词有排名，估算月搜索流量 2 |
| **非美国市场搜索量** | ❌ **拿不到** | Web.Cafe API 的 `gl` 参数失效（已用对照测试证明），网页版也仅美国口径 |
| **产品词的真实买家占比** | ⚠️ 部分 | 已用 SERP 判断意图，但无转化数据 |
| 现有站 thevoguehospitality.com 的排名 | ❌ 未获取 | — |

> **v3 的重要变化**：上一版因无数据，所有"能不能打"的判断都是结构推断。本版补入实测数据后，**推翻了 3 条原判断**（见 §九 修订记录）。凡与 v2 冲突处，以本版实测数据为准。

---

## 一、核心结论（v3，基于实测数据）

1. **B2B 供应商词的量非常小，但盘面是空的。** 四个首页级词的美国月搜分别是 390 / 170 / 30 / 10，**哥飞版 KD 全部为 0**，首页排名者是 DR 1–12 的中小站。这组数据的含义是：**SEO 能做到，但天花板很低**。

2. **真正的量在 C 端零售词上，但那不是这个站的生意。** `hotel bedding` 6600/月、`hotel bedding set` 3600/月、`hotel towels` 1900/月——SERP 首页是希尔顿/万豪/四季的 to-home 商店 + Amazon/Costco/Macy's。这些量属于 B2C/DTC，做它等于换一个生意。

3. **"11 个 `/hotel-xxx-supplier/` 落地页"方案作废。** `hotel towel supplier` 只有 10/月，第一梯队其余 6 个供应商词**全部未收录（<10）**。落地页砍到 3 个。

4. **床垫不等于难打——原判断被推翻。** 我此前预判床垫词被阿里国际站/中国制造网占据，实测首页**一个中国 B2B 平台都没有**，排名者是 DR 8 / DR 12 的中小站。

5. **JS Hotelier 那 556 个 `/news/` 页基本白写。** 全站仅 24 个词有排名，估算月搜索流量合计 **2**，前 10 位 0 个词，且这 4 个供应商词的首页里一个都没出现。**不要复制它的打法。**

6. **打法必须反转**：不做 11 个供应商落地页，改为 **3 个供应商页 + 7 个类目页 + 合规长尾**，并且把重心从"排名"移到"转化设计"（报价单、MOQ 表、认证清单）。

---

## 二、竞品实测数据

### 2.1 页面规模（sitemap 实测，2026-11-17）

| 站点 | URL 总数 | 内容模型 | 首页 Title |
|---|---:|---|---|
| **jshotelier.com**（江苏，1999） | **556** | 356 篇文章 + 131 个产品页 + 40 个页面；大量 `/news/` 薄页 | Hotel Linen Manufacturer Since 1999 |
| **hotelweave.com**（中国） | **83** | 51 篇买家指南 + 28 个页面；纯内容驱动 | Hotel Linen Supplier & Manufacturer in China |
| **eliyahotellinen.com**（中国） | 抓取失败 | 服务器返回 520，本次未能取到 | — |
| **mvtextil.com**（欧洲） | 少量指南页 | 欧洲本地 B2B，区域优势 | Wholesale Towels & Bedding for Hotels in Europe |
| **anabyn.com**（印度） | — | 出口商定位 | Towel, Bed Linen & Bathrobe Exporter from India |
| **thevoguehospitality.com**（千惠现有站） | **134** | tag 页 19 个（约 14%）、产品页 9 个，其余为类目页 + 区域页 + 案例页 | — |

**现有站 URL 构成实测（2026-11-17）**：

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

**⚠️ 这条对建新站直接有用**：现有站已经有 `/mattresses/` 和 `/curtains/` 两个类目页——正是第二章判定为"竞品空白"的两个品类。这两个品类的**产品图片、规格参数、文案素材是现成的**，新站不需要从零拍摄和撰写。

同时现有站已有 north-africa / asia / middle-east / europe 四个区域页，新站的多区域结构也可以直接继承这套划分。

### 2.2 JS Hotelier：在猛攻采购意图词，但打法很糙

556 个 URL 中有 **50 多个**页面在打 supplier / wholesale / manufacturer 意图，全部走 `/news/` 路径：

```
/news/2026-top-5-reliable-hotel-linen-suppliers-in-c
/news/which-china-hotel-linen-suppliers-should-you-t
/news/hotel-linen-supplier-sourcing-guide-2026-how
/news/top-5-verified-hotel-linen-manufacturers-in-ch
/news/who-makes-the-best-hotel-towel-suppliers-in
/news/how-to-wholesale-hotel-towels
/news/how-to-wholesale-hotel-bath-mats
/news/customized-wholesale-of-hotel-slippers
/news/five-star-hotel-towel-supplier
/news/hotel-white-towels-china-manufacture
```

**读法**：
- 现象：这批词确实有人系统性地在做
- 质量问题：`/news/` 路径、标题被截断（`in-c`、`should-you-t`）、产品堆料式内容，属于典型的低质量批量页
- **✅ v3 已验证（见 §3.2.5）：基本白写。** 全站仅 24 个词有排名，估算月搜索流量合计 2，前 10 位 0 个词；这 4 个供应商词的首页里一个都没出现。
- **教训**：不要复制它的打法。它证明的是"数量堆不出排名"，不是"这批词好打"。

### 2.3 HotelWeave：内容质量高，但没有商业落地页

它全部 83 个 URL 中，含 supplier / manufacturer / wholesale 的 12 个页面**全是买家指南文章**，不是落地页：

```
/how-to-vet-a-china-hotel-linen-supplier-before-you-order/
/finding-the-right-hotel-sheets-manufacturer-beyond-price-and-samples/
/best-towel-suppliers-for-boutique-hotels-a-buyers-guide/
/hotel-linen-suppliers-in-the-usa-a-smart-buyers-guide/
/bulk-hotel-linens-specs-suppliers-cost-breakdown/
```

产品页只有纯类目页：`/bed-linen/`、`/towels/`、`/bathrobe/`、`/bath-mats/`、`/slippers/`、`/mattress-protector/`、`/mattress-topper/`、`/pillow/`、`/duvet/`、`/blankets/`、`/table-cover/`、`/table-cloth/`、`/table-skirting/`。

**参考价值最高的单篇文章结构**（`how-to-vet-a-china-hotel-linen-supplier-before-you-order`，正文约 3000 词）：

```
What Separates a Hospitality-Specialized Factory from a General Textile Exporter
→ How to Vet a China Hotel Linen Supplier: Certifications You Should Require
→ MOQs & Lead Times from a China Hotel Linen Supplier
→ Shipping, Incoterms, and FTC Compliance Every US Buyer Needs to Understand
→ How to Vet and Shortlist Manufacturers Without Visiting China
→ Sampling Protocols and Pre-Shipment Inspections That Protect Your Order
→ Put the Framework to Work Before Your Next Order
→ CTA: Get My 24-Hour Quote
```

这是一个标准的 **B2B 询单漏斗文章**：不卖产品，卖"我懂你的采购风险"。

### 2.4 产品品类覆盖矩阵（关键发现）

> **先厘清一个容易误读的概念**：下表的"空白"指**竞品站点没有这个品类的内容**，不等于 **Google 首页没有这个品类的供应商**。品类空白和关键词空白是两件不同的事，后文 §3.5 会分开讨论。
>
> **✅ v3 已实测床垫**：品类空白确认，关键词层面也是空白（首页无阿里/中国制造网，KD 0）。详见 §3.5。
>
> **⚠️ 但要注意**：床垫的产品词 `hotel mattress` 有 1900/月，而供应商词 `hotel mattress supplier` 只有 30/月。品类的量在 C 端，不在采购端。

| 产品线 | HotelWeave | JS Hotelier | 千惠现有站 | 千惠目录 | 判断 |
|---|---|---|---|---|---|
| 床垫 mattress | ❌ 只有 topper | ❌ 只有 topper | ✅ `/mattresses/` | ✅ 有 | 竞品品类空白 |
| 窗帘 curtains | ❌ | ❌ | ✅ `/curtains/` | ✅ 有 | 竞品品类空白 |
| 枕套 pillowcase | 无独立页 | 1 篇 `/news/` | 含在 bed-linens | ✅ 有 | 竞品弱覆盖 |
| 床单 bed sheets | 类目页 | 类目页 | ✅ `/bed-linens/` | ✅ 有 | 有竞争 |
| 被套 duvet covers | 类目页 | 类目页 | 含在 bed-linens | ✅ 有 | 有竞争 |
| 被芯/枕芯 | 类目页 | 类目页 | ✅ `/pillow/`、`/duvet/` | ✅ 有 | 有竞争 |
| 保护垫 protector | 类目页 | 类目页 | ✅ `/mattress-protector/` | ✅ 有 | 有竞争 |
| 毛巾 towels | 类目页 | 类目页 | ✅ `/towels/` | ✅ 有 | 有竞争 |
| 浴垫 bath mats | 类目页 | 类目页 | ✅ `/bath-mat/` | ✅ 有 | 有竞争 |
| 浴袍 bathrobes | 类目页 | 类目页 | ✅ `/bathrobes/` | ✅ 有 | 有竞争 |
| 拖鞋 slippers | 类目页 | 类目页 | 未见独立页 | ✅ 有 | 千惠也缺 |

---

## 三、关键词分层与定级

### 3.1 判断依据

关键词表里 108 个词，实际只对应 **10 个产品 × 4~6 个修饰词**。真正需要判断的只有两件事：

1. 这个词的搜索意图是什么（找供应商 / 查规格 / 比价格 / 走流程）
2. 竞品在这个意图上有没有专门页面

### 3.2 实测数据：搜索量 + KD + SERP 盘面

数据来源：Google Ads 关键字规划师（**美国口径**）、哥飞版 KD（0–100，越低越易）、Ahrefs DR。

#### 3.2.1 四个首页级供应商词

| 关键词 | 月搜 | 近三月实际 | KD | 首页盘面 | 判断 |
|---|---:|---|---:|---|---|
| `hotel linen supplier` | **390** | 590 / 1000 / 210 | **0** | 第 1 名 bulklinensupply.com **DR 3、域龄 3.9 年**；第 10 名 DR 1；第 8 名 DR 10；**无定制页** | ✅ 唯一撑得起独立首页的词 |
| `hotel bedding supplier` | 170（虚高） | **70 / 170 / 50** | **0** | 第 2 名同为那个 DR 3 站；第 4 名 thelinenfactory.com DR 12 专营页；第 8 名 standardtextilehome.com **靠用户行为站住**（人均 6.5 页、停留 2 分 36 秒） | ✅ 够做，但量在下滑 |
| `hotel mattress supplier` | 30 | 20 / 30 / 20 | **0** | 第 2 名 hotels4humanity.com DR 8；第 7 名 DR 12；第 8 名 Marriott DR 92 顺路占位。**没有阿里、没有中国制造网、没有敦煌网** | ✅ 够做，作床垫集群入口 |
| `hotel towel supplier` | **10** | 10 / 20 / 20 | **0** | 第 8 名 softtouchhospitality.com **DR 1 用首页排**；第 4 名 DR 8；仅 1 席专营页 | ❌ 撑不起独立页 |

> ⚠️ `hotel bedding supplier` 的 170 是被去年 10 月～1 月的 320–480 拉高的，**最近三个月只剩 50–70**，不要把 170 当作现有量。

**这张表最重要的三件事：**

1. **KD 全是 0**，不是"运气好"，是因为首页几乎没有针对这些词建的页面。
2. **第 1 名是个 DR 3、域龄 3.9 年的小站**——这是新域名的直接机会证据。
3. **standardtextilehome.com 靠行为数据（停留 2 分 36 秒）站到第 8 名**，说明在这个赛道**页面质量可以部分替代外链**。

#### 3.2.2 产品词（不带 supplier）——量在这里，但意图不在这里

| 产品词 | 月搜 | 竞争度 | SERP 意图 |
|---|---:|---|---|
| hotel bedding | **6600** | HIGH | ❌ 几乎 100% B2C：希尔顿/万豪/四季 to-home 商店、Amazon、Costco |
| hotel mattress | 1900 | HIGH | ⚠️ 混合 |
| hotel towels | 1900 | HIGH | ⚠️ 约 75% B2C，2 席 B2B（towelhub.com、hotels4humanity.com） |
| hotel slippers | 1600 | HIGH | ⚠️ 混合 |
| hotel bathrobes | 590 | HIGH | ⚠️ 混合 |
| **hotel linens** | 590 | HIGH | ✅ **偏 B2B** |
| hotel bath mats | 480 | HIGH | ⚠️ 混合 |
| hotel duvet cover | 480 | HIGH | ⚠️ 混合 |
| hotel pillowcase | 140 | HIGH | ⚠️ 混合 |
| **hotel mattress protector** | 50 | HIGH | ✅ **偏 B2B** |

#### 3.2.3 一个必须正视的分叉：量在 C 端，生意在 B 端

对 `hotel bedding set`（3600/月）和 `down alternative duvet insert`（1300/月）的 SERP 实测：

| `hotel bedding set` | | `down alternative duvet insert` | |
|---|---|---|---|
| shop.fourseasons.com | 四季官方店 | bollandbranch.com | DTC 品牌 |
| hiltontohome.com | 希尔顿官方店 | parachutehome.com | DTC 品牌 |
| fluff.co | DTC | sobelathome.com | DTC |
| macys.com | 百货 | reddit.com | 论坛 |
| amazon.com | 电商 | helixsleep.com | DTC |
| shop.marriott.com | 万豪官方店 | thespruce.com | 媒体测评 |

**这两组量零 B2B 成分。** 采购经理不会搜 "hotel bedding set"——那是消费者想买"酒店同款"。

**因此这里有一个业务分叉，必须先由千惠决定，再决定要不要做这些词：**

| 选项 | 含义 | 需要的配套 |
|---|---|---|
| A. 坚持 B2B 询单 | 放弃 6600/3600/1900 这批量，只做 390/170/30 + 规格长尾 | 接受 SEO 天花板 = 几十个询盘/月 |
| B. 加一条 B2C/DTC 线 | 去抢产品词，把量做起来 | 需要小单供应链、零售包装、退换货、B2C 物流、信用卡收款 |
| C. 混合 | 类目页打产品词拿流量，页内用"最小起订量/MOQ"筛选出 B 端 | 转化率会很低，但成本最低 |

**本报告后续按 A 推进**，B/C 需要单独评估。

#### 3.2.4 其余词的实测结果

第一梯队其余 6 个（`hotel bath mat / bathrobe / slippers / duvet cover / pillowcase / mattress protector supplier`）+ 第二梯队 6 个 + 4 个指南长尾，**搜索量全部「未收录」（<10/月）**。

例外只有：

| 词 | 月搜 | 说明 |
|---|---:|---|
| `16 CFR 1633` 相关 | **50** | 广告竞争度 0，合规刚需，B2B 客户会查 |
| `double sided hotel mattress` | 10 | 目录已确认产品支持翻面 |
| `bulk hotel bedding` | 10 | — |

#### 3.2.5 JS Hotelier 的裁定：白写

| 指标 | 实测值 |
|---|---|
| 有排名的关键词数 | **24** |
| 估算月搜索流量合计 | **2**（自然搜索，非站总流量） |
| 前 10 位词数 | **0** |
| 前 3 位词数 | **0** |
| 排名区间 | 30～75 名 |
| 命中的词类型 | 月搜 20–480 的长尾（`blood on hotel sheets`、`can you sleep in a robe`、`hotel handtücher`） |
| 4 个供应商词的首页是否出现 | **一个都没出现** |

**556 个页面换来估算月搜索流量 2。** 这条路在这个赛道已被验证失败。

### 3.3 v3 定级结果（基于实测）

| 层级 | 关键词 | 依据 | 动作 |
|---|---|---|---|
| **核心（首页）** | `hotel linen supplier`（390） | 唯一有量 + 盘面最开放（DR 3 站排第 1） | 首页 Title/H1，副标题用 "wholesale hotel linens & bedding supplier" 接 bedding 侧意图 |
| **独立页** | `hotel bedding supplier`（近期 50–70） | 够做但量在下滑 | `/hotel-bedding-supplier/` |
| **独立页** | `hotel mattress supplier`（30） | 盘面干净，无中国平台 | `/hotel-mattress-supplier/`，作床垫集群入口 |
| **并入正文** | `hotel towel supplier`（10）及第一梯队其余 6 个未收录词 | 全部 <10/月 | 并进上述三页的 H2 和正文段落，**不单独建页** |
| **类目页** | 产品词（hotel linens 590、hotel towels 1900、hotel bath mats 480、hotel bathrobes 590、hotel duvet cover 480 等） | 有量但意图混合 | 类目页承接，页内用 MOQ/认证筛选 B 端（选项 C） |
| **合规长尾** | `16 CFR 1633`（50） | 唯一有量的指南词 | 写一篇，做深 |
| **降级** | 其余指南长尾（GSM、thread count、par levels、percale vs sateen…） | 全部 <10/月 | 只做转化和信任支撑，**不当流量来源规划篇数** |
| **删除** | v2 §3.2 标"建议删除"的 14 个词 | 无独立意图 | 合并进对应页面正文 |

### 3.4 16 CFR 1633：确认是唯一值得写的指南词

**初版判断（错误）**："阻燃合规几乎空白，一篇文章就能建立信任。"

**二审**：已有竞品在做——Evergo（evergocasa.com）的 `Mattress Flammability 16 CFR 1633 for Hotel Supply`，覆盖了合规责任归属、买家应索要的 4 份文件、变更管制。

**v3 实测**：`16 CFR 1633` 相关词美国月搜 **50**，广告竞争度 **0**，是六个指南长尾里**唯一有量的一个**（其余全部 <10）。

**结论**：写，但要写得比 Evergo 细（按州别、按床型尺寸、按采购合同条款拆）。这是唯一一篇"既有量又有合规刚需"的内容。

### 3.5 品类空白 ≠ 关键词空白

这两件事表格里都写作"空白"，但含义完全不同：

| | 品类空白 | 关键词空白 |
|---|---|---|
| 含义 | 竞品**不卖这个品类**，所以站上没有相关内容 | Google 首页**没有专门针对这个词的页面** |
| 床垫的实际情况 | ✅ 成立（HotelWeave / JS Hotelier 只有 topper） | ✅ **也成立**——v3 实测首页无阿里、无中国制造网、无敦煌网 |
| 窗帘的实际情况 | ✅ 成立 | ❓ 未验证（无 SERP 数据） |

> **v2 此处判断错误，v3 已更正。** v2 曾写"床垫关键词被阿里国际站/中国制造网占据、难度明显高于布草"。实测 `hotel mattress supplier` 首页排名者为 DR 8（hotels4humanity.com）、DR 12、以及万豪 DR 92 的顺路占位，**没有任何中国 B2B 平台**，KD 为 0。这条预判作废。

**修正后的结论**：床垫是"品类空白 + 关键词也空白"的双重机会，唯一的问题是搜索量只有 30/月。**值得做，但别指望它撑起流量。**

---

### 3.6 关键词 → 目标 URL 映射表（v3 修订）

> **⚠️ v3 覆盖说明**：下表 v2 版本按"11 个 `/hotel-xxx-supplier/` 落地页"分配。实测后 7 个供应商词月搜全部 <10，**该分配作废**。按下表覆盖执行：

| v2 原分配 | v3 修正 | 依据 |
|---|---|---|
| `/hotel-linen-supplier/` | ✅ 保留，**升级为首页核心** | 390/月，DR 3 站排第 1 |
| `/hotel-bedding-supplier/` | ✅ 保留（独立页） | 近期 50–70/月 |
| `/hotel-mattress-supplier/` | ✅ 保留（独立页） | 30/月，盘面干净 |
| `/hotel-towel-supplier/` | ❌ 并入 `/hotel-linen-supplier/` 的 H2 + 正文 | 10/月 |
| `/hotel-bath-mat-supplier/` | ❌ 并入 `/hotel-linen-supplier/` 的 H2 | <10/月 |
| `/hotel-bathrobe-supplier/` | ❌ 并入 `/hotel-linen-supplier/` 的 H2 | <10/月 |
| `/hotel-slipper-supplier/` | ❌ 并入 `/hotel-mattress-supplier/` 的 H2 | <10/月 |
| `/hotel-duvet-cover-supplier/` | ❌ 并入 `/hotel-bedding-supplier/` 的 H2 | <10/月 |
| `/hotel-pillowcase-supplier/` | ❌ 并入 `/hotel-bedding-supplier/` 的 H2 | <10/月 |
| `/hotel-comforter-pillow-supplier/` | ❌ 并入 `/hotel-bedding-supplier/` 的 H2 | <10/月 |
| `/hotel-mattress-protector-supplier/` | ❌ 并入 `/hotel-mattress-supplier/` 的 H2 | 50/月（产品词口径） |
| `/hotel-bed-sheet-supplier/` | ❌ 并入 `/hotel-bedding-supplier/` 的 H2 | <10/月 |

**保留下来的页面总数：首页 + 3 个供应商页 + 6 个类目页 = 10 个。**

下面这张 108 词总表仍然有效，用途从"分配页面"改为**"每个词归属到哪个页面的哪个位置"**——`主` 只保留给上面 4 个页面，其余全部降为 `变体` 或 `子段`。

| # | 关键词 | Intent | 目标 URL | 位置 |
|--:|---|---|---|---|
| 1 | hotel bedding supplier | Commercial | `/hotel-bedding-supplier/` | 主 |
| 2 | hotel linen supplier | Commercial | `/hotel-linen-supplier/` | 主 |
| 3 | hotel bedding manufacturer | Commercial | `/hotel-bedding-supplier/` | 变体 |
| 4 | hotel textile manufacturer | Commercial | `/`（首页） | 变体 |
| 5 | hotel bedding wholesale | Commercial | `/hotel-bedding-supplier/` | 变体 |
| 6 | hotel linen wholesale | Commercial | `/hotel-linen-supplier/` | 变体 |
| 7 | hospitality bedding supplier | Commercial | `/`（首页） | 变体 |
| 8 | hotel supplies manufacturer | — | ❌ 删除（意图过宽，混入酒店耗材） | — |
| 9 | bulk hotel bedding | Commercial | `/hotel-bedding-supplier/` | 变体 |
| 10 | hotel bath linen supplier | Commercial | `/hotel-towel-supplier/` | 变体 |
| 11 | hotel mattress supplier | Commercial | `/hotel-mattress-supplier/` | 主 |
| 12 | hotel mattress manufacturer | Commercial | `/hotel-mattress-supplier/` | 变体 |
| 13 | hotel mattress wholesale | Commercial | `/hotel-mattress-supplier/` | 变体 |
| 14 | commercial hotel mattress | Commercial | `/hotel-mattress-supplier/` | 变体 |
| 15 | pocket spring hotel mattress | Commercial | `/products/mattresses/` | 子段 |
| 16 | independent spring hotel mattress | — | ❌ 合并进 #15（同义） | — |
| 17 | hotel bed mattress | — | ❌ 删除（语义歧义） | — |
| 18 | bulk hotel mattress supplier | Commercial | `/hotel-mattress-supplier/` | 变体 |
| 19 | double sided hotel mattress | Commercial | `/products/mattresses/` | 子段（**需先确认产品支持翻面**） |
| 20 | two sided hotel mattress | — | ❌ 合并进 #19 | — |
| 21 | custom hotel mattresses | Commercial | `/hotel-mattress-supplier/` | 变体 |
| 22 | hotel bed sheets wholesale | Commercial | `/hotel-bed-sheet-supplier/` | 变体 |
| 23 | cotton hotel bed sheets | Commercial | `/products/bed-linens/` | 变体 |
| 24 | hotel bed sheet supplier | Commercial | `/hotel-bed-sheet-supplier/` | 主 |
| 25 | 100% cotton hotel sheets | Commercial | `/products/bed-linens/` | 子段 |
| 26 | hotel sheets manufacturer | Commercial | `/hotel-bed-sheet-supplier/` | 变体 |
| 27 | hotel flat sheet supplier | Commercial | `/hotel-bed-sheet-supplier/` | 子段 |
| 28 | cotton hotel sheets | Commercial | `/products/bed-linens/` | 变体 |
| 29 | hotel satin stripe sheets | Commercial | `/products/bed-linens/` | 子段 |
| 30 | commercial hotel bed sheets | — | ❌ 合并进 #24 | — |
| 31 | premium cotton hotel bed linen | — | ❌ 删除（修饰词，无量） | — |
| 32 | bulk hotel sheets | Commercial | `/hotel-bed-sheet-supplier/` | 变体 |
| 33 | combed cotton hotel sheets | Commercial | `/products/bed-linens/` | 子段 |
| 34 | hotel duvet cover supplier | Commercial | `/hotel-duvet-cover-supplier/` | 主 |
| 35 | cotton hotel duvet covers | Commercial | `/hotel-duvet-cover-supplier/` | 变体 |
| 36 | hotel duvet covers wholesale | Commercial | `/hotel-duvet-cover-supplier/` | 变体 |
| 37 | hotel duvet cover manufacturer | Commercial | `/hotel-duvet-cover-supplier/` | 变体 |
| 38 | white hotel duvet covers | — | ❌ 删除（修饰词） | — |
| 39 | cotton duvet cover wholesale | Commercial | `/hotel-duvet-cover-supplier/` | 变体 |
| 40 | hotel satin duvet cover | Commercial | `/products/bed-linens/` | 子段 |
| 41 | commercial duvet covers | — | ❌ 合并进 #34 | — |
| 42 | hotel jacquard duvet covers | Commercial | `/products/bed-linens/` | 子段 |
| 43 | hotel pillowcase supplier | Commercial | `/hotel-pillowcase-supplier/` | 主 |
| 44 | cotton hotel pillowcases | Commercial | `/hotel-pillowcase-supplier/` | 变体 |
| 45 | hotel pillowcases wholesale | Commercial | `/hotel-pillowcase-supplier/` | 变体 |
| 46 | white hotel pillowcases | — | ❌ 删除（修饰词） | — |
| 47 | hotel pillowcase manufacturer | Commercial | `/hotel-pillowcase-supplier/` | 变体 |
| 48 | hotel pillow covers bulk | Commercial | `/hotel-pillowcase-supplier/` | 变体 |
| 49 | cotton hotel pillowcase wholesale | Commercial | `/hotel-pillowcase-supplier/` | 变体 |
| 50 | premium hotel pillowcases | — | ❌ 删除（修饰词） | — |
| 51 | hotel comforter supplier | Commercial | `/hotel-comforter-pillow-supplier/` | 主 |
| 52 | down alternative hotel comforter | Commercial | `/hotel-comforter-pillow-supplier/` | 子段 |
| 53 | hotel comforters wholesale | Commercial | `/hotel-comforter-pillow-supplier/` | 变体 |
| 54 | hotel summer comforter | Commercial | `/hotel-comforter-pillow-supplier/` | 子段 |
| 55 | hotel duvet supplier | Commercial | `/hotel-comforter-pillow-supplier/` | 变体（此处 duvet 指被芯） |
| 56 | lightweight hotel comforter | Commercial | `/hotel-comforter-pillow-supplier/` | 子段 |
| 57 | hotel pillow supplier | Commercial | `/hotel-comforter-pillow-supplier/` | 子段 |
| 58 | down alternative hotel pillow | Commercial | `/hotel-comforter-pillow-supplier/` | 子段 |
| 59 | hotel pillows wholesale | Commercial | `/hotel-comforter-pillow-supplier/` | 变体 |
| 60 | bulk hotel pillows | Commercial | `/hotel-comforter-pillow-supplier/` | 变体 |
| 61 | summer quilt wholesale | Commercial | `/products/bed-linens/` | 子段 |
| 62 | hotel summer quilt supplier | Commercial | `/hotel-comforter-pillow-supplier/` | 子段 |
| 63 | hotel mattress protector supplier | Commercial | `/hotel-mattress-protector-supplier/` | 主 |
| 64 | hotel mattress protector wholesale | Commercial | `/hotel-mattress-protector-supplier/` | 变体 |
| 65 | hotel mattress protectors bulk | Commercial | `/hotel-mattress-protector-supplier/` | 变体 |
| 66 | commercial mattress protector | — | ❌ 合并进 #63 | — |
| 67 | hotel mattress protector manufacturer | Commercial | `/hotel-mattress-protector-supplier/` | 变体 |
| 68 | hotel bed mattress pad | Commercial | `/hotel-mattress-protector-supplier/` | 子段（pad 与 protector 需分述） |
| 69 | mattress protector wholesale | Commercial | `/hotel-mattress-protector-supplier/` | 变体 |
| 70 | bulk hotel mattress pads | Commercial | `/hotel-mattress-protector-supplier/` | 子段 |
| 71 | hotel towel supplier | Commercial | `/hotel-towel-supplier/` | 主 |
| 72 | hotel towels wholesale | Commercial | `/hotel-towel-supplier/` | 变体 |
| 73 | hotel towels manufacturer | Commercial | `/hotel-towel-supplier/` | 变体 |
| 74 | bulk hotel bath towels | Commercial | `/products/towels/` | 子段 |
| 75 | hotel bath towels wholesale | Commercial | `/products/towels/` | 子段 |
| 76 | cotton hotel towels | Commercial | `/products/towels/` | 变体 |
| 77 | hotel face towels wholesale | Commercial | `/products/towels/` | 子段 |
| 78 | hotel face towel supplier | Commercial | `/products/towels/` | 子段 |
| 79 | hotel hand towels wholesale | Commercial | `/products/towels/` | 子段 |
| 80 | commercial hotel towels | — | ❌ 合并进 #71 | — |
| 81 | hotel bath mat supplier | Commercial | `/hotel-bath-mat-supplier/` | 主 |
| 82 | cotton hotel bath mats | Commercial | `/hotel-bath-mat-supplier/` | 变体 |
| 83 | hotel bath mats wholesale | Commercial | `/hotel-bath-mat-supplier/` | 变体 |
| 84 | bulk hotel bath mats | Commercial | `/hotel-bath-mat-supplier/` | 变体 |
| 85 | hotel bath mat manufacturer | Commercial | `/hotel-bath-mat-supplier/` | 变体 |
| 86 | commercial hotel bath mats | — | ❌ 合并进 #81 | — |
| 87 | cotton bath mat wholesale | Commercial | `/hotel-bath-mat-supplier/` | 变体 |
| 88 | white hotel bath mats | — | ❌ 删除（修饰词） | — |
| 89 | hotel bathrobe supplier | Commercial | `/hotel-bathrobe-supplier/` | 主 |
| 90 | cotton hotel bathrobes | Commercial | `/hotel-bathrobe-supplier/` | 变体 |
| 91 | hotel bathrobes wholesale | Commercial | `/hotel-bathrobe-supplier/` | 变体 |
| 92 | hotel bathrobe manufacturer | Commercial | `/hotel-bathrobe-supplier/` | 变体 |
| 93 | white hotel bathrobes bulk | Commercial | `/hotel-bathrobe-supplier/` | 变体 |
| 94 | cotton bathrobe wholesale | Commercial | `/hotel-bathrobe-supplier/` | 变体 |
| 95 | luxury hotel bathrobes | Commercial | `/products/bathrobes/` | 子段 |
| 96 | bulk hotel bathrobes | Commercial | `/hotel-bathrobe-supplier/` | 变体 |
| 97 | kimono style hotel bathrobe | Commercial | `/products/bathrobes/` | 子段（对应目录的和服领） |
| 98 | disposable hotel slippers | Commercial | `/hotel-slipper-supplier/` | 主（**注意：混有消费级搜索意图**） |
| 99 | hotel slippers wholesale | Commercial | `/hotel-slipper-supplier/` | 变体 |
| 100 | hotel slippers supplier | Commercial | `/hotel-slipper-supplier/` | 主 |
| 101 | bulk disposable hotel slippers | Commercial | `/hotel-slipper-supplier/` | 变体 |
| 102 | hotel slippers manufacturer | Commercial | `/hotel-slipper-supplier/` | 变体 |
| 103 | custom hotel slippers | Commercial | `/hotel-slipper-supplier/` | 变体 |
| 104 | hotel disposable slippers wholesale | Commercial | `/hotel-slipper-supplier/` | 变体 |
| 105 | waffle hotel slippers | Commercial | `/products/slippers/` | 子段 |
| 106 | bulk hotel guest slippers | Commercial | `/hotel-slipper-supplier/` | 变体 |
| 107 | coral fleece hotel slippers | Commercial | `/products/slippers/` | 子段 |
| 108 | fire resistant hotel mattress | Commercial / Info | `/guides/compliance/` 文章 + `/products/mattresses/` 子段 | 跨页 |

**统计**（108 词逐行核对）：

| 分类 | 数量 | v3 说明 |
|---|---:|---|
| 原分配到 `/hotel-xxx-supplier/` | 71 | **v3 缩减为 4 个页面承接**（首页 + 3 个供应商页），其余 7 个落地页取消 |
| 分配到类目页（`/products/xxx/`） | 20 | 6 个类目页承接 |
| 分配到首页 | 2 | `hotel textile manufacturer`、`hospitality bedding supplier` |
| 合并删除 | 14 | 无独立搜索意图 |
| 跨页（指南 + 产品页） | 1 | `fire resistant hotel mattress` |
| **合计** | **108** | 原文重复词已计一次 |

**关于 Intent 列的说明（v3 已部分验证）**：表中 Intent 仍标 Commercial，但 v3 已用 SERP 实测确认了两件事——`hotel bedding` 系列是 B2C 零售意图（希尔顿/万豪/四季 to-home 商店），`disposable hotel slippers` 也高度混有消费级意图。**凡是标 `主` 的词，只有 4 个页面（首页 + 3 个供应商页）保留；其余全部降为 `变体` 或 `子段`。**

---

## 四、站点结构建议（v3）

```
/  (title: Hotel Linen Supplier | Wholesale Hotel Linens & Bedding)
│        ← 首页核心词 hotel linen supplier（390/月，KD 0）
│        ← 副标题接 wholesale hotel linens & bedding supplier
│
├── /hotel-linen-supplier/          ← P1，独立页（承接 towel/bath mat/bathrobe 侧词）
├── /hotel-bedding-supplier/        ← P1，独立页（承接 bedsheet/duvet/pillowcase/comforter 侧词）
├── /hotel-mattress-supplier/       ← P1，独立页（承接 slippers/protector 侧词 + 床垫集群入口）
│
├── /products/                      ← 类目页（承接有量但意图混合的产品词）
│   ├── bed-linens/                 ← hotel linens 590、hotel duvet cover 480、hotel pillowcase 140
│   ├── towels/                     ← hotel towels 1900（页内用 MOQ/认证筛 B 端）
│   ├── bathrobes/                  ← hotel bathrobes 590
│   ├── slippers/                   ← hotel slippers 1600
│   ├── mattresses/                 ← hotel mattress 1900
│   ├── bath-mats/                  ← hotel bath mats 480
│   └── mattress-protectors/        ← hotel mattress protector 50
│
│   └── curtains/
│
├── /guides/
│   ├── specification/     ← GSM / thread count / weave / fabric
│   ├── compliance/        ← CFR 1633 / BS 7175 / EN 597 / OEKO-TEX
│   ├── procurement/       ← MOQ / sampling / inspection / Incoterms / RFP
│   └── operations/        ← par level / laundry / lifespan / storage
│
├── /hotel-types/          ← 4-star / 5-star / boutique / resort / serviced apartment
├── /projects/             ← 案例（两家竞品都做，是信任凭证）
├── /certifications/
└── /request-a-quote/
```

**结构原则**：

- 现有站导航只有 5 类（Bed Linens / Towels / Bathrobes / Mattresses / Curtains），而关键词表有 10 个产品线。**新站不要把 10 个产品线平铺成 10 个一级分类** —— 床单/被套/枕套归入 `Bed Linens`，浴垫/毛巾归入 `Bath`。一级分类控制在 4–6 个。
- 落地页与类目页之间做双向内链，落地页底部反链到对应指南。

### 4.1 供应商页 vs 类目页：必须差异化，否则自我蚕食

`/hotel-linen-supplier/` 和 `/products/towels/` 会覆盖部分重叠的产品（毛巾属于 linen），如果内容不做区分，就是 CLAUDE.md §15 明令禁止的"多个页面争夺同一个搜索意图"，结果通常是两个都排不上去。

**强制差异化规则**：

| | 供应商页 `/hotel-{x}-supplier/` | 类目页 `/products/{category}/` |
|---|---|---|
| **目标意图** | 找供应商、比工厂、要报价 | 看产品长什么样、有哪些规格 |
| **目标词类型** | `hotel linen supplier / bedding supplier / mattress supplier` + 未收录的 `xxx supplier` 变体 | 产品词：hotel towels 1900、hotel bath mats 480、hotel duvet cover 480、bath towel、hand towel、satin stripe、jacquard |
| **Title 公式** | `Hotel {X} Supplier & Wholesale Manufacturer \| {Brand}` | `Hotel {Category}: {Spec A}, {Spec B}, {Spec C}` |
| **前 40% 内容** | 采购场景：房型适配、起订量、打样周期、交期、认证、付款方式 | 产品图墙 + 规格表（尺寸/克重/成分/工艺） |
| **转化 CTA** | 主：RFQ 表单；次：WhatsApp | 主：进对应供应商页；次：RFQ |
| **意图过滤** | 不需要——来的就是 B 端 | **必须做**：页顶标注 MOQ、认证、批发条款，把 C 端散客筛走 |
| **明确不做什么** | ❌ 不铺全量 SKU 图 | ❌ 不讲采购流程、验货 |
| **篇幅** | 1200–1800 词 | 400–800 词 + 密集图片 |
| **页面数** | **3 个**（linen / bedding / mattress） | 7 个（bed-linens、towels、bathrobes、slippers、mattresses、bath-mats、mattress-protectors） |

> **v3 关键变化**：类目页承接的是**有量但意图混合**的产品词（hotel towels 1900、hotel slippers 1600）。这些页面必须显式做意图过滤——否则来的全是想买一条浴巾的消费者，不是采购经理。这是选项 C（混合路线）成立的前提。

**判定标准**：把两个页面的 H1 和首段拿出来对比，如果读者看不出"一个是给采购经理看的，一个是给产品选型看的"，就是没做差异化，必须重写。

**内链方向**（单向为主，避免竞争）：

```
类目页 ──→ 落地页      （类目页顶部常驻 "Looking for a supplier? →"）
落地页 ──→ 指南文章    （落地页底部 "Read: Hotel Towel GSM Guide"）
指南文章 ──→ 落地页    （正文中自然出现，如 "when choosing a supplier, verify…"）
```

**类目页不要反链回落地页以外的同类页面**，避免把权重分散到多个 `/hotel-xxx-supplier/`。

---

## 五、前 30 篇内容优先级（v3 重排）

> **⚠️ v3 前提变了**：实测后 6 个指南词美国月搜全部 <10，**指南内容不再是流量来源，只做转化与信任支撑**。因此下面的篇目不再按"流量优先级"排，而是按**"支撑那 10 个页面的程度"**排。
>
> **真正该先做的不是文章，是页面**：
>
> | 阶段 | 内容 | 周期 |
> |---|---|---|
> | **第 0–4 周** | 首页 + `/hotel-linen-supplier/` + `/hotel-bedding-supplier/` + `/hotel-mattress-supplier/` | 4 页 |
> | **第 5–10 周** | 7 个类目页（bed-linens / towels / bathrobes / slippers / mattresses / bath-mats / mattress-protectors） | 7 页 |
> | **第 11–16 周** | 下列 5 篇"必写"文章（给上面 11 页喂内链和信任） | 5 篇 |
> | **第 17 周后** | 其余篇目，按询盘反馈决定 | 按需 |
>
> **必写的 5 篇**（有量、有合规刚需、或直接支撑转化）：
> 1. 16 CFR 1633 Compliant Hotel Mattress（**50/月，唯一有量的指南词**）
> 2. How to Write a Hotel Linen Spec Sheet（模板，直接吸询盘）
> 3. Hotel Linen MOQ Explained（B 端必问）
> 4. Hotel Towel GSM Guide（规格信任，支撑 towels 类目页）
> 5. Hotel Linen Par Levels（运营型，酒店采购会查）

下表保留为完整候选池，**不再全部执行**：

| # | 文章 | 类型 | 理由 |
|---|---|---|---|
| 1 | Hotel Linen Par Levels: How Many Sets Per Room Do You Actually Need | 运营 | 竞品几乎未覆盖 |
| 2 | 16 CFR 1633 Compliant Hotel Mattress: What US Buyers Must Verify | 合规 | 已有 1 个对手（Evergo），需做得更细 |
| 3 | Hotel Towel GSM Guide: 400 vs 500 vs 600 GSM | 规格 | HotelWeave 已做且结构好，必须跟进 |
| 4 | Hotel Bedding Thread Count: 300TC vs 400TC for Hotels | 规格 | 同上 |
| 5 | Percale vs Sateen vs Twill: Which Weave for Your Hotel | 对比 | 竞争弱 |
| 6 | Cotton vs Polycotton Hotel Linen: Real Cost Per Wash | 对比 | 竞争弱 |
| 7 | How to Write a Hotel Linen Spec Sheet (Free Template) | 流程 | 模板类，天然吸询盘 |
| 8 | Hotel Linen MOQ Explained: From Sample to Bulk | 流程 | — |
| 9 | FOB vs CIF vs DDP for Hotel Linen | 物流 | HotelWeave 有，跟进不主攻 |
| 10 | Pre-Shipment Inspection Checklist for Hotel Linen Orders | 流程 | — |
| 11 | How Long Do Hotel Sheets Last? Laundry Cycle Math | 运营 | 仅 1 篇竞品 |
| 12 | Hotel Linen Shrinkage: Why Your 60-Wash Sheets Shrank | 运营 | — |
| 13 | Fire Retardant Mattress Regulations for UK Hotels (BS 7175) | 合规 | 英国市场切口 |
| 14 | OEKO-TEX vs ISO 9001: Which Certifications Hotels Require | 合规 | — |
| 15 | Hotel Opening FF&E Bedding Checklist | 流程 | 工程/新开酒店客户 |
| 16 | 5-Star Hotel Bedding Specs: What Hilton & Marriott Actually Use | 规格 | JS Hotelier 做过但很薄 |
| 17 | Pocket Spring vs Bonnell Spring Hotel Mattress | 对比 | 配合床垫品类 |
| 18 | Hotel Duvet Cover Sizing: Matching Inserts to Covers | 规格 | — |
| 19 | Down Alternative Comforter vs Quilt: US Buyer Guide | 对比 | 文件里 comforter/quilt 判断单独成文 |
| 20 | Waffle vs Coral Fleece vs Terry Hotel Slippers | 对比 | — |
| 21 | Kimono vs Shawl Collar Hotel Bathrobe | 对比 | — |
| 22 | Hotel Bath Mat GSM & Size Guide | 规格 | — |
| 23 | Mattress Protector Types: Fitted vs Flat vs Encased | 规格 | — |
| 24 | How to Choose Towels for Boutique Hotels | 客户分型 | — |
| 25 | Hotel Linen Storage & Rotation Best Practices | 运营 | — |
| 26 | Importing Hotel Linen from China: Customs & Duties (US/EU) | 合规 | — |
| 27 | Hotel Linen Budget Calculator for New Hotels | 工具 | — |
| 28 | Linen Requirements by Hotel Star Rating | 客户分型 | — |
| 29 | Hotel Curtain Blackout Ratings & FR Requirements | 合规 | 竞品完全空白 |
| 30 | Serviced Apartment Linen Sourcing: Small-Volume Strategy | 客户分型 | 小批量客户，竞争低 |

---

## 六、询盘转化路径

三种转化方式（表单 / 内容 / 即时沟通）在不同页面要分开设计：

```
指南页（如 thread count guide）
  → 文中嵌 "2026 Hotel Bedding Spec Sheet (PDF)" 表单换下载
  → 文末 CTA: "Need specs matched to your property? Get a quote in 24h"
  → 侧栏常驻 WhatsApp

产品/落地页
  → 规格表（GSM / TC / 尺寸 / 成分）
  → MOQ + 打样周期 + 认证图标
  → 表单 + WhatsApp 双入口

案例页
  → 项目规模、房型数、交付周期、所用规格
  → "Similar project? Talk to us"
```

所有内容页最终指向 `/request-a-quote/`，而不是把表单铺满全站。

---

## 七、验证状态与新缺口

### 7.1 v2 列的三个待验证问题 —— 全部已回答

| 原问题 | 答案 | 结论 |
|---|---|---|
| `hotel bedding supplier` 真实月搜？ | 170（近三月 50–70），`hotel linen supplier` 390 | 量小，但够做 3 个页面，不够做 11 个 |
| 首页有没有低 DR 站？ | 有。`hotel linen supplier` 第 1 名 **DR 3**，第 10 名 DR 1 | ✅ 新站有现实机会 |
| JS Hotelier 556 页有没有排名？ | 全站 24 词有排名，估算月搜索流量 **2**，前 10 位 0 个词 | ❌ 白写，不要复制 |

### 7.2 仍未解决的新缺口

| 缺口 | 影响 | 怎么补 |
|---|---|---|
| **非美国市场搜索量** | 澳/加/英/海湾的量未知。Web.Cafe API 的 `gl` 参数失效（已用对照测试证明：同一词 gl=us/mx/MX 三次返回完全相同） | 用 Google Keyword Planner 手动切换地理位置；或先按美国数据做，落地后再测 |
| **产品词的 B 端占比** | `hotel towels` 1900/月里有多少是采购经理？无转化数据无法判断 | 上线后看表单来源，或用搜索词报告（需 GSC） |
| **`hotel linens` 590/月 的 SERP 盘面** | 这个词比 `hotel linen supplier` 量大 50%，意图偏 B2B，但没查首页 | 值得补一次 SERP |
| **窗帘品类的验证** | 目录有窗帘、竞品空白，但未查任何关键词 | 单独一轮 |
| **现有站 thevoguehospitality.com 的排名** | 决定新站是否要完全从零 | 需 `domain_overview`（2 积分） |

### 7.3 下一步最划算的三次查询（约 6 积分）

```bash
# 1. hotel linens 590/月的盘面（比 supplier 版本量大 50%，意图更偏 B2B）
webcafe serp --q "hotel linens" --gl us --hl en

# 2. 澳/英/加能否用同一套关键词（需网页版手动切地区）
#    hotel linen supplier / hotel bedding supplier 在 AU / GB / CA 的量

# 3. 现有站自身状况
webcafe domain_overview thevoguehospitality.com
```

---

## 八、方法论备注

本次调研遵循的原则：

- **先定"值不值得做"（搜索量），再定"做不做得进去"（SERP），两者都过线才谈 KD。** 顺序反了会浪费额度——v1/v2 就是先做了大量结构推断，拿到数据后三条被推翻
- 竞品页面数量 ≠ 竞品有流量。JS Hotelier 556 页 vs HotelWeave 83 页，实测前者估算月搜索流量只有 2
- **KD 只作参考，最终看 SERP 的 DR 分布**。本次四个词 KD 全为 0，与 SERP 上 DR 1–12 的排名者互相印证，可信；但如果 KD 0 而首页全是高 DR 站，就要以 SERP 为准
- 搜索量必须标注口径。本报告全部为**美国口径**，非美国市场数据缺失
- 不把 R2 的"未收录（<10）"当作 0，也不把它当作存在——它只意味着**不值得为它单独建页**

---

## 九、修订记录

**v3（2026-11-17）** —— 并入 Web.Cafe 网页版实测数据，**推翻 3 条 v2 判断**：

| # | v2 判断 | v3 实测 | 处理 |
|---|---|---|---|
| 1 | 床垫词被阿里国际站/中国制造网/Bossgoo 占据 | 首页**无任何中国 B2B 平台**；排名者 DR 8 / DR 12 / 万豪 DR 92；KD 0 | ❌ 判断作废，§3.5 已改写 |
| 2 | 建 11–12 个 `/hotel-xxx-supplier/` 落地页 | 7 个供应商词月搜 <10；`hotel towel supplier` 仅 10 | ❌ 方案作废，砍到 3 个供应商页 + 7 个类目页 |
| 3 | 指南长尾是第二梯队，值得跟进 | 6 个指南词全部 <10，只有 16 CFR 1633 有 50 | ⚠️ 降级为转化支撑，不做流量规划 |

**v3 新增内容**：

- §3.2 全部重写为实测数据（搜索量 / KD / SERP / DR 四张表）
- §3.2.3 新增「量在 C 端、生意在 B 端」的业务分叉（选项 A/B/C）
- §3.2.5 新增 JS Hotelier 裁定表
- §4 站点结构从 11+6 页缩减为 3+7 页
- §5 内容优先级从"文章优先"改为"页面优先"
- §7 从"待验证方案"改为"验证状态 + 新缺口"

**v2（2026-11-17）** —— 校对后修正 4 项 P0 问题：

| # | 问题 | 处理 |
|---|---|---|
| 1 | 现有站 URL 构成描述错误（原写"大量为 tag 页"） | 改为实测数据：tag 页 19 个 / 134，并补上 `/mattresses/`、`/curtains/` 可迁移的发现 |
| 2 | 梯队排序缺置信度，把"竞品没做"直接当成"机会" | 3.2 表增加置信度列 + 前置警告，明确标注未经搜索量验证 |
| 3 | 缺关键词 → 目标 URL 映射 | 新增 3.5，108 词全量分配，含 14 个建议合并删除词 |
| 4 | 落地页与类目页双轨未定义差异化，存在自我蚕食风险 | 新增 4.1，给出目标意图、Title 公式、内容分工、内链方向的强制规则 |

**v1（2026-11-17）** —— 基于 sitemap 实测的初版报告。

---

*报告基于 sitemap 实测（竞品结构）、Google Ads 关键字规划师（美国口径搜索量）、哥飞版 KD、Ahrefs DR（v3）；非美国市场数据缺失，已标注。*
