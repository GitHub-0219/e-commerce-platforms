/* ============================================
   Wholesale 批发平台核心逻辑
   ============================================ */

const MOCK = {
  // 分类
  categories: [
    { id: 1, name: '服装', icon: '👕', count: 128900 },
    { id: 2, name: '鞋靴', icon: '👟', count: 56700 },
    { id: 3, name: '箱包', icon: '👜', count: 34500 },
    { id: 4, name: '电子', icon: '📱', count: 89000 },
    { id: 5, name: '家居', icon: '🏠', count: 67800 },
    { id: 6, name: '美妆', icon: '💄', count: 45600 },
    { id: 7, name: '食品', icon: '🍜', count: 23400 },
    { id: 8, name: '五金', icon: '🔧', count: 78900 },
    { id: 9, name: '母婴', icon: '🍼', count: 19800 },
    { id: 10, name: '更多', icon: '⋯', count: 0 },
  ],
  // 轮播
  banners: [
    { title: '工厂直供', subtitle: '源头好货·一件也是出厂价', gradient: 'linear-gradient(135deg, #FF6600, #FF8533)' },
    { title: '批发专区', subtitle: '满1000件享额外95折', gradient: 'linear-gradient(135deg, #D46B08, #FF8533)' },
    { title: '新品上架', subtitle: '每日更新10000+新款', gradient: 'linear-gradient(135deg, #722ED1, #B37FEB)' },
  ],
  // 供应商
  suppliers: [
    { id: 1, name: '义乌市星辰服饰有限公司', type: '生产厂家', location: '浙江义乌', years: 8, rating: 4.8, products: 326, response: '98%', verified: true, badges: ['实力商家', '源头工厂'] },
    { id: 2, name: '广州白云鞋业制造厂', type: '生产厂家', location: '广东广州', years: 12, rating: 4.9, products: 189, response: '99%', verified: true, badges: ['超级工厂', '金牌供应商'] },
    { id: 3, name: '深圳华强数码科技', type: '经销批发', location: '广东深圳', years: 5, rating: 4.7, products: 567, response: '95%', verified: true, badges: ['实力商家'] },
    { id: 4, name: '义乌市优品家居用品厂', type: '生产厂家', location: '浙江义乌', years: 6, rating: 4.6, products: 234, response: '96%', verified: true, badges: ['源头工厂'] },
  ],
  // 商品
  products: [
    { id: 2001, title: '纯棉圆领短袖T恤 男女同款 多色可选 工厂直供', price: 8.5, moq: 100, sales: 125600, shop: '义乌市星辰服饰有限公司', shopId: 1, category: 1, origin: '浙江义乌', specs: ['S/M/L/XL/XXL', '12色可选'], priceTiers: [{ min: 100, max: 499, price: 8.5 }, { min: 500, max: 999, price: 7.8 }, { min: 1000, max: 4999, price: 7.2 }, { min: 5000, max: Infinity, price: 6.5 }] },
    { id: 2002, title: '飞织运动鞋 透气轻便 跑步休闲鞋 支持定制', price: 25, moq: 50, sales: 89000, shop: '广州白云鞋业制造厂', shopId: 2, category: 2, origin: '广东广州', specs: ['36-45码', '8色可选'], priceTiers: [{ min: 50, max: 199, price: 25 }, { min: 200, max: 499, price: 22 }, { min: 500, max: 1999, price: 19 }, { min: 2000, max: Infinity, price: 16 }] },
    { id: 2003, title: '无线蓝牙耳机 TWS降噪 超长续航 OEM贴牌', price: 15, moq: 200, sales: 234000, shop: '深圳华强数码科技', shopId: 3, category: 4, origin: '广东深圳', specs: ['黑/白/蓝', '支持LOGO定制'], priceTiers: [{ min: 200, max: 499, price: 15 }, { min: 500, max: 1999, price: 12.5 }, { min: 2000, max: 9999, price: 10 }, { min: 10000, max: Infinity, price: 8 }] },
    { id: 2004, title: '双肩背包 大容量 商务旅行 学生书包 批发', price: 18, moq: 50, sales: 67800, shop: '义乌市星辰服饰有限公司', shopId: 1, category: 3, origin: '浙江义乌', specs: ['4色可选', '支持定制'], priceTiers: [{ min: 50, max: 199, price: 18 }, { min: 200, max: 499, price: 15 }, { min: 500, max: 1999, price: 13 }, { min: 2000, max: Infinity, price: 11 }] },
    { id: 2005, title: '不锈钢保温杯 500ml 定制logo 商务礼品杯', price: 6.5, moq: 100, sales: 189000, shop: '义乌市优品家居用品厂', shopId: 4, category: 5, origin: '浙江义乌', specs: ['6色可选', '可印LOGO'], priceTiers: [{ min: 100, max: 499, price: 6.5 }, { min: 500, max: 1999, price: 5.5 }, { min: 2000, max: 9999, price: 4.8 }, { min: 10000, max: Infinity, price: 4 }] },
    { id: 2006, title: '纯棉毛巾 酒店用品 加厚浴巾 批发价', price: 3.2, moq: 200, sales: 345000, shop: '义乌市优品家居用品厂', shopId: 4, category: 5, origin: '浙江义乌', specs: ['白色/彩色', '34x76cm'], priceTiers: [{ min: 200, max: 999, price: 3.2 }, { min: 1000, max: 4999, price: 2.8 }, { min: 5000, max: 19999, price: 2.4 }, { min: 20000, max: Infinity, price: 2 }] },
    { id: 2007, title: '防晒衣 轻薄透气 户外运动 UPF50+', price: 12, moq: 100, sales: 56700, shop: '义乌市星辰服饰有限公司', shopId: 1, category: 1, origin: '浙江义乌', specs: ['S-3XL', '6色可选'], priceTiers: [{ min: 100, max: 299, price: 12 }, { min: 300, max: 999, price: 10 }, { min: 1000, max: 4999, price: 8.5 }, { min: 5000, max: Infinity, price: 7 }] },
    { id: 2008, title: '数据线 Type-C快充 1米/2米 批量采购', price: 1.8, moq: 500, sales: 567000, shop: '深圳华强数码科技', shopId: 3, category: 4, origin: '广东深圳', specs: ['1m/2m', '黑/白'], priceTiers: [{ min: 500, max: 1999, price: 1.8 }, { min: 2000, max: 9999, price: 1.5 }, { min: 10000, max: 49999, price: 1.2 }, { min: 50000, max: Infinity, price: 0.9 }] },
  ],
  // 用户
  user: {
    name: '批发买家',
    company: 'XX贸易有限公司',
    level: '金牌买家',
    inquiries: 12,
    orders: 38,
  },
};

