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

İşbu Mesafeli Satış Sözleşmesi (“Sözleşme”), aşağıda bilgileri yer alan Satıcı ile, Satıcı’ya ait internet sitesi üzerinden elektronik ortamda sipariş veren Alıcı arasında; 6502 sayılı Tüketicinin Korunması Hakkında Kanun, Mesafeli Sözleşmeler Yönetmeliği ve ilgili sair mevzuat hükümleri uyarınca akdedilmiştir.

Alıcı, işbu sözleşmeyi onaylamakla, sözleşme konusu ürünlerin satışı, teslimi, iadesi ve cayma hakkına ilişkin tüm koşulları önceden okuyup bilgi sahibi olduğunu ve kabul ettiğini beyan eder.

1. TARAFLAR
1.1 Satıcı Bilgileri
Ticari Ünvan: Reeha (Adem Koymak)
Adres: Mehmet Akif Ersoy Mah. Egemen Cad. No: 34 Arnavutköy/İSTANBUL
Telefon: 0534 875 57 60
E-posta: admkymk25@gmail.com
Web Sitesi: reeha.com.tr

1.2 Alıcı Bilgileri
Alıcı; Satıcı’ya ait internet sitesi üzerinden ürün veya hizmet satın alan, sipariş formunda bilgilerini dolduran gerçek kişidir.

2. SÖZLEŞMENİN KONUSU
İşbu sözleşmenin konusu; Alıcı’nın, Satıcı’ya ait internet sitesi üzerinden elektronik ortamda sipariş verdiği ürünlerin satışı, bedeli, ödeme şekli, teslimatı, cayma hakkı, iade koşulları ve tarafların karşılıklı hak ve yükümlülüklerinin belirlenmesidir.

3. SÖZLEŞME KONUSU ÜRÜNLER
3.1 Ürünlerin türü, cinsi, adedi, modeli, rengi, bedeni, satış bedeli, ödeme şekli ve teslimat bilgileri; siparişin oluşturulması aşamasında Alıcı tarafından onaylanan bilgiler ile sipariş onay e-postasında yer aldığı gibidir.
3.2 Satıcı, stok durumuna bağlı olarak ürün temininde değişiklik yapma hakkını saklı tutar. Bu durumda Alıcı bilgilendirilir ve bedel iadesi yapılır.

4. FİYAT, VERGİLER VE ÖDEME
4.1 Ürün fiyatları, Satıcı tarafından internet sitesinde ilan edilen fiyatlardır ve aksi belirtilmedikçe tüm vergiler dahildir.
4.2 Ödeme; kredi kartı, banka kartı veya Satıcı tarafından sunulan diğer ödeme yöntemleri aracılığıyla yapılır.
4.3 Ödeme işlemi tamamlanmadan sipariş geçerli sayılmaz ve işleme alınmaz.

5. TESLİMAT VE KARGO
5.1 Ürünler, sipariş onayını takiben 1-3 iş günü içerisinde kargoya verilir.
5.2 Teslimat, Alıcı’nın sipariş sırasında bildirdiği adrese yapılır.
5.3 Kargo firmasından kaynaklanan gecikmeler, mücbir sebepler ve Alıcı’dan kaynaklı teslimat problemlerinden Satıcı sorumlu tutulamaz.
5.4 Ürün teslimi sırasında Alıcı’nın ürünü kontrol etmesi ve hasarlı ürünleri teslim almaması gerekmektedir.

6. CAYMA HAKKI
6.1 Alıcı, ürünü teslim aldığı tarihten itibaren 14 (on dört) gün içerisinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin cayma hakkına sahiptir.
6.2 Cayma hakkının kullanılabilmesi için bu süre içerisinde Satıcı’ya yazılı bildirim yapılması zorunludur.

7. CAYMA HAKKININ KULLANILAMAYACAĞI HALLER
Aşağıdaki ürünlerde cayma hakkı kullanılamaz:
• Alıcı’nın isteği doğrultusunda özel olarak üretilen, baskısı yapılan veya kişiselleştirilen ürünler.
• Kullanılmış, yıkanmış, etiketi çıkarılmış veya tekrar satılabilir özelliğini kaybetmiş ürünler.
• Hijyen nedeniyle iadesi uygun olmayan ürünler.

8. İADE VE GERİ ÖDEME
8.1 Cayma hakkının usulüne uygun kullanılması halinde ürün, orijinal ambalajı ile birlikte eksiksiz olarak iade edilmelidir.
8.2 İade kargo bedeli Alıcı tarafından karşılanır.
8.3 İade edilen ürün Satıcı’ya ulaştıktan sonra gerekli kontroller yapılır ve iade uygun bulunursa ürün bedeli 14 gün içinde Alıcı’ya iade edilir.

9. KİŞİSEL VERİLERİN KORUNMASI
Alıcı’ya ait kişisel veriler; siparişin alınması, ödeme işlemleri, teslimat ve satış sonrası hizmetlerin yürütülmesi amacıyla işlenmektedir. Kişisel veriler, Satıcı’nın Gizlilik Politikası ve KVKK Aydınlatma Metni kapsamında korunur.

10. MÜCBİR SEBEPLER
Doğal afetler, savaş, yangın, grev, salgın hastalıklar ve Satıcı’nın kontrolü dışında gelişen olaylar mücbir sebep sayılır. Bu durumlarda Satıcı sorumlu tutulamaz.

11. UYUŞMAZLIKLARIN ÇÖZÜMÜ
İşbu sözleşmeden doğabilecek uyuşmazlıklarda, Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.

12. YÜRÜRLÜK
Alıcı, site üzerinden sipariş vererek işbu sözleşmenin tüm maddelerini okuduğunu ve kabul ettiğini beyan eder. İşbu sözleşme, elektronik ortamda onaylandığı tarihte yürürlüğe girer.`,

        en: `DISTANCE SALES AGREEMENT

This Distance Sales Agreement (“Agreement”) is concluded between the Seller, whose information is provided below, and the Buyer who places an order electronically through the Seller's website, in accordance with the Law No. 6502 on the Protection of Consumers and the Regulation on Distance Contracts.

By approving this agreement, the Buyer declares that they have read and informed themselves about all conditions regarding the sale, delivery, return, and right of withdrawal of the products.

1. PARTIES
1.1 Seller Information
Title: Reeha (Adem Koymak)
Address: Mehmet Akif Ersoy Mah. Egemen Cad. No: 34 Arnavutköy/ISTANBUL
Phone: +90 534 875 57 60
Email: admkymk25@gmail.com
Website: reeha.com.tr

1.2 Buyer Information
The Buyer is the natural person who purchases products or services through the Seller's website and fills in their information in the order form.

2. SUBJECT OF THE AGREEMENT
The subject of this agreement is the determination of the rights and obligations of the parties regarding the sale, price, payment method, delivery, right of withdrawal, and return conditions of the products ordered by the Buyer electronically.

3. PRODUCTS UNDER THE AGREEMENT
3.1 The type, quantity, model, color, size, sale price, and delivery information of the products are as stated in the information approved by the Buyer during the order stage and in the order confirmation email.
3.2 The Seller reserves the right to make changes in product supply depending on stock status. In this case, the Buyer is informed and a refund is made.

4. PRICE, TAXES, AND PAYMENT
4.1 Product prices are the prices announced by the Seller on the website and include all taxes unless otherwise stated.
4.2 Payment is made via credit card, debit card, or other payment methods offered by the Seller.
4.3 The order is not considered valid and processed until the payment transaction is completed.

5. DELIVERY AND SHIPPING
5.1 Products are shipped within 1-3 business days following the order confirmation.
5.2 Delivery is made to the address provided by the Buyer during the order.
5.3 The Seller cannot be held responsible for delays caused by the cargo company, force majeure, or delivery problems caused by the Buyer.
5.4 The Buyer must check the product during delivery and not receive damaged products.

6. RIGHT OF WITHDRAWAL
6.1 The Buyer has the right to withdraw from the contract within 14 (fourteen) days from the date of receipt of the product without giving any reason and without paying any penalty.
6.2 Written notification must be made to the Seller within this period to exercise the right of withdrawal.

