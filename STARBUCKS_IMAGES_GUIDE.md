# 星巴克图片资源指南

## 来源
所有图片均来自星巴克德国官网：https://www.starbucks.de/en

## 图片分类

### 1. 主页横幅图片
- `starbucks_summer_2025_banner.webp` - 2025夏季主题横幅
- `starbucks_brand_reputation_banner.webp` - 品牌声誉横幅

### 2. 奖励计划图片
- `starbucks_rewards_collect_stars.webp` - 收集星星奖励
- `starbucks_rewards_free_drinks.webp` - 免费饮品奖励
- `starbucks_rewards_gold_benefits.webp` - 金会员福利

### 3. 功能特色图片
- `starbucks_welcome_in.webp` - 欢迎进入
- `starbucks_recyclable_cups.webp` - 可回收杯子
- `starbucks_mobile_order_pay.webp` - 移动订购支付
- `starbucks_customization.webp` - 个性化定制
- `starbucks_reusables_sustainability.webp` - 可重复使用与可持续发展
- `starbucks_delivery_summer.webp` - 夏季配送服务
- `starbucks_responsibility.webp` - 企业责任
- `starbucks_stories_news.webp` - 星巴克故事与新闻
- `starbucks_about_us.webp` - 关于我们

### 4. 产品图片 - 饮品
- `birthday_frappuccino_product.jpg` - 生日星冰乐产品图
- `tiramisu_cream_iced_latte_product.jpg` - 提拉米苏奶油冰拿铁产品图
- `tiramisu_cream_iced_oat_shaken_espresso_product.jpg` - 提拉米苏奶油燕麦浓缩咖啡产品图
- `melon_flavour_pearls_refresha_product.jpg` - 蜜瓜珍珠清爽饮品产品图
- `melon_flavour_pearls_coconut_refresha_product.jpg` - 蜜瓜珍珠椰子清爽饮品产品图

### 5. 产品图片 - 食品
- `birthday_mochi_donut_product.jpg` - 生日麻糬甜甜圈产品图
- `blueberry_heart_product.jpg` - 蓝莓心形产品图
- `pistachio_cinnamon_roll_product.jpg` - 开心果肉桂卷产品图
- `san_sebastian_raspberry_cheesecake_product.jpg` - 圣塞巴斯蒂安覆盆子芝士蛋糕产品图

### 6. 动画与互动内容
- `summer_launch_refresha_animation.gif` - 夏季发布清爽饮品动画
- `rubicon_app_highlights.webp` - Rubicon应用亮点
- `brand_reputation_app_highlights.gif` - 品牌声誉应用亮点动画
- `reach_for_the_skies_animation.gif` - 触及天空动画
- `youve_got_mail_animation.gif` - 您有邮件动画

## 使用建议

### 网站页面应用
1. **首页** - 使用横幅图片和奖励计划图片
2. **产品页面** - 使用产品图片展示具体商品
3. **关于我们页面** - 使用企业责任和关于我们的图片
4. **服务页面** - 使用移动订购、配送等功能图片
5. **可持续发展页面** - 使用可回收杯子和可重复使用图片

### Next.js 中的使用
所有图片已保存在 `public/` 目录中，可以直接在 Next.js 项目中使用：

```jsx
import Image from 'next/image';

// 示例：使用产品图片
<Image 
  src="/birthday_frappuccino_product.jpg" 
  alt="Birthday Frappuccino" 
  width={400} 
  height={400} 
/>

// 示例：使用横幅图片
<Image 
  src="/starbucks_summer_2025_banner.webp" 
  alt="Starbucks Summer 2025" 
  width={800} 
  height={400} 
/>
```

### 文件大小优化
- WebP 格式图片已优化，适合网页使用
- JPEG 产品图片为高分辨率，适合产品展示
- GIF 动画文件较大，建议在关键位置使用

## 版权说明
所有图片版权归星巴克公司所有，仅用于学习和开发目的。 