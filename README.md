# 上海森泽智创人工智能技术有限公司官网

> 专业的智能体数字员工外包服务官方网站

## 🌟 项目简介

这是一个现代化的企业官网，专注于展示智能体数字员工外包服务。网站采用科技感设计风格，具有完全响应式布局，支持移动端和桌面端访问。

## ✨ 核心功能

### 🎯 页面模块
- ⚡ **科技感加载动画** - 2秒品牌展示
- 🧭 **智能导航栏** - 滚动显示/隐藏，移动端适配
- 🎪 **首页Banner** - 大标题展示，双CTA按钮设计
- 🏢 **公司简介** - 三列布局，企业定位展示
- 🛠️ **核心服务** - 三大服务卡片，特性详细说明
- 💡 **解决方案** - 痛点分析，多行业应用展示
- 📊 **客户案例** - 自动轮播，真实数据展示
- 📞 **CTA区块** - 多种联系方式，信任标识
- 📋 **页脚信息** - 完整公司信息，政策链接

### 🎨 设计特色
- **科技感配色**: 深蓝 + 亮青 + 白色
- **现代极简**: 矩形块布局，适度动效
- **完全响应式**: 支持所有设备尺寸
- **动效丰富**: Framer Motion 流畅动画

## 🛠️ 技术栈

### 前端框架
- **Next.js 14** - React 全栈框架
- **TypeScript** - 类型安全
- **React 18** - 最新React特性

### 样式方案
- **Tailwind CSS** - 原子化CSS框架
- **自定义CSS** - 科技感动效样式

### 动画库
- **Framer Motion** - 专业动画库
- **CSS Animation** - 自定义动画效果

### 图标库
- **Lucide React** - 现代化图标集

### 开发工具
- **ESLint** - 代码规范检查
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - 浏览器兼容性

## 🚀 快速开始

### 环境要求
- Node.js 18.0+ 
- npm 或 yarn 或 pnpm

### 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 构建生产版本
```bash
npm run build
npm start
```

## 📱 响应式支持

### 断点设计
- **手机端**: 375px - 767px
- **平板端**: 768px - 1023px  
- **桌面端**: 1024px - 1439px
- **大屏幕**: 1440px+

### 适配特性
- 移动端汉堡菜单
- 触摸优化的交互
- 图片自适应加载
- 文本大小自动调整

## 🎯 SEO优化

### 元数据配置
- ✅ 完整的页面标题和描述
- ✅ 关键词优化
- ✅ Open Graph 社交分享
- ✅ Twitter Card 支持
- ✅ 结构化数据

### 性能优化
- ✅ 图片懒加载
- ✅ 代码分割
- ✅ CSS 优化
- ✅ 字体优化

## 🚀 部署指南

### Vercel部署 (推荐)
1. 将代码推送到GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动构建和部署

### 自定义服务器部署
```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

### Docker部署
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 性能指标

### 核心Web指标
- **首次内容绘制 (FCP)**: < 1.5s
- **最大内容绘制 (LCP)**: < 2.5s  
- **首次输入延迟 (FID)**: < 100ms
- **累计布局偏移 (CLS)**: < 0.1

### 优化策略
- 图片格式优化 (WebP)
- 关键CSS内联
- 预加载关键资源
- 服务端渲染 (SSR)

## 🔧 自定义配置

### 颜色主题
在 `tailwind.config.js` 中修改颜色配置：
```js
colors: {
  primary: { /* 主色调配置 */ },
  tech: { /* 科技感配色 */ }
}
```

### 动画配置
在 `app/globals.css` 中自定义动画：
```css
.custom-animation {
  /* 自定义动画样式 */
}
```

## 📁 项目结构

```
hire-cloud-web/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── LoadingScreen.tsx  # 加载屏幕
│   ├── Navbar.tsx         # 导航栏
│   ├── Hero.tsx           # 首页Banner
│   ├── About.tsx          # 公司简介
│   ├── Services.tsx       # 核心服务
│   ├── Solutions.tsx      # 解决方案
│   ├── CaseStudies.tsx    # 客户案例
│   ├── CTA.tsx            # 行动号召
│   └── Footer.tsx         # 页脚
├── public/                # 静态资源
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── next.config.js         # Next.js 配置
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- **公司**: 上海森泽智创人工智能技术有限公司
- **电话**: 400-123-4567
- **邮箱**: contact@hireclouds.com
- **地址**: 上海市浦东新区陆家嘴金融中心

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