7. EXCEPTIONS TO THE RIGHT OF WITHDRAWAL
The right of withdrawal cannot be used for the following products:
• Products specially produced, printed, or personalized in line with the Buyer's request.
• Used, washed, untagged products, or products that have lost their resaleable feature.
• Products not suitable for return due to hygiene reasons.

8. RETURNS AND REFUNDS
8.1 If the right of withdrawal is used properly, the product must be returned in its original packaging.
8.2 The return shipping cost shall be covered by the Buyer.
8.3 After the returned product reaches the Seller, necessary checks are made, and if the return is approved, the product price is refunded to the Buyer within 14 days.

9. PROTECTION OF PERSONAL DATA
Personal data belonging to the Buyer is processed for the purposes of receiving orders, payment transactions, delivery, and after-sales services. Data is protected under the Seller's Privacy Policy and KVKK text.

10. FORCE MAJEURE
Natural disasters, war, fire, strikes, epidemics, and events beyond the Seller's control are considered force majeure. The Seller cannot be held responsible in these cases.

11. DISPUTE RESOLUTION
Consumer Arbitration Committees and Consumer Courts are authorized in case of disputes arising from this agreement.

12. ENFORCEMENT
By placing an order, the Buyer declares that they have read and accepted all articles of this agreement. This agreement enters into force on the date it is electronically approved.` 
    },
    // Diğer info metinleri (shipping, cookie, privacy, contact) aşağıda aynı şekilde devam etmelidir...
};
    shipping: { 
        shipping: { 
        tr: `TESLİMAT VE İADE POLİTİKASI

İşbu Teslimat ve İade Politikası, Reeha (Adem Koymak) tarafından işletilen reeha.com.tr internet sitesi üzerinden gerçekleştirilen satışlara ilişkin teslimat, iade ve değişim süreçlerini düzenlemek amacıyla hazırlanmıştır.

1. TESLİMAT KOŞULLARI
1.1 Teslimat Süresi: Siparişler, ödeme onayının alınmasını takiben 1-3 iş günü içerisinde hazırlanarak kargoya teslim edilir. Teslimat süresi; stok durumu, sipariş yoğunluğu ve mücbir sebepler nedeniyle değişiklik gösterebilir.
1.2 Teslimat Adresi: Teslimat, Alıcı’nın sipariş sırasında beyan ettiği adrese yapılır. Adres bilgilerinin hatalı girilmesinden kaynaklanan gecikmelerden Satıcı sorumlu tutulamaz.
1.3 Kargo Firması: Teslimatlar, Satıcı’nın anlaşmalı olduğu kargo firması aracılığıyla yapılır. Kargo firmasından kaynaklanan gecikmeler Satıcı’nın sorumluluğunda değildir.
1.4 Teslimat Anında Kontrol: Alıcı, ürünü teslim alırken paketi kontrol etmekle yükümlüdür. Hasarlı paketlerin teslim alınmaması ve kargo görevlisine tutanak tutturulması gerekmektedir.

2. İADE VE CAYMA HAKKI
2.1 Cayma Hakkı Süresi: Alıcı, ürünü teslim aldığı tarihten itibaren 14 (on dört) gün içerisinde herhangi bir gerekçe göstermeksizin cayma hakkını kullanabilir.
2.2 Cayma Bildirimi: Cayma hakkı, e-posta (admkymk25@gmail.com) veya iletişim kanalları aracılığıyla Satıcı’ya bildirilmelidir. Bildirim yapılmadan gönderilen iadeler kabul edilmez.

3. İADE ŞARTLARI
İade edilecek ürünlerin şu koşulları sağlaması gerekir: Ürün kullanılmamış, yıkanmamış ve zarar görmemiş olmalı; etiketleri çıkarılmamış olmalı; tekrar satılabilir durumda olmalı; orijinal ambalajı ile gönderilmelidir. Bu şartları sağlamayan iadeler kabul edilmez.

