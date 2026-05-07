/* ============================================
   Shop-Mall 核心逻辑
   ============================================ */

// 模拟数据
const MOCK = {
  // 轮播图
  banners: [
    { id: 1, title: '618年中大促', subtitle: '全场5折起', color: '#FF4D4F', gradient: 'linear-gradient(135deg, #FF4D4F, #FF7875)' },
    { id: 2, title: '新品首发', subtitle: '限量抢购', color: '#722ED1', gradient: 'linear-gradient(135deg, #722ED1, #B37FEB)' },
    { id: 3, title: '品牌特卖', subtitle: '低至1折', color: '#1890FF', gradient: 'linear-gradient(135deg, #1890FF, #69C0FF)' },
    { id: 4, title: '会员日', subtitle: '专享88折', color: '#FA8C16', gradient: 'linear-gradient(135deg, #FA8C16, #FFC069)' },
  ],
  // 分类
  categories: [
    { id: 1, name: '女装', icon: '👗' }, { id: 2, name: '男装', icon: '👔' },
    { id: 3, name: '鞋靴', icon: '👟' }, { id: 4, name: '箱包', icon: '👜' },
    { id: 5, name: '美妆', icon: '💄' }, { id: 6, name: '数码', icon: '📱' },
    { id: 7, name: '家电', icon: '🏠' }, { id: 8, name: '食品', icon: '🍜' },
    { id: 9, name: '母婴', icon: '🍼' }, { id: 10, name: '更多', icon: '⋯' },
  ],
  // 商品
  products: [
    { id: 1001, title: '2024新款碎花连衣裙女夏季收腰显瘦气质长裙', price: 128, originalPrice: 299, sales: 3256, shop: '韩都衣舍旗舰店', rating: 4.8, image: '', category: 1, tags: ['包邮', '7天退换'] },
    { id: 1002, title: '纯棉短袖T恤男夏季薄款潮流百搭圆领打底衫', price: 49.9, originalPrice: 99, sales: 12890, shop: '优衣库官方店', rating: 4.9, image: '', category: 2, tags: ['爆款'] },
    { id: 1003, title: '运动鞋男飞织透气跑步鞋轻便减震休闲鞋', price: 189, originalPrice: 399, sales: 5678, shop: '安踏官方旗舰店', rating: 4.7, image: '', category: 3, tags: ['包邮'] },
    { id: 1004, title: '大容量双肩包女韩版潮ins风书包旅行背包', price: 79, originalPrice: 159, sales: 2345, shop: '箱包之家', rating: 4.6, image: '', category: 4, tags: ['包邮', '新品'] },
    { id: 1005, title: '口红持久不脱色保湿滋润烂番茄色唇膏', price: 69, originalPrice: 129, sales: 8901, shop: '完美日记旗舰店', rating: 4.8, image: '', category: 5, tags: ['爆款', '包邮'] },
    { id: 1006, title: '无线蓝牙耳机降噪运动入耳式超长续航', price: 99, originalPrice: 259, sales: 15678, shop: '漫步者官方店', rating: 4.7, image: '', category: 6, tags: ['包邮', '7天退换'] },
    { id: 1007, title: '空气炸锅大容量家用多功能电烤箱一体', price: 259, originalPrice: 499, sales: 4321, shop: '美的旗舰店', rating: 4.9, image: '', category: 7, tags: ['包邮', '新品'] },
    { id: 1008, title: '螺蛳粉正宗柳州特产酸辣粉方便速食', price: 29.9, originalPrice: 49.9, sales: 56789, shop: '好欢螺旗舰店', rating: 4.8, image: '', category: 8, tags: ['爆款'] },
    { id: 1009, title: '婴儿纯棉连体衣新生儿春秋哈衣爬服', price: 39, originalPrice: 89, sales: 3456, shop: '童泰母婴店', rating: 4.9, image: '', category: 9, tags: ['包邮'] },
    { id: 1010, title: '智能手表运动监测心率血氧多功能', price: 299, originalPrice: 599, sales: 7890, shop: '华为官方旗舰店', rating: 4.8, image: '', category: 6, tags: ['包邮', '7天退换'] },
    { id: 1011, title: '真丝睡衣女夏季薄款吊带性感家居服套装', price: 198, originalPrice: 398, sales: 2100, shop: '丝绸之家', rating: 4.7, image: '', category: 1, tags: ['包邮', '新品'] },
    { id: 1012, title: '机械键盘青轴红轴游戏背光办公专用', price: 159, originalPrice: 299, sales: 6543, shop: '达尔优旗舰店', rating: 4.6, image: '', category: 6, tags: ['爆款', '包邮'] },
  ],
  // 模拟评价
  reviews: [
    { user: '小***花', avatar: '🌸', rating: 5, content: '质量很好，穿着很舒服，尺码也很准，好评！', time: '2024-05-20', images: [] },
    { user: '购***狂', avatar: '🛒', rating: 5, content: '第二次购买了，物超所值，推荐给大家。', time: '2024-05-18', images: [] },
    { user: '时***尚', avatar: '✨', rating: 4, content: '整体不错，就是发货有点慢，等了3天。', time: '2024-05-15', images: [] },
    { user: '美***美', avatar: '💕', rating: 5, content: '超喜欢！和图片一模一样，客服态度也很好。', time: '2024-05-12', images: [] },
  ],
  // 用户信息
  user: {
    name: '淘宝用户',
    avatar: '👤',
    level: 'VIP3',
    orders: { unpaid: 2, unshipped: 1, undelivered: 3, unreviewd: 5 },
    addresses: [
      { id: 1, name: '张三', phone: '138****8888', address: '浙江省杭州市西湖区文三路138号', isDefault: true },
      { id: 2, name: '李四', phone: '139****9999', address: '北京市朝阳区建国路88号SOHO现代城', isDefault: false },
    ],
  },
  // 购物车
  cart: [],
};

