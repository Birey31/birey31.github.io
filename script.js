// 1. DATA VE TRANSLATIONS (Verilerinde ufak bir temizlik yapıldı)
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
    sales: { tr: "Mesafeli Satış Sözleşmesi...", en: "Distance Sales Agreement..." },
    shipping: { tr: "Teslimat ve İade...", en: "Shipping & Returns..." },
    cookie: { tr: "ÇEREZ POLİTİKASI...", en: "Cookie Policy..." },
    privacy: { tr: "KİŞİSEL VERİLERİN KORUNMASI...", en: "Privacy Policy..." },
    contact: { 
        tr: "İletişim: admkymk25@gmail.com | @reeha.studio | 0534 875 57 60", 
        en: "Contact: admkymk25@gmail.com | @reeha.studio" 
    }
};

const translations = {
    tr: { emptyCart: "boş.", orderNote: "sipariş notu...", addrTitle: "teslimat bilgileri", fullName: "ad soyad", email: "e-posta", city: "şehir", country: "ülke", address: "adres", proceedPay: "ödemeye geç", payTitle: "ödeme bilgileri", cardName: "kart üzerindeki isim", cardNumber: "kart numarası", expiry: "son kullanma (AA/YY)", cvv: "CVV", demoAlert: "* bu bir demo arayüzdür.", completeOrder: "siparişi tamamla", goBack: "[geri dön]", thanks: "teşekkürler!", success: "siparişiniz başarıyla alındı.", returnStore: "mağazaya dön", summary: "özet", selectSize: "lütfen beden seçin" },
    en: { emptyCart: "empty.", orderNote: "order note...", addrTitle: "shipping info", fullName: "full name", email: "email", city: "city", country: "country", address: "address", proceedPay: "proceed to payment", payTitle: "payment info", cardName: "name on card", cardNumber: "card number", expiry: "expiry (MM/YY)", cvv: "CVV", demoAlert: "* this is a demo.", completeOrder: "complete order", goBack: "[go back]", thanks: "thanks!", success: "your order has been received.", returnStore: "return to store", summary: "summary", selectSize: "please select a size" }
};

let currentLang = 'tr';
let cart = [];

// 2. TÜM FONKSİYONLARI "WINDOW" NESNESİNE BAĞLAYALIM (Hataları çözen kısım burası)
window.updateTime = function() {
    const now = new Date();
    const timeStr = now.toLocaleDateString('tr-TR') + " " + now.toLocaleTimeString('tr-TR');
    const timeEl = document.getElementById('current-time');
    if(timeEl) timeEl.innerText = timeStr;
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

    grid.innerHTML = productsData[cat]
        .filter(p => p.name !== "yakında")
        .map(p => `
            <div class="product-card" onclick="openProductDetail('${cat}', ${p.id})">
                <div class="product-box"><img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300?text=reeha';"></div>
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
    if(sideCart.classList.contains('active')) overlay.classList.add('active'); 
    else overlay.classList.remove('active');
};

window.toggleTheme = function() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
};

window.toggleLanguage = function() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    const langEl = document.getElementById('langTxt');
    if(langEl) langEl.innerText = currentLang;
    
    document.querySelectorAll('[data-tr]').forEach(el => {
        el.textContent = currentLang === 'tr' ? el.getAttribute('data-tr') : el.getAttribute('data-en');
    });
    updateCartUI();
};

// Diğer fonksiyonları da aynı şekilde window.fonksiyonAdi olarak ekleyebilirsin:
window.openProductDetail = function(cat, id) {
    const product = productsData[cat].find(p => p.id === id);
    const content = document.getElementById('productDetailContent');
    if(!product || !content) return;
    
    const btnTxt = currentLang === 'tr' ? 'sepete ekle' : 'add to cart';
    content.innerHTML = `
        <div class="detail-img-box"><img src="${product.img}" alt="${product.name}"></div>
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
    
    const pool = document.getElementById('productDetailPool');
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
    const existingItem = cart.find(i => i.name === name && i.size === size);
    if(existingItem) existingItem.qty++;
    else cart.push({ name, price, size, qty: 1 });
    
    updateCartUI();
    closeAllPanels();
};

window.updateCartUI = function() {
    const container = document.getElementById('cartItems');
    const cartBtn = document.getElementById('cartCount');
    if(!container || !cartBtn) return;

    const prefix = currentLang === 'tr' ? cartBtn.getAttribute('data-tr-prefix') : cartBtn.getAttribute('data-en-prefix');
    cartBtn.innerText = `${prefix || 'Sepet'} (${cart.reduce((a, b) => a + b.qty, 0)})`;
    
    if(cart.length === 0) {
        container.innerHTML = `<div style="opacity:0.5; font-size:10px;">${translations[currentLang].emptyCart}</div>`;
        return;
    }
    
    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>${item.name} (${item.size}) x ${item.qty}</div>
            <div>${item.price * item.qty}€</div>
        </div>
    `).join('');
};

window.closeAllPanels = function() {
    document.querySelectorAll('#infoPool, #productDetailPool, #checkoutPool').forEach(p => p.classList.remove('active'));
    document.getElementById('sideCart')?.classList.remove('active');
    document.getElementById('globalOverlay')?.classList.remove('active');
    setTimeout(() => {
        document.querySelectorAll('#infoPool, #productDetailPool, #checkoutPool').forEach(p => p.style.display = 'none');
    }, 300);
};

// 3. SAYFA YÜKLENDİĞİNDE BAŞLAT
window.addEventListener('load', () => {
    window.updateTime();
    setInterval(window.updateTime, 1000);
});