4. CAYMA HAKKININ KULLANILAMAYACAĞI DURUMLAR
Alıcı’nın isteğiyle kişiselleştirilen ürünler, kullanılmış/yıkanmış ürünler, etiketi çıkarılmış veya ambalajı zarar görmüş ürünlerde cayma hakkı kullanılamaz.

5. İADE KARGO ÜCRETİ
İade kargo bedeli Alıcı tarafından karşılanır. Kargo bedeli, iade tutarına dahil edilmez. Teslim alınmayan siparişlerde oluşan kargo ücretleri Alıcı’ya aittir.

6. GERİ ÖDEME
İade uygun bulunursa ürün bedeli, onaydan itibaren 14 gün içerisinde Alıcı’nın ödeme yaptığı yöntemle iade edilir. Bankalardan kaynaklanan gecikmelerden Satıcı sorumlu tutulamaz.

7. DEĞİŞİM
Değişim talepleri stok durumuna bağlı olarak değerlendirilir. Değişimlerde kargo ücretleri Alıcı tarafından karşılanır.

8. TESLİM ALINMAYAN SİPARİŞLER
Teslim alınmayan ve geri dönen siparişlerde, kargo masrafları ürün bedelinden düşülerek iade yapılır.

9. MÜCBİR SEBEPLER
Doğal afetler, savaş, yangın, salgın hastalıklar ve altyapı sorunları mücbir sebep sayılır. Bu hallerde teslimat süresi uzayabilir.

10. YÜRÜRLÜK
Alıcı, site üzerinden sipariş vererek işbu politikayı kabul etmiş sayılır. Politika, site üzerinde yayınlandığı tarihte yürürlüğe girer.`,

        en: `DELIVERY AND RETURN POLICY

This Delivery and Return Policy has been prepared to regulate the delivery, return, and exchange processes regarding sales made through the reeha.com.tr website operated by Reeha (Adem Koymak).

1. DELIVERY CONDITIONS
1.1 Delivery Time: Orders are prepared and delivered to the cargo company within 1-3 business days following receipt of payment confirmation. Delivery time may vary due to stock status or order volume.
1.2 Delivery Address: Delivery is made to the address declared by the Buyer during the order. The Seller cannot be held responsible for delays caused by incorrect address information.
1.3 Shipping Company: Deliveries are made via the Seller's contracted cargo company. Delays caused by the shipping company are not the responsibility of the Seller.
1.4 Inspection upon Delivery: The Buyer is obliged to check the package while receiving the product. Damaged packages should not be received, and a report must be kept by the cargo officer.

2. RETURN AND RIGHT OF WITHDRAWAL
2.1 Right of Withdrawal Period: The Buyer may exercise the right of withdrawal within 14 (fourteen) days from the date of receipt without giving any reason.
2.2 Notification: The right of withdrawal must be reported to the Seller via email (admkymk25@gmail.com) or contact channels. Returns sent without notification will not be accepted.

3. RETURN CONDITIONS
Products to be returned must meet the following conditions: The product must be unused, unwashed, and undamaged; tags must not be removed; it must be in a resaleable condition and sent with its original packaging.

4. EXCEPTIONS TO THE RIGHT OF WITHDRAWAL
The right of withdrawal cannot be used for products personalized at the Buyer's request, used/washed products, or products with removed tags or damaged packaging.

5. RETURN SHIPPING FEE
The return shipping cost is covered by the Buyer. Shipping fees are not included in the refund amount. Shipping costs for unreceived orders belong to the Buyer.

6. REFUND
If the return is approved, the product price is refunded within 14 days following the approval via the Buyer's original payment method.

7. EXCHANGE
Exchange requests are evaluated based on stock availability. Shipping costs for exchanges are covered by the Buyer.

8. UNCOLLECTED ORDERS
For orders not received by the Buyer and returned by the cargo company, the refund will be made by deducting the shipping costs from the product price.

9. FORCE MAJEURE
Natural disasters, wars, fires, epidemics, and infrastructure problems are considered force majeure. In these cases, delivery times may be extended.

10. ENFORCEMENT
By placing an order, the Buyer is deemed to have accepted this policy. The policy enters into force on the date it is published on the website.` 
     
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
