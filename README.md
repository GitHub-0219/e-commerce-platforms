# 🛒 电商平台合集

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-✅-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

> 🏪 2 个电商网站平台（淘宝/1688 风格），包含**综合商城**与**批发平台**，全设备响应式兼容。

---

## ✨ 功能特性

| 模块 | 功能说明 |
|------|----------|
| 🏬 综合商城 | 淘宝风格 B2C 购物商城 |
| 📦 批发平台 | 1688 风格 B2B 批发采购 |
| 🔍 商品搜索 | 关键词搜索 + 分类筛选 |
| 🛒 购物车 | 加入购物车、数量管理、结算 |
| 👤 用户系统 | 注册/登录、个人中心、订单管理 |
| 📱 响应式 | 完美适配桌面端、平板、手机端 |

---

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| HTML5 | 页面结构与语义化 |
| CSS3 | 样式布局与动画效果 |
| JavaScript | 交互逻辑与业务功能 |
| Responsive Design | 全设备自适应布局 |
| Font Awesome | 图标库 |

---

## 📁 项目结构

```
e-commerce-platforms/
├── shop-mall/               # 🏬 综合商城（淘宝风格）
│   ├── index.html           #   首页
│   ├── product.html         #   商品详情页
│   ├── cart.html            #   购物车页
│   ├── user.html            #   用户中心页
│   ├── css/                 #   样式文件
│   ├── js/                  #   脚本文件
│   └── assets/              #   静态资源
├── wholesale/               # 📦 批发平台（1688 风格）
│   ├── index.html           #   首页
│   ├── product.html         #   商品详情页
│   ├── cart.html            #   采购车页
│   ├── user.html            #   用户中心页
│   ├── css/                 #   样式文件
│   ├── js/                  #   脚本文件
│   └── assets/              #   静态资源
└── README.md
```

---

## 🚀 快速开始

### 方式一：直接打开

```bash
# 克隆仓库
git clone https://github.com/GitHub-0219/e-commerce-platforms.git
cd e-commerce-platforms

# 直接用浏览器打开
open shop-mall/index.html      # 综合商城
open wholesale/index.html      # 批发平台
```

### 方式二：本地服务器

```bash
# 使用 Python 启动本地服务
cd e-commerce-platforms
python3 -m http.server 8080

# 访问 http://localhost:8080/shop-mall/
# 访问 http://localhost:8080/wholesale/
```

---

## 📸 截图

<!-- 请在此处添加项目截图 -->

| 商城首页 | 商品详情 | 批发平台 |
|----------|----------|----------|
| ![商城](screenshots/mall-home.png) | ![详情](screenshots/product.png) | ![批发](screenshots/wholesale.png) |

---

## 📄 License

本项目基于 [MIT License](LICENSE) 开源。