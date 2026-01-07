// script.js
let currentLang = 'tr';
let cart = [];

// --- FONKSİYONLAR (GLOBAL BINDING) ---

window.updateTime = function() {
    const now = new Date();
    const timeStr = now.toLocaleDateString('tr-TR') + " " + now.toLocaleTimeString('tr-TR');
    const timeEl = document.getElementById('current-time');
    if(timeEl) timeEl.innerText = timeStr;
};

window.closeHero = function() {
    const hero = document.getElementById('hero-section');
    if(hero) {
        hero.style.opacity = '0';
        setTimeout(() => { hero.style.display = 'none'; }, 500);
    }
};

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

    // Ürünleri data.js'den çeker
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
                    <span style="opacity:0.5">${isComingSoon ? 'coming soon' : p.price + '€'}</span>
                </div>
            </div>`;
    }).join('');
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    if(e && e.target) e.target.classList.add('active');
};

window.toggleCart = function() {
    const sideCart = document.getElementById('sideCart');
    const overlay = document.getElementById('globalOverlay');
    if(!sideCart || !overlay) return;
    sideCart.classList.toggle('active');
    overlay.classList.toggle('active', sideCart.classList.contains('active'));
};

window.toggleTheme = function() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
};

window.toggleLanguage = function() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    const langEl = document.getElementById('langTxt');
    if(langEl) langEl.innerText = currentLang;
    
    document.querySelectorAll('[data-tr]').forEach(el => {
        el.textContent = currentLang === 'tr' ? el.getAttribute('data-tr') : el.getAttribute('data-en');
    });
    updateCartUI();

    const activeInfoLink = document.querySelector('.info-nav-link.active');
    if (activeInfoLink) {
        const type = activeInfoLink.id.replace('link-', '');
        window.loadInfo(type);
    }
};

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
            
            <div class="prod-price" style="font-size: 16px; margin-bottom: 10px;">${product.price}€</div>
            
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

window.selectSize = function(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
};

window.addToCart = function(name, price) {
    const size = document.querySelector('.size-btn.selected')?.innerText;
    if(!size) { 
        alert(translations[currentLang].selectSize); 
        return; 
    }
    
    const existing = cart.find(i => i.name === name && i.size === size);
    if(existing) existing.qty++;
    else cart.push({ name, price, size, qty: 1 });
    
    updateCartUI();
    closeAllPanels();
};

window.updateCartUI = function() {
    const container = document.getElementById('cartItems');
    const cartBtn = document.getElementById('cartCount');
    const totalEl = document.getElementById('cartTotal');
    const footer = document.getElementById('cartFooter');
    
    const totalQty = cart.reduce((a, b) => a + b.qty, 0);
    const prefix = currentLang === 'tr' ? cartBtn.getAttribute('data-tr-prefix') : cartBtn.getAttribute('data-en-prefix');
    cartBtn.innerText = `${prefix} (${totalQty})`;

    if(cart.length === 0) {
        container.innerHTML = `<div style="opacity:0.5; font-size:10px;">${translations[currentLang].emptyCart}</div>`;
        if(footer) footer.style.display = 'none';
        return;
    }

    if(footer) footer.style.display = 'block';
    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        total += (item.price * item.qty);
        return `<div class="cart-item">
            <div><b>${item.name}</b> (${item.size}) x ${item.qty}</div>
            <div>${item.price * item.qty}€</div>
        </div>`;
    }).join('');
    if(totalEl) totalEl.innerText = total + '€';
};

window.openInfoPool = function(type) {
    const pool = document.getElementById('infoPool');
    if(!pool) return;
    pool.style.display = 'flex';
    window.loadInfo(type);
    setTimeout(() => {
        pool.classList.add('active');
        document.getElementById('globalOverlay').classList.add('active');
    }, 10);
};

window.loadInfo = function(type) {
    document.querySelectorAll('.info-nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById('link-' + type)?.classList.add('active');
    const content = document.getElementById('infoContent');
    if(content) {
        content.style.whiteSpace = "pre-wrap";
        const text = infoTexts[type] ? infoTexts[type][currentLang] : "";
        content.innerText = text;
    }
};

window.closeAllPanels = function() {
    document.querySelectorAll('#infoPool, #productDetailPool, #checkoutPool').forEach(p => p.classList.remove('active'));
    document.getElementById('sideCart')?.classList.remove('active');
    document.getElementById('globalOverlay')?.classList.remove('active');
    setTimeout(() => {
        document.querySelectorAll('#infoPool, #productDetailPool, #checkoutPool').forEach(p => p.style.display = 'none');
    }, 300);
};

window.handleOverlayClick = function() { closeAllPanels(); };

window.addEventListener('load', () => {
    window.updateTime();
    setInterval(window.updateTime, 1000);
});
