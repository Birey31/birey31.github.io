const productsData = {
    news: [
        { id: 1, name: "basic t-shirt white", price: 40, img: "elbise/tshirt1.webp", desc: "100% heavy cotton, relaxed fit." }, 
        { id: 2, name: "heavy cotton hoodie", price: 110, img: "elbise/tshirt2.webp", desc: "Oversized silhouette, premium fabric." }
        // "news" (hepsi) kısmında 'yakında' olanlar görünmeyecek şekilde filtrelendi.
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
        tr: "Mesafeli Satış Sözleşmesi: Siparişleriniz 1-3 iş günü içinde işlenir. Tüm işlemler Türkiye Cumhuriyeti yasalarına tabidir.", 
        en: "Distance Sales Agreement: Your orders are processed within 1-3 business days." 
    },
    shipping: { 
        tr: "Teslimat ve İade: 14 gün içinde değişim ve iade hakkınız bulunmaktadır. İade kargo ücreti alıcıya aittir.", 
        en: "Shipping & Returns: You have the right to exchange or return within 14 days." 
    },
    cookie: { 
        tr: "ÇEREZ POLİTİKASI\n\nReeha olarak, web sitemizi ziyaret ettiğinizde deneyiminizi iyileştirmek için çerezler kullanıyoruz. Zorunlu çerezler, sepetinizin hatırlanması ve güvenli ödeme işlemleri için gereklidir. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz.", 
        en: "Cookie Policy: We use cookies to improve your experience. You can manage cookies through your browser settings." 
    },
    privacy: { 
        tr: `KİŞİSEL VERİLERİN KORUNMASINA İLİŞKİN BİLGİLENDİRME

Reeha olarak kişisel verilerinizin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (‘Kanun') uygun olarak işlenerek, muhafaza edilmesine büyük önem veriyoruz.

1. Kişisel verilerin toplanmasına ilişkin yöntemler
Reeha olarak, veri sorumlusu sıfatıyla, mevzuattan kaynaklanan yasal yükümlülüklerimiz çerçevesinde; markamızın hizmetlerinden faydalanabilmeniz, onayınız halinde kampanyalarımız hakkında sizleri bilgilendirmek, öneri ve şikayetlerinizi kayıt altına alabilmek, sizlere daha iyi hizmet standartları oluşturabilmek, Reeha ticari ve iş stratejilerinin belirlenmesi ve uygulanması gibi amaçlarla kişisel verilerinizi sözlü, internet sitesi, sosyal medya mecraları ve benzeri vasıtalarla sözlü, yazılı ya da elektronik yöntemlerle toplamaktayız.

2. Kişisel verilerin işlenmesi ve işleme amaçları
Reeha olarak, onayınız dahilinde elde ettiğimiz kişisel verileriniz tamamen veya kısmen elde edilebilir, kaydedilebilir, saklanabilir, depolanabilir, değiştirilebilir, güncellenebilir, periyodik olarak kontrol edilebilir, yeniden düzenlenebilir, sınıflandırılabilir, işlendikleri amaç için gerekli olan ya da ilgili kanunda öngörülen süre kadar muhafaza edilebilir.

3. Kişisel Verilerin Aktarılması ve Paylaşılması
Reeha, söz konusu kişisel verilerinizi sadece; açık rızanıza istinaden veya Kanun'da belirtilen güvenlik ve gizlilik esasları çerçevesinde yeterli önlemler alınmak kaydıyla yurt içinde, Şirket faaliyetlerinin yürütülmesi, veri sahipleri ile müşterilerimiz arasındaki iş ilişkisinin sağlanması ve hizmet kalitesinin artırılması amacıyla iş ortaklarımız (iyzico, kargo şirketleri vb.) ve yasal mercilerle paylaşabilecektir.

4. Kişisel Veri Sahibinin Hakları
Kanun'un 11. maddesi uyarınca bize başvurarak; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini isteme veya silinmesini talep etme haklarına sahipsiniz.

İLETİŞİM BİLGİLERİ:
Ünvan: Reeha (Adem Koymak)
Adres: Mehmet Akif Ersoy Mah. Egemen Cad. No: 34 Arnavutköy/İSTANBUL
Vergi No: 13895433242
Telefon: 0534 875 57 60
E-posta: admkymk25@gmail.com

GİZLİLİK VE GÜVENLİK
Reeha Online Shop, ödeme sayfasında istenen kredi kartı bilgilerinizi hiçbir şekilde kendi sunucularında tutmamaktadır. Tüm ödeme işlemleri iyzico arayüzü üzerinden banka ve bilgisayarınız arasında gerçekleşmektedir.`,
        en: "Privacy Policy: Your personal data is processed in accordance with KVKK Law No. 6698." 
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
        content.style.whiteSpace = "pre-wrap"; // Satır sonlarını (\n) ve paragrafları korur
        content.innerText = infoTexts[type][currentLang];
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
