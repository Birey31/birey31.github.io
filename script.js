// REEHA - Global Değişkenler
let currentLang = 'tr';
let cart = [];

// --- FONKSİYONLAR (GLOBAL BINDING) ---

// Zamanı Güncelle
window.updateTime = function() {
    const now = new Date();
    const timeStr = now.toLocaleDateString('tr-TR') + " " + now.toLocaleTimeString('tr-TR');
    const timeEl = document.getElementById('current-time');
    if(timeEl) timeEl.innerText = timeStr;
};
// Ürünleri Listele
window.loadProducts = function(cat, e) {
    const pool = document.getElementById('productsPool');
    if(pool) pool.classList.add('expanded');
    
    const initialImg = document.getElementById('pool-initial-img');
    const artworkInfo = document.getElementById('artwork-info');
    if(initialImg) initialImg.style.display = 'none';
    if(artworkInfo) artworkInfo.style.display = 'none';
    
    const grid = document.getElementById('productGrid');
    if(!grid) return;
    grid.style.display = 'grid';

    let products = productsData[cat] || [];
    if (cat === 'news') {
        products = products.filter(p => p.name !== "yakında");
    }

    grid.innerHTML = products.map(p => {
        const isComingSoon = p.name === "yakında";
        return `
            <div class="product-card" 
                  ${!isComingSoon ? `onclick="openProductDetail('${cat}', ${p.id})"` : ''} 
                  style="${isComingSoon ? 'opacity: 0.5; cursor: default;' : ''}">
                <div class="product-box">
                    <img src="${p.img}" onerror="this.src='media/mobillogo.webp';">
                </div>
                <div class="product-info">
                    ${p.name}<br>
                    <span style="opacity:0.5">${isComingSoon ? 'coming soon' : p.price + 'TL'}</span>
                </div>
            </div>`;
    }).join('');
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    if(e && e.target) e.target.classList.add('active');
};

// Sepeti Aç/Kapat
window.toggleCart = function() {
    const sideCart = document.getElementById('sideCart');
    const overlay = document.getElementById('globalOverlay');
    if(!sideCart || !overlay) return;
    sideCart.classList.toggle('active');
    overlay.classList.toggle('active', sideCart.classList.contains('active'));
};

// Tema Değiştir (Light/Dark)
window.toggleTheme = function() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
};

// Dil Değiştir (TR/EN)
window.toggleLanguage = function() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    const langEl = document.getElementById('langTxt');
    if(langEl) langEl.innerText = currentLang;
    
    document.querySelectorAll('[data-tr]').forEach(el => {
        el.textContent = currentLang === 'tr' ? el.getAttribute('data-tr') : el.getAttribute('data-en');
    });
    updateCartUI();
};

// Ürün Detayını Aç
window.openProductDetail = function(cat, id) {
    const product = productsData[cat].find(p => p.id === id);
    const content = document.getElementById('productDetailContent');
    const pool = document.getElementById('productDetailPool');
    if(!product || !content || !pool) return;

    const btnTxt = currentLang === 'tr' ? 'sepete ekle' : 'add to cart';
    
    content.innerHTML = `
        <div class="mobile-prod-title">${product.name}</div>
        <div class="detail-img-box">
            <img src="${product.img}">
        </div>
        <div class="detail-info-box">
            <div class="desktop-prod-title" style="font-size: 18px; font-weight: bold;">${product.name}</div>
            <div class="prod-price" style="font-size: 16px; margin-bottom: 10px;">${product.price}TL</div>
            <div class="size-selector">
                <button class="size-btn" onclick="selectSize(this)">S</button>
                <button class="size-btn" onclick="selectSize(this)">M</button>
                <button class="size-btn" onclick="selectSize(this)">L</button>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price})">${btnTxt}</button>
            <div class="prod-desc-formal">
                <hr style="opacity:0.2; margin: 15px 0;">
                <div style="opacity: 0.6; font-size: 10px;">
                    INFO:<br>
                    ${product.desc}<br>
                    Free shipping worldwide.<br>
                    14 days return policy.
                </div>
            </div>
        </div>`;
    
    pool.style.display = 'flex';
    setTimeout(() => {
        pool.classList.add('active');
        document.getElementById('globalOverlay').classList.add('active');
    }, 10);
};