// 生成商品图颜色
function getProductColor(id) {
  const colors = ['#FFF1E6','#E6F7FF','#F6FFED','#FFF0F6','#F0F5FF','#E6FFFB','#FFFBE6','#FFF2E8','#F9F0FF','#E8F5E9'];
  return colors[id % colors.length];
}

function productImageSVG(title, id) {
  const color = getProductColor(id);
  const emoji = ['👕','👟','👜','📱','🏠','💄','🍜','🔧'][id % 8];
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="${color}" width="400" height="400"/><text x="200" y="180" text-anchor="middle" font-size="80">${emoji}</text><text x="200" y="260" text-anchor="middle" font-size="14" fill="#666">${title.slice(0,10)}</text></svg>`)}`;
}

const Utils = {
  $(sel, ctx = document) { return ctx.querySelector(sel); },
  $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; },
  formatPrice(p) { return parseFloat(p).toFixed(2); },
  formatSales(n) {
    if (n >= 10000) return (n / 10000).toFixed(1) + '万';
    return n.toLocaleString();
  },
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
  storage: {
    get(key) { try { return JSON.parse(localStorage.getItem('wholesale_' + key)); } catch { return null; } },
    set(key, val) { localStorage.setItem('wholesale_' + key, JSON.stringify(val)); },
    remove(key) { localStorage.removeItem('wholesale_' + key); },
  },
  getParam(key) { return new URLSearchParams(location.search).get(key); },
  go(url) { location.href = url; },
};