// 生成商品图片颜色（模拟图片）
function getProductColor(id) {
  const colors = ['#FFE4E1','#E8F5E9','#E3F2FD','#FFF3E0','#F3E5F5','#E0F7FA','#FFF9C4','#FCE4EC','#E8EAF6','#F1F8E9','#FBE9E7','#E0F2F1'];
  return colors[id % colors.length];
}

// 生成商品图SVG
function productImageSVG(title, id) {
  const color = getProductColor(id);
  const emoji = ['👗','👔','👟','👜','💄','📱','🏠','🍜','🍼','⌚','🧸','⌨️'][id % 12];
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="${color}" width="400" height="400"/><text x="200" y="180" text-anchor="middle" font-size="80">${emoji}</text><text x="200" y="260" text-anchor="middle" font-size="16" fill="#666">${title.slice(0,8)}...</text></svg>`)}`;
}

// 工具函数
const Utils = {
  $(sel, ctx = document) { return ctx.querySelector(sel); },
  $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; },
  formatPrice(p) { return parseFloat(p).toFixed(2); },
  formatSales(n) { return n >= 10000 ? (n / 10000).toFixed(1) + '万' : n; },
  showToast(msg, duration = 2000) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
  },
  // 本地存储
  storage: {
    get(key) { try { return JSON.parse(localStorage.getItem('shop_mall_' + key)); } catch { return null; } },
    set(key, val) { localStorage.setItem('shop_mall_' + key, JSON.stringify(val)); },
    remove(key) { localStorage.removeItem('shop_mall_' + key); },
  },
  // URL参数
  getParam(key) { return new URLSearchParams(location.search).get(key); },
  // 跳转
  go(url) { location.href = url; },
};

// 购物车管理
const Cart = {
  getItems() { return Utils.storage.get('cart') || []; },
  addItem(product, sku = '', qty = 1) {
    const items = this.getItems();
    const exist = items.find(i => i.id === product.id && i.sku === sku);
    if (exist) { exist.qty += qty; }
    else { items.push({ ...product, sku, qty }); }
    Utils.storage.set('cart', items);
    this.updateBadge();
    Utils.showToast('已加入购物车');
  },
  removeItem(id, sku) {
    let items = this.getItems();
    items = items.filter(i => !(i.id === id && i.sku === sku));
    Utils.storage.set('cart', items);
    this.updateBadge();
  },
  updateQty(id, sku, qty) {
    const items = this.getItems();
    const item = items.find(i => i.id === id && i.sku === sku);
    if (item) { item.qty = Math.max(1, qty); }
    Utils.storage.set('cart', items);
  },
  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.qty, 0);
  },
  clear() { Utils.storage.set('cart', []); this.updateBadge(); },
  updateBadge() {
    const badge = document.querySelector('.tab-item[href*="cart"] .badge, #cart-badge');
    if (badge) {
      const count = this.getCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  },
};