// Beden Seçimi
window.selectSize = function(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
};

// Sepete Ekle
window.addToCart = function(name, price) {
    const sizeBtn = document.querySelector('.size-btn.selected');
    const size = sizeBtn ? sizeBtn.innerText : null;
    
    if(!size) { 
        alert(currentLang === 'tr' ? "Lütfen beden seçiniz." : "Please select a size."); 
        return; 
    }
    
    const existing = cart.find(i => i.name === name && i.size === size);
    if(existing) existing.qty++;
    else cart.push({ name, price, size, qty: 1 });
    
    updateCartUI();
    closeAllPanels();
    toggleCart();
};

// Sepet Arayüzünü Güncelle
window.updateCartUI = function() {
    const container = document.getElementById('cartItems');
    const cartBtn = document.getElementById('cartCount');
    const totalEl = document.getElementById('cartTotal');
    const footer = document.getElementById('cartFooter');
    
    const totalQty = cart.reduce((a, b) => a + b.qty, 0);
    const prefix = currentLang === 'tr' ? cartBtn.getAttribute('data-tr-prefix') : cartBtn.getAttribute('data-en-prefix');
    cartBtn.innerText = `${prefix} (${totalQty})`;

    if(cart.length === 0) {
        container.innerHTML = `<div style="opacity:0.5; font-size:10px; padding:20px;">${currentLang === 'tr' ? "sepetiniz boş" : "cart is empty"}</div>`;
        if(footer) footer.style.display = 'none';
        return;
    }

    if(footer) footer.style.display = 'block';
    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        total += (item.price * item.qty);
        return `<div class="cart-item" style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:12px;">
            <div><b>${item.name}</b> (${item.size}) x ${item.qty}</div>
            <div>${item.price * item.qty}TL</div>
        </div>`;
    }).join('');
    if(totalEl) totalEl.innerText = total + 'TL';
};

// Panelleri Kapat
window.closeAllPanels = function() {
    document.querySelectorAll('#infoPool, #productDetailPool').forEach(p => p.classList.remove('active'));
    document.getElementById('sideCart')?.classList.remove('active');
    document.getElementById('globalOverlay')?.classList.remove('active');
    setTimeout(() => {
        document.querySelectorAll('#infoPool, #productDetailPool').forEach(p => p.style.display = 'none');
    }, 300);
};

window.handleOverlayClick = function() { closeAllPanels(); };

// Başlangıç Ayarları
window.addEventListener('load', () => {
    window.updateTime();
    setInterval(window.updateTime, 1000);
});

// --- ÖDEME SİSTEMİ (PAYTR GEÇİŞ SÜRECİ) ---

window.startCheckout = function() {
    if (cart.length === 0) {
        alert(currentLang === 'tr' ? "sepetiniz boş." : "cart is empty.");
        return;
    }

    // PayTR incelemesi ve teknik geçiş mesajı
    const message = currentLang === 'tr' 
        ? "🛒 Ödeme Sistemimiz Güncelleniyor!\n\nŞu anda yeni ve daha güvenli bir ödeme altyapısına geçiş yapıyoruz. Kısa bir süre sonra tekrar hizmetinizde olacağız.\n\nAnlayışınız için teşekkürler." 
        : "🛒 Payment System Update!\n\nWe are currently switching to a new and more secure payment infrastructure. We will be back shortly.\n\nThank you for your patience.";

    alert(message);

    const btnLabel = document.getElementById('checkoutBtnLabel');
    if(btnLabel) btnLabel.innerText = (currentLang === 'tr' ? "yakında" : "soon");
};
