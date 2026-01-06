const productsData = {
    news: [
        { id: 1, name: "basic t-shirt white", price: 40, img: "elbise/tshirt1.webp", desc: "100% heavy cotton, relaxed fit." }, 
        { id: 2, name: "heavy cotton hoodie", price: 110, img: "elbise/tshirt2.webp", desc: "Oversized silhouette, premium fabric." }
    ],
    tops: [
        { id: 1, name: "basic t-shirt white", price: 40, img: "elbise/tshirt1.webp", desc: "100% heavy cotton." },
        { id: 2, name: "heavy cotton hoodie", price: 110, img: "elbise/tshirt2.webp", desc: "Oversized silhouette." },
        { id: 3, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" }
    ],
    bottoms: [
        { id: 4, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" }
    ],
    accessories: [
        { id: 5, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" }
    ]
};

const infoTexts = {
    sales: { 
        tr: `MESAFELİ SATIŞ SÖZLEŞMESİ

İşbu Mesafeli Satış Sözleşmesi (“Sözleşme”), aşağıda bilgileri yer alan Satıcı ile, Satıcı’ya ait internet sitesi üzerinden elektronik ortamda sipariş veren Alıcı arasında akdedilmiştir.

1. TARAFLAR
1.1 Satıcı Bilgileri
Ticari Ünvan: Reeha (Adem Koymak)
Adres: Mehmet Akif Ersoy Mah. Egemen Cad. No: 34 Arnavutköy/İSTANBUL
Vergi No: 13895433242
Telefon: 0534 875 57 60
E-posta: admkymk25@gmail.com
Web Sitesi: reeha.com.tr

1.2 Alıcı Bilgileri
Alıcı; Satıcı’ya ait internet sitesi üzerinden ürün satın alan gerçek kişidir.

2. SÖZLEŞMENİN KONUSU
İşbu sözleşmenin konusu; elektronik ortamda sipariş verilen ürünlerin satışı, teslimatı, cayma hakkı ve tarafların karşılıklı hak ve yükümlülükleridir.

3. SÖZLEŞME KONUSU ÜRÜNLER
Ürünlerin türü, cinsi, adedi, bedeni ve satış bedeli sipariş onay e-postasında yer aldığı gibidir. Satıcı, stok durumuna göre değişiklik yapma hakkını saklı tutar.

4. FİYAT VE ÖDEME
Ürün fiyatlarına tüm vergiler dahildir. Ödeme; kredi kartı veya sunulan diğer güvenli ödeme yöntemleri aracılığıyla yapılır.

5. TESLİMAT VE KARGO
Ürünler, sipariş onayını takiben 1-3 iş günü içerisinde kargoya verilir. Kargo firmasından kaynaklanan gecikmelerden Satıcı sorumlu tutulamaz.

6. CAYMA HAKKI
Alıcı, ürünü teslim aldığı tarihten itibaren 14 gün içerisinde herhangi bir gerekçe göstermeksizin cayma hakkına sahiptir. Bildirim yazılı olarak yapılmalıdır.

7. CAYMA HAKKININ KULLANILAMAYACAĞI HALLER
Kişiselleştirilmiş ürünler, kullanılmış/yıkanmış ürünler ve hijyen nedeniyle iadesi uygun olmayan (etiketi sökülmüş) ürünlerde iade kabul edilmez.

8. İADE VE GERİ ÖDEME
İade edilen ürün Satıcı’ya ulaştıktan sonra kontroller yapılır ve uygun bulunursa ürün bedeli 14 gün içinde Alıcı’ya iade edilir.

9. UYUŞMAZLIKLARIN ÇÖZÜMÜ
Uyuşmazlıklarda, Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.`,
        en: `DISTANCE SALES AGREEMENT

This Distance Sales Agreement (“Agreement”) is concluded between the Seller, whose information is provided below, and the Buyer who places an order electronically through the Seller's website.

1. PARTIES
1.1 Seller Information
Title: Reeha (Adem Koymak)
Address: Mehmet Akif Ersoy Mah. Egemen Cad. No: 34 Arnavutköy/ISTANBUL
Tax No: 13895433242
Phone: +90 534 875 57 60
Email: admkymk25@gmail.com
Website: reeha.com.tr

1.2 Buyer Information
The Buyer is the natural person who purchases products through the website.

2. SUBJECT OF THE AGREEMENT
The subject of this agreement is the sale, delivery, right of withdrawal, and mutual rights and obligations of the parties regarding the products ordered electronically.

3. PRODUCTS UNDER THE AGREEMENT
The type, quantity, size, and price of the products are as stated in the order confirmation email. The Seller reserves the right to make changes based on stock availability.

4. PRICE AND PAYMENT
Product prices include all taxes. Payment is made via credit card or other secure payment methods provided.

5. DELIVERY AND SHIPPING
Products are shipped within 1-3 business days following order confirmation. The Seller cannot be held responsible for delays caused by the cargo company.

6. RIGHT OF WITHDRAWAL
The Buyer has the right to withdraw from the contract within 14 days of delivery without giving any reason. Notification must be made in writing.

7. EXCEPTIONS TO THE RIGHT OF WITHDRAWAL
Returns are not accepted for personalized products, used/washed items, or items not suitable for return due to hygiene reasons (removed tags).

8. RETURNS AND REFUNDS
After the returned product reaches the Seller, it is inspected. if found suitable, the product price is refunded to the Buyer within 14 days.

9. DISPUTE RESOLUTION
Consumer Arbitration Committees and Consumer Courts are authorized in case of disputes.` 
    },
    shipping: { 
        tr: "Teslimat ve İade: 14 gün içinde değişim ve iade hakkınız bulunmaktadır. İade kargo ücreti alıcıya aittir.", 
        en: "Shipping & Returns: You have the right to exchange or return within 14 days." 
    },
    cookie: { 
        tr: `ÇEREZ POLİTİKASI
Bu web sitesi, kullanıcı deneyimini geliştirmek ve sitenin doğru şekilde çalışmasını sağlamak amacıyla çerezler kullanır.

1. Çerez Nedir?
Çerezler, web siteleri tarafından tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.

2. Hangi Çerezleri Kullanıyoruz?
• Zorunlu Çerezler: Web sitesinin temel işlevlerinin çalışması için gereklidir.
• Fonksiyonel Çerezler: Kullanıcı tercihlerini hatırlamak için kullanılır.
• Analitik Çerezler: Performans analizi için kullanılır.

3. Çerezleri Nasıl Kontrol Edebilirsiniz?
Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz.`, 
        en: `COOKIE POLICY
This website uses cookies to improve user experience and ensure the website functions correctly.

1. What are Cookies?
Cookies are small text files saved to your device via your browser by websites.

2. Which Cookies Do We Use?
• Necessary Cookies: Essential for basic website functions.
• Functional Cookies: Used to remember user preferences.
• Analytical Cookies: Used for performance analysis.` 
    },
    privacy: { 
        tr: `KİŞİSEL VERİLERİN KORUNMASINA İLİŞKİN BİLGİLENDİRME

Reeha olarak kişisel verilerinizin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (‘Kanun') uygun olarak işlenerek, muhafaza edilmesine büyük önem veriyoruz... (KVKK METNİ BURADA DEVAM EDER)`, // Mevcut KVKK metnin burada durmalı
        en: `INFORMATION ON PROTECTION OF PERSONAL DATA...` // Mevcut İngilizce KVKK metnin burada durmalı
    },
    contact: { 
        tr: "İletişim: admkymk25@gmail.com | @reeha.studio | 0534 875 57 60", 
        en: "Contact: admkymk25@gmail.com | @reeha.studio | 0534 875 57 60" 
    }
};

const translations = {
    tr: { emptyCart: "boş.", orderNote: "sipariş notu...", addrTitle: "teslimat bilgileri", fullName: "ad soyad", email: "e-posta", city: "şehir", country: "ülke", address: "adres", proceedPay: "ödemeye geç", payTitle: "ödeme bilgileri", cardName: "kart üzerindeki isim", cardNumber: "kart numarası", expiry: "son kullanma (AA/YY)", cvv: "CVV", demoAlert: "* bu bir demo arayüzdür.", completeOrder: "siparişi tamamla", goBack: "[geri dön]", thanks: "teşekkürler!", success: "siparişiniz başarıyla alındı.", returnStore: "mağazaya dön", summary: "özet", selectSize: "lütfen beden seçin" },
    en: { emptyCart: "empty.", orderNote: "order note...", addrTitle: "shipping info", fullName: "full name", email: "email", city: "city", country: "country", address: "address", proceedPay: "proceed to payment", payTitle: "payment info", cardName: "name on card", cardNumber: "card number", expiry: "expiry (MM/YY)", cvv: "CVV", demoAlert: "* this is a demo.", completeOrder: "complete order", goBack: "[go back]", thanks: "thanks!", success: "your order has been received.", returnStore: "return to store", summary: "summary", selectSize: "please select a size" }
};

let currentLang = 'tr';
let cart = [];

// --- FONKSİYONLAR ---

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