// 轮播组件
function initBanner(container, banners) {
  if (!container) return;
  let current = 0;
  const total = banners.length;

  container.innerHTML = `
    <div class="banner-track" style="display:flex;transition:transform 0.4s ease;height:100%">
      ${banners.map(b => `
        <div class="banner-slide" style="min-width:100%;height:100%;background:${b.gradient};display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;padding:20px">
          <div style="font-size:28px;font-weight:700;margin-bottom:8px">${b.title}</div>
          <div style="font-size:16px;opacity:0.9">${b.subtitle}</div>
        </div>
      `).join('')}
    </div>
    <div class="banner-dots" style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;gap:6px">
      ${banners.map((_, i) => `<span class="dot" style="width:8px;height:8px;border-radius:50%;background:${i===0?'#fff':'rgba(255,255,255,0.5)'};transition:var(--transition)"></span>`).join('')}
    </div>
  `;

  const track = container.querySelector('.banner-track');
  const dots = container.querySelectorAll('.dot');

  function slideTo(idx) {
    current = idx;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.style.background = i === current ? '#fff' : 'rgba(255,255,255,0.5)');
  }

  let timer = setInterval(() => slideTo((current + 1) % total), 3500);
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => { timer = setInterval(() => slideTo((current + 1) % total), 3500); });

  // 手势滑动
  let startX = 0;
  container.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  container.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      slideTo(diff > 0 ? (current + 1) % total : (current - 1 + total) % total);
    }
  });
}

// 渲染商品卡片
function renderProductCard(product) {
  return `
    <a href="product.html?id=${product.id}" class="product-card card" style="cursor:pointer">
      <div class="product-img" style="aspect-ratio:1;background:${getProductColor(product.id)};display:flex;align-items:center;justify-content:center;font-size:60px;overflow:hidden">
        <img src="${productImageSVG(product.title, product.id)}" alt="${product.title}" style="width:100%;height:100%;object-fit:cover">
      </div>
      <div class="product-info" style="padding:10px">
        <div class="product-title" style="font-size:13px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:6px">${product.title}</div>
        <div class="product-tags" style="margin-bottom:6px">${product.tags.map(t => `<span class="tag" style="margin-right:4px">${t}</span>`).join('')}</div>
        <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:4px">
          <span class="price"><span class="symbol">¥</span>${Utils.formatPrice(product.price)}</span>
          <span class="price original">¥${Utils.formatPrice(product.originalPrice)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--text-hint)">
          <span>${product.shop}</span>
          <span>${Utils.formatSales(product.sales)}人付款</span>
        </div>
      </div>
    </a>
  `;
}

// 渲染商品网格
function renderProductGrid(container, products) {
  if (!container) return;
  container.innerHTML = products.map(p => renderProductCard(p)).join('');
}

// 初始化底部Tab
function initTabBar(activeIndex) {
  const tabs = [
    { icon: '🏠', label: '首页', href: 'index.html' },
    { icon: '🔍', label: '逛逛', href: 'search.html' },
    { icon: '💬', label: '消息', href: '#' },
    { icon: '🛒', label: '购物车', href: 'cart.html' },
    { icon: '👤', label: '我的', href: 'user.html' },
  ];
  const tabBar = document.querySelector('.tab-bar');
  if (!tabBar) return;
  tabBar.innerHTML = tabs.map((t, i) => `
    <a href="${t.href}" class="tab-item ${i === activeIndex ? 'active' : ''}">
      <span class="tab-icon">${t.icon}</span>
      <span>${t.label}</span>
      ${t.label === '购物车' ? `<span class="badge" id="cart-badge" style="display:none">0</span>` : ''}
    </a>
  `).join('');
  Cart.updateBadge();
}