// 轮播
function initBanner(container, banners) {
  if (!container) return;
  let current = 0;
  container.innerHTML = `
    <div class="banner-track" style="display:flex;transition:transform 0.4s ease;height:100%">
      ${banners.map(b => `
        <div style="min-width:100%;height:100%;background:${b.gradient};display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;padding:20px">
          <div style="font-size:28px;font-weight:700;margin-bottom:8px">${b.title}</div>
          <div style="font-size:14px;opacity:0.9">${b.subtitle}</div>
        </div>
      `).join('')}
    </div>
    <div style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;gap:6px">
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
  setInterval(() => slideTo((current + 1) % banners.length), 3500);
  let startX = 0;
  container.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  container.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) slideTo(diff > 0 ? (current + 1) % banners.length : (current - 1 + banners.length) % banners.length);
  });
}

// 渲染商品卡片（批发样式）
function renderProductCard(product) {
  const minPrice = product.priceTiers[product.priceTiers.length - 1].price;
  const maxPrice = product.priceTiers[0].price;
  return `
    <a href="product.html?id=${product.id}" class="product-card card" style="cursor:pointer">
      <div style="aspect-ratio:1;background:${getProductColor(product.id)};display:flex;align-items:center;justify-content:center;overflow:hidden">
        <img src="${productImageSVG(product.title, product.id)}" style="width:100%;height:100%;object-fit:cover">
      </div>
      <div style="padding:10px">
        <div style="font-size:13px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:6px">
          <span class="factory-badge" style="font-size:10px;padding:1px 5px;margin-right:4px">工厂</span>
          ${product.title}
        </div>
        <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:4px">
          <span class="price"><span class="symbol">¥</span>${Utils.formatPrice(minPrice)}</span>
          <span style="font-size:11px;color:var(--text-hint)">-${Utils.formatPrice(maxPrice)}</span>
        </div>
        <div class="moq-badge" style="margin-bottom:4px">${product.moq}件起批</div>
        <div style="font-size:11px;color:var(--text-hint);display:flex;justify-content:space-between">
          <span>${product.origin}</span>
          <span>已售${Utils.formatSales(product.sales)}</span>
        </div>
      </div>
    </a>
  `;
}

function renderProductGrid(container, products) {
  if (!container) return;
  container.innerHTML = products.map(p => renderProductCard(p)).join('');
}

// 渲染价格表
function renderPriceTable(tiers, selectedQty) {
  return `
    <table class="price-table">
      <tr><th>数量</th><th>单价</th></tr>
      ${tiers.map((t, i) => {
        const range = t.max === Infinity ? `≥${t.min}件` : `${t.min}-${t.max}件`;
        const active = selectedQty >= t.min && (t.max === Infinity || selectedQty <= t.max);
        return `<tr class="${active ? 'active' : ''}"><td>${range}</td><td class="price-cell">¥${Utils.formatPrice(t.price)}</td></tr>`;
      }).join('')}
    </table>
  `;
}

// 渲染供应商卡片
function renderSupplierCard(supplier) {
  return `
    <a href="supplier.html?id=${supplier.id}" class="card" style="padding:14px;margin-bottom:10px;display:block">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <div style="width:44px;height:44px;border-radius:50%;background:var(--primary-bg);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">🏭</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;display:flex;align-items:center;gap:6px">
            ${supplier.name}
            ${supplier.verified ? '<span style="font-size:11px;color:var(--success)">✓ 已认证</span>' : ''}
          </div>
          <div style="font-size:12px;color:var(--text-hint);margin-top:2px">${supplier.type} · ${supplier.location} · 经营${supplier.years}年</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${supplier.badges.map(b => `<span class="tag">${b}</span>`).join('')}
      </div>
      <div style="display:flex;gap:16px;margin-top:8px;font-size:12px;color:var(--text-hint)">
        <span>商品 <b style="color:var(--primary)">${supplier.products}</b></span>
        <span>评分 <b style="color:var(--primary)">${supplier.rating}</b></span>
        <span>响应率 <b style="color:var(--primary)">${supplier.response}</b></span>
      </div>
    </a>
  `;
}
