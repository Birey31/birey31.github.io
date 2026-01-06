const productsData = {
    news: [
        { id: 1, name: "basic t-shirt white", price: 40, img: "elbise/tshirt1.webp", desc: "100% heavy cotton, relaxed fit." }, 
        { id: 2, name: "heavy cotton hoodie", price: 110, img: "elbise/tshirt2.webp", desc: "Oversized silhouette, premium fabric." },
        { id: 5, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" }, 
        { id: 6, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 7, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 8, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 9, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 10, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 11, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" }
    ],
    tops: [
        { id: 1, name: "basic t-shirt white", price: 40, img: "elbise/tshirt1.webp", desc: "100% heavy cotton." },
        { id: 2, name: "heavy cotton hoodie", price: 110, img: "elbise/tshirt2.webp", desc: "Oversized silhouette." }
    ],
    bottoms: [
        { id: 5, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 6, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 7, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 8, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" }
    ],
    accessories: [
        { id: 9, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 10, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" },
        { id: 11, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" }
    ]
};

const infoTexts = {
    sales: { 
        tr: "Mesafeli Satış Sözleşmesi: Siparişleriniz 1-3 iş günü içinde işlenir. Tüm işlemler Türkiye Cumhuriyeti yasalarına tabidir.", 
        en: "Distance Sales Agreement: Your orders are processed within 1-3 business days. All transactions are subject to the laws of the Republic of Turkey." 
    },
    shipping: { 
        tr: "Teslimat ve İade: 14 gün içinde değişim ve iade hakkınız bulunmaktadır. İade kargo ücreti alıcıya aittir.", 
        en: "Shipping & Returns: You have the right to exchange or return within 14 days. Return shipping costs are the responsibility of the buyer." 
    },
    privacy: { 
        tr: "KVKK: Verileriniz Reeha bünyesinde güvendedir. Kişisel verileriniz 6698 sayılı kanun kapsamında korunmaktadır.", 
        en: "Privacy Policy: Your data is secure with Reeha. Your personal data is protected under law no. 6698." 
    },
    contact: { 
        tr: "İletişim: info@reeha.com | @reeha.studio | +90 000 000 00 00", 
        en: "Contact: info@reeha.com | @reeha.studio | +90 000 000 00 00" 
    }
};

const translations = {
    tr: { emptyCart: "boş.", orderNote: "sipariş notu...", addrTitle: "teslimat bilgileri", fullName: "ad soyad", email: "e-posta", city: "şehir", country: "ülke", address: "adres", proceedPay: "ödemeye geç", payTitle: "ödeme bilgileri", cardName: "kart üzerindeki isim", cardNumber: "kart numarası", expiry: "son kullanma (AA/YY)", cvv: "CVV", demoAlert: "* bu bir demo arayüzdür. gerçek işlem yapılmaz.", completeOrder: "siparişi tamamla", goBack: "[geri dön]", thanks: "teşekkürler!", success: "siparişiniz başarıyla alındı.", returnStore: "mağazaya dön", summary: "özet", selectSize: "lütfen beden seçin" },
    en: { emptyCart: "empty.", orderNote: "order note...", addrTitle: "shipping info", fullName: "full name", email: "email", city: "city", country: "country", address: "address", proceedPay: "proceed to payment", payTitle: "payment info", cardName: "name on card", cardNumber: "card number", expiry: "expiry (MM/YY)", cvv: "CVV", demoAlert: "* this is a demo interface. no real transaction.", completeOrder: "complete order", goBack: "[go back]", thanks: "thanks!", success: "your order has been received.", returnStore: "return to store", summary: "summary", selectSize: "please select a size" }
};

let currentLang = 'tr';
let cart = [];

function updateTime() {
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleDateString('tr-TR') + " " + now.toLocaleTimeString('tr-TR');
}

function closeHero() {
    const hero = document.getElementById('hero-section');
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.display = 'none';
    }, 500);
}

function expandPool() {
    const pool = document.getElementById('productsPool');
    if(pool) pool.classList.add('expanded');
}

function loadProducts(cat, e) {
    expandPool();
    const initialImg = document.getElementById('pool-initial-img');
    const artworkInfo = document.getElementById('artwork-info');
    if(initialImg) initialImg.style.display = 'none';
    if(artworkInfo) artworkInfo.style.display = 'none';
    
    const grid = document.getElementById('productGrid');
    grid.style.display = 'grid';

    grid.innerHTML = (cat === 'news' ? productsData[cat].filter(p => p.name !== "yakında") : productsData[cat]).map(p => `
        <div class="product-card" onclick="openProductDetail('${cat}', ${p.id})">
            <div class="product-box"><img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300?text=reeha';"></div>
            <div class="product-info">${p.name}<br><span style="opacity:0.5">${p.price}€</span></div>
        </div>`).join('');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    if(e) e.target.classList.add('active');
}

function openProductDetail(cat, id) {
    const product = productsData[cat].find(p => p.id === id);
    const content = document.getElementById('productDetailContent');
    const btnTxt = currentLang === 'tr' ? 'sepete ekle' : 'add to cart';
    const sizeTxt = currentLang === 'tr' ? 'beden' : 'size';
    content.innerHTML = `
        <div class="detail-img-box"><img src="${product.img}" alt="${product.name}"></div>
        <div class="detail-info-box">
            <div style="font-size: 18px; font-weight: bold;">${product.name}</div>
            <div style="font-size: 12px; opacity: 0.7; line-height:1.5;">${product.desc}</div>
            <div style="font-size: 16px;">${product.price}€</div>
            <div>
                <div style="font-size: 10px; margin-bottom: 5px;">${sizeTxt}:</div>
                <div class="size-selector">
                    <button class="size-btn" onclick="selectSize(this)">S</button>
                    <button class="size-btn" onclick="selectSize(this)">M</button>
                    <button class="size-btn" onclick="selectSize(this)">L</button>
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price})">${btnTxt}</button>
        </div>
    `;
    const pool = document.getElementById('productDetailPool');
    pool.style.display = 'flex';
    setTimeout(() => {
        pool.classList.add('active');
        document.getElementById('globalOverlay').classList.add('active');
    }, 10);
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function addToCart(name, price) {
    const size = document.querySelector('.size-btn.selected')?.innerText;
    if(!size) {
        alert(translations[currentLang].selectSize);
        return;
    }
    const existingItem = cart.find(i => i.name === name && i.size === size);
    if(existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ name, price, size, qty: 1 });
    }
    updateCartUI();
    closeAllPanels();
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');
    const t = translations[currentLang];
    const cartBtn = document.getElementById('cartCount');
    const prefix = currentLang === 'tr' ? cartBtn.getAttribute('data-tr-prefix') : cartBtn.getAttribute('data-en-prefix');
    cartBtn.innerText = `${prefix} (${cart.reduce((a, b) => a + b.qty, 0)})`;
    document.getElementById('cartNotePlaceholder').placeholder = t.orderNote;

    if(cart.length === 0) {
        container.innerHTML = `<div style="opacity:0.5; font-size:10px;">${t.emptyCart}</div>`;
        footer.style.display = 'none';
        return;
    }
    footer.style.display = 'block';
    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        total += (item.price * item.qty);
        return `
            <div class="cart-item">
                <div>
                    <div style="font-weight:bold">${item.name}</div>
                    <div style="opacity:0.6">${item.size} | ${item.price}€</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </div>
                <div style="font-weight:bold">${item.price * item.qty}€</div>
            </div>
        `;
    }).join('');
    totalEl.innerText = total + '€';
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if(cart[index].qty <= 0) cart.splice(index, 1);
    updateCartUI();
}

