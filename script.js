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
        tr: "Mesafeli Satış Sözleşmesi: Siparişleriniz 1-3 iş günü içinde işlenir. Tüm işlemler Türkiye Cumhuriyeti yasalarına tabidir.", 
        en: "Distance Sales Agreement: Your orders are processed within 1-3 business days." 
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
• Zorunlu Çerezler: Web sitesinin temel işlevlerinin çalışması için gereklidir. Sipariş işlemleri ve site güvenliği bu çerezler sayesinde sağlanır.
• Fonksiyonel Çerezler: Kullanıcı tercihlerini hatırlamak için kullanılır (Örn: gece / gündüz modu tercihi).
• Analitik Çerezler: Sitemizin nasıl kullanıldığını analiz etmek amacıyla Google Analytics kullanılır. Toplanan veriler anonimdir.

* Reklam veya pazarlama amaçlı çerezler kullanılmamaktadır.

3. Çerezleri Nasıl Kontrol Edebilirsiniz?
Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Ancak bu durumda bazı özellikler düzgün çalışmayabilir.

4. Hukuki Dayanak
Çerezler, 6698 sayılı KVKK ve ilgili mevzuat kapsamında işlenmektedir. Avrupa Birliği erişimlerinde GDPR hükümleri geçerlidir.`, 
        en: `COOKIE POLICY
This website uses cookies to improve user experience and ensure the website functions correctly.

1. What are Cookies?
Cookies are small text files saved to your device via your browser by websites.

2. Which Cookies Do We Use?
• Necessary Cookies: Essential for basic website functions, orders, and security.
• Functional Cookies: Used to remember user preferences (e.g., light/dark mode).
• Analytical Cookies: Used to analyze website usage via Google Analytics. Data collected is anonymous.

* We do not use cookies for advertising or marketing purposes.

3. How to Control Cookies?
You can delete or block cookies through your browser settings. However, some features may not function correctly.

4. Legal Basis
Cookies are processed under KVKK Law No. 6698 and relevant legislation. GDPR applies to access from EU countries.` 
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
        en: `INFORMATION ON PROTECTION OF PERSONAL DATA

As Reeha, we attach great importance to the processing and preservation of your personal data in accordance with the Law on the Protection of Personal Data No. 6698 ('Law').

1. Methods of Collecting Personal Data
As Reeha, in the capacity of data controller, within the framework of our legal obligations arising from the legislation; we collect your personal data verbally, in writing or electronically through our website, social media channels and similar means for purposes such as determining and implementing Reeha's commercial and business strategies.

2. Processing of Personal Data and Purposes of Processing
Your personal data obtained with your consent can be fully or partially obtained, recorded, stored, updated, or rearranged for the period required for the purpose for which they are processed.

3. Transfer and Sharing of Personal Data
Reeha will only share your personal data with our business partners (iyzico, cargo companies, etc.) and legal authorities for the purpose of carrying out company activities and ensuring the business relationship between data owners and our customers.

4. Rights of the Personal Data Owner
Pursuant to Article 11 of the Law, you have the right to learn whether your data is being processed, to request correction, or to request deletion.

CONTACT INFORMATION:
Title: Reeha (Adem Koymak)
Address: Mehmet Akif Ersoy Mah. Egemen Cad. No: 34 Arnavutköy/ISTANBUL
Tax No: 13895433242
Phone: +90 534 875 57 60
E-mail: admkymk25@gmail.com

PRIVACY AND SECURITY
Reeha Online Shop does not keep your credit card information on its own servers in any way. All payment transactions take place between the bank and your computer via the iyzico interface.` 
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
