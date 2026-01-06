const productsData = {
    news: [
        { id: 1, name: "basic t-shirt white", price: 40, img: "elbise/tshirt1.webp", desc: "100% heavy cotton, relaxed fit." }, 
        { id: 2, name: "heavy cotton hoodie", price: 110, img: "elbise/tshirt2.webp", desc: "Oversized silhouette, premium fabric." },
        { id: 5, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" }
    ],
    tops: [
        { id: 1, name: "basic t-shirt white", price: 40, img: "elbise/tshirt1.webp", desc: "100% heavy cotton." },
        { id: 2, name: "heavy cotton hoodie", price: 110, img: "elbise/tshirt2.webp", desc: "Oversized silhouette." }
    ],
    bottoms: [],
    accessories: []
};

const infoTexts = {
    sales: { tr: "Mesafeli Satış Sözleşmesi: Siparişleriniz 1-3 iş günü içinde işlenir.", en: "Distance Sales Agreement: Your orders are processed within 1-3 business days." },
    shipping: { tr: "Teslimat ve İade: 14 gün içinde değişim ve iade hakkınız bulunmaktadır.", en: "Shipping & Returns: You have the right to exchange or return within 14 days." },
    cookie: { tr: "Çerez Politikası: Deneyiminizi iyileştirmek için çerezler kullanıyoruz.", en: "Cookie Policy: We use cookies to improve your experience." },
    privacy: { tr: "Kişisel Verilerin Korunması: Verileriniz Reeha güvencesindedir.", en: "Privacy Policy: Your data is protected by Reeha." },
    contact: { tr: "İletişim: admkymk25@gmail.com | @reeha.studio", en: "Contact: admkymk25@gmail.com | @reeha.studio" }
};

const translations = {
    tr: { emptyCart: "boş.", orderNote: "sipariş notu...", addrTitle: "teslimat bilgileri", fullName: "ad soyad", email: "e-posta", city: "şehir", country: "ülke", address: "adres", proceedPay: "ödemeye geç", payTitle: "ödeme bilgileri", cardName: "kart üzerindeki isim", cardNumber: "kart numarası", expiry: "son kullanma (AA/YY)", cvv: "CVV", demoAlert: "* bu bir demo arayüzdür.", completeOrder: "siparişi tamamla", goBack: "[geri dön]", thanks: "teşekkürler!", success: "siparişiniz başarıyla alındı.", returnStore: "mağazaya dön", summary: "özet", selectSize: "lütfen beden seçin" },
    en: { emptyCart: "empty.", orderNote: "order note...", addrTitle: "shipping info", fullName: "full name", email: "email", city: "city", country: "country", address: "address", proceedPay: "proceed to payment", payTitle: "payment info", cardName: "name on card", cardNumber: "card number", expiry: "expiry (MM/YY)", cvv: "CVV", demoAlert: "* this is a demo.", completeOrder: "complete order", goBack: "[go back]", thanks: "thanks!", success: "your order has been received.", returnStore: "return to store", summary: "summary", selectSize: "please select a size" }
};

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

    const products = productsData[cat] || [];
    grid.innerHTML = products.map(p => `
        <div class="product-card" onclick="openProductDetail('${cat}', ${p.id})">
            <div class="product-box"><img src="${p.img}" onerror="this.src='media/mobillogo.webp';"></div>
            <div class="product-info">${p.name}<br><span style="opacity:0.5">${p.price}€</span></div>
        </div>`).join('');
    
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
    document.getElementById('langTxt').innerText = currentLang;
    document.querySelectorAll('[data-tr]').forEach(el => {
        el.textContent = currentLang === 'tr' ? el.getAttribute('data-tr') : el.getAttribute('data-en');
    });
    updateCartUI();
};

window.openProductDetail = function(cat, id) {
    const product = productsData[cat].find(p => p.id === id);
    const content = document.getElementById('productDetailContent');
    const pool = document.getElementById('productDetailPool');
    if(!product || !content || !pool) return;

    const btnTxt = currentLang === 'tr' ? 'sepete ekle' : 'add to cart';
    content.innerHTML = `
        <div class="detail-img-box"><img src="${product.img}"></div>
        <div class="detail-info-box">
            <div style="font-size: 18px; font-weight: bold;">${product.name}</div>
            <div style="font-size: 12px; opacity: 0.7;">${product.desc}</div>
            <div style="font-size: 16px;">${product.price}€</div>
            <div class="size-selector">
                <button class="size-btn" onclick="selectSize(this)">S</button>
                <button class="size-btn" onclick="selectSize(this)">M</button>
                <button class="size-btn" onclick="selectSize(this)">L</button>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price})">${btnTxt}</button>
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
    if(!size) { alert(translations[currentLang].selectSize); return; }
    
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
    loadInfo(type);
    setTimeout(() => {
        pool.classList.add('active');
        document.getElementById('globalOverlay').classList.add('active');
    }, 10);
};

window.loadInfo = function(type) {
    document.querySelectorAll('.info-nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById('link-' + type)?.classList.add('active');
    const content = document.getElementById('infoContent');
    if(content) content.innerText = infoTexts[type][currentLang];
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

// --- BAŞLATMA ---
window.addEventListener('load', () => {
    window.updateTime();
    setInterval(window.updateTime, 1000);
});