function openInfoPool(type) {
    const pool = document.getElementById('infoPool');
    pool.style.display = 'flex';
    loadInfo(type);
    setTimeout(() => {
        pool.classList.add('active');
        document.getElementById('globalOverlay').classList.add('active');
    }, 10);
}

function loadInfo(type) {
    document.querySelectorAll('.info-nav-link').forEach(link => link.classList.remove('active'));
    const linkEl = document.getElementById('link-' + type);
    if(linkEl) linkEl.classList.add('active');
    document.getElementById('infoContent').innerText = infoTexts[type][currentLang];
}

function startCheckout() {
    document.getElementById('sideCart').classList.remove('active');
    const pool = document.getElementById('checkoutPool');
    pool.style.display = 'flex';
    document.getElementById('summaryTitle').innerText = translations[currentLang].summary;
    const summary = document.getElementById('checkoutSummaryItems');
    summary.innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; margin-bottom:5px; opacity:0.8;">
            <span>${i.qty}x ${i.name}</span>
            <span>${i.price * i.qty}€</span>
        </div>
    `).join('');
    document.getElementById('checkoutTotal').innerText = document.getElementById('cartTotal').innerText;
    showAddressStep();
    setTimeout(() => {
        pool.classList.add('active');
        document.getElementById('globalOverlay').classList.add('active');
    }, 10);
}

function showAddressStep() {
    const content = document.getElementById('checkoutFormContent');
    const t = translations[currentLang];
    content.innerHTML = `
        <div class="checkout-step-title">${t.addrTitle}</div>
        <div class="form-group"><label>${t.fullName}</label><input type="text" class="form-input"></div>
        <div class="form-group"><label>${t.email}</label><input type="email" class="form-input"></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div class="form-group"><label>${t.city}</label><input type="text" class="form-input"></div>
            <div class="form-group"><label>${t.country}</label><input type="text" class="form-input"></div>
        </div>
        <div class="form-group"><label>${t.address}</label><textarea class="form-input" style="height:80px; resize:none;"></textarea></div>
        <button class="checkout-btn" style="margin-top:20px;" onclick="showPaymentStep()">${t.proceedPay}</button>
    `;
}

function showPaymentStep() {
    const content = document.getElementById('checkoutFormContent');
    const t = translations[currentLang];
    content.innerHTML = `
        <div class="checkout-step-title">${t.payTitle}</div>
        <div class="form-group"><label>${t.cardName}</label><input type="text" class="form-input"></div>
        <div class="form-group"><label>${t.cardNumber}</label><input type="text" placeholder="**** **** **** ****" class="form-input"></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div class="form-group"><label>${t.expiry}</label><input type="text" class="form-input"></div>
            <div class="form-group"><label>${t.cvv}</label><input type="text" class="form-input"></div>
        </div>
        <div style="font-size:10px; opacity:0.5; margin-bottom:20px;">${t.demoAlert}</div>
        <button class="checkout-btn" onclick="completeOrder()">${t.completeOrder}</button>
        <div onclick="showAddressStep()" style="text-align:center; font-size:10px; margin-top:15px; cursor:pointer; opacity:0.5;">${t.goBack}</div>
    `;
}

function completeOrder() {
    const content = document.getElementById('checkoutFormContent');
    const t = translations[currentLang];
    content.innerHTML = `
        <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
            <div style="font-size:40px; margin-bottom:20px;">✓</div>
            <div style="font-size:18px; margin-bottom:10px;">${t.thanks}</div>
            <div style="font-size:11px; opacity:0.7;">${t.success}</div>
            <button class="checkout-btn" style="width:200px; margin-top:30px;" onclick="location.reload()">${t.returnStore}</button>
        </div>
    `;
    cart = [];
    updateCartUI();
}

function closeAllPanels() {
    document.querySelectorAll('#infoPool, #productDetailPool, #checkoutPool').forEach(p => p.classList.remove('active'));
    document.getElementById('sideCart').classList.remove('active');
    document.getElementById('globalOverlay').classList.remove('active');
    setTimeout(() => {
        document.querySelectorAll('#infoPool, #productDetailPool, #checkoutPool').forEach(p => p.style.display = 'none');
    }, 300);
}

function handleOverlayClick() { closeAllPanels(); }

function toggleCart() {
    const sideCart = document.getElementById('sideCart');
    const overlay = document.getElementById('globalOverlay');
    sideCart.classList.toggle('active');
    if(sideCart.classList.contains('active')) overlay.classList.add('active'); else overlay.classList.remove('active');
}

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    document.getElementById('langTxt').innerText = currentLang;
    document.querySelectorAll('[data-tr]').forEach(el => {
        el.textContent = currentLang === 'tr' ? el.getAttribute('data-tr') : el.getAttribute('data-en');
    });
    updateCartUI();
    if(document.getElementById('checkoutPool').classList.contains('active')) { startCheckout(); }
    const activeInfoLink = document.querySelector('.info-nav-link.active');
    if(activeInfoLink) { loadInfo(activeInfoLink.id.split('-')[1]); }
}

window.onload = () => { 
    updateTime(); 
    setInterval(updateTime, 1000); 
};
