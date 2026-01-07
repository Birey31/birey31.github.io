// data.js
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
    bottoms: [ { id: 4, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" } ],
    accessories: [ { id: 5, name: "yakında", price: 0, img: "media/mobillogo.webp", desc: "yakında" } ]
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

İşbu Çerez Politikası, Reeha (Adem Koymak) tarafından işletilen reeha.com.tr internet sitesini ziyaret eden kullanıcıların gizliliğini korumak ve çerezlerin kullanımı hakkında bilgilendirme yapmak amacıyla hazırlanmıştır. Web sitemizi ziyaret eden kullanıcılar, işbu Çerez Politikası’nda belirtilen koşulları kabul etmiş sayılır.

1. ÇEREZ (COOKIE) NEDİR?
Çerezler; ziyaret ettiğiniz internet siteleri tarafından cihazınıza kaydedilen küçük boyutlu metin dosyalarıdır. Web sitesinin daha verimli çalışmasını sağlamak ve tercihlerini hatırlamak amacıyla kullanılır. Cihazınıza zarar vermez.

2. ÇEREZLERİN KULLANIM AMAÇLARI
• Teknik olarak düzgün çalışmayı sağlamak
• Kullanıcı tercihlerini (dil, tema vb.) hatırlamak
• Site performansını analiz etmek ve hizmet kalitesini geliştirmek
• Güvenliği sağlamak ve kötüye kullanımı önlemek

3. KULLANILAN ÇEREZ TÜRLERİ
3.1 Zorunlu (Teknik) Çerezler: Oturum yönetimi, güvenlik ve sipariş süreçleri için gereklidir. Devre dışı bırakıldığında site düzgün çalışmayabilir.
3.2 Fonksiyonel Çerezler: Gece / gündüz modu tercihi gibi kullanıcı ayarlarını hatırlar.
3.3 Analitik (Performans) Çerezler: Google Analytics aracılığıyla ziyaret edilen sayfalar ve cihaz türü gibi verileri anonim olarak toplar. Kişisel kimlik bilgisi içermez.
3.4 Reklam ve Pazarlama Çerezleri: Web sitemizde reklam veya pazarlama amaçlı üçüncü taraf çerezler kullanılmamaktadır.

4. ÜÇÜNCÜ TARAF ÇEREZLERİ
Performans ölçümü için Google Analytics gibi sağlayıcılar çerez yerleştirebilir. Bu çerezler ilgili sağlayıcının kendi politikasına tabidir.

5. ÇEREZLERİN SAKLAMA SÜRESİ
Oturum çerezleri tarayıcı kapanınca, kalıcı çerezler ise kullanım amacına uygun süre dolunca otomatik olarak silinir.

6. ÇEREZLERİN KONTROLÜ VE SİLİNMESİ
Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Ancak bu durumda kullanıcı deneyimi olumsuz etkilenebilir.

7. KİŞİSEL VERİLERİN KORUNMASI
Çerez verileri 6698 sayılı KVKK kapsamında işlenmektedir. Detaylar için KVKK Aydınlatma Metni'ne bakınız.

8. HUKUKİ DAYANAK
KVKK, Mesafeli Sözleşmeler Yönetmeliği ve GDPR (AB erişimleri için) hükümlerine uygun olarak kullanılmaktadır.

9. POLİTİKA DEĞİŞİKLİKLERİ
Satıcı, bu politikayı dilediği zaman güncelleme hakkını saklı tutar. Güncel hali yayınlandığı an yürürlüğe girer.

10. YÜRÜRLÜK
Kullanıcı, web sitesini kullanmaya devam ederek işbu Çerez Politikası’nı kabul etmiş sayılır.`,

        en: `COOKIE POLICY

This Cookie Policy has been prepared to protect the privacy of users visiting the reeha.com.tr website operated by Reeha (Adem Koymak) and to inform them about the use of cookies. Users visiting our website are deemed to have accepted the conditions stated in this Cookie Policy.

1. WHAT IS A COOKIE?
Cookies are small text files saved to your device by websites you visit. They are used to ensure the website functions efficiently and to remember user preferences. They do not harm your device.

2. PURPOSES OF COOKIE USE
• Ensuring technical functionality
• Remembering user preferences (language, theme, etc.)
• Analyzing site performance and improving service quality
• Ensuring security and preventing misuse

3. TYPES OF COOKIES USED
3.1 Strictly Necessary (Technical) Cookies: Required for session management, security, and order processes. If disabled, the site may not function correctly.
3.2 Functional Cookies: Remembers preferences like night/day mode for a personalized experience.
3.3 Analytical (Performance) Cookies: Anonymously collects data such as visited pages and device types via Google Analytics. Does not contain personal identification.
3.4 Advertising and Marketing Cookies: No third-party cookies for advertising or marketing purposes are used on our website.

4. THIRD-PARTY COOKIES
Third-party providers like Google Analytics may place cookies for performance measurement. Use of these cookies is subject to the provider's own policy.

5. COOKIE RETENTION PERIOD
Session cookies are deleted when the browser is closed, and persistent cookies are automatically deleted after a period suitable for their purpose.

6. CONTROL AND DELETION OF COOKIES
You can control, delete, or block cookies via your browser settings. However, disabling cookies may negatively affect user experience.

7. PROTECTION OF PERSONAL DATA
Data obtained via cookies is processed under KVKK Law No. 6698. Please refer to the Privacy Policy for details.

8. LEGAL BASIS
Cookies are used in accordance with KVKK, the Regulation on Distance Contracts, and GDPR (for EU access).

9. POLICY CHANGES
The Seller reserves the right to update this policy at any time. The updated version is effective as soon as it is published.

10. ENFORCEMENT
By continuing to use the website, the user declares that they have read, understood, and accepted this Cookie Policy.`
    },
    privacy: { 
        tr: `KİŞİSEL VERİLERİN KORUNMASINA İLİŞKİN AYDINLATMA METNİ

Reeha (“Şirket”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla kişisel verilerinizin hukuka uygun olarak işlenmesine, muhafaza edilmesine ve korunmasına azami hassasiyet göstermekteyiz. İşbu Aydınlatma Metni, Reeha tarafından işletilen internet sitesi üzerinden sunulan hizmetlerden faydalanan gerçek kişilerin bilgilendirilmesi amacıyla hazırlanmıştır.

1. VERİ SORUMLUSU
Veri Sorumlusu: Reeha (Adem Koymak)

2. KİŞİSEL VERİLERİN TOPLANMA YÖNTEMLERİ
Kişisel verileriniz; Reeha’ya ait internet sitesi, online satış ve ödeme formları, üyelik/iletişim formları, e-posta, telefon, sosyal medya kanalları ve çerezler aracılığıyla toplanabilmektedir.

3. İŞLENEN KİŞİSEL VERİLER
Kimlik (ad, soyad), iletişim (telefon, e-posta, adres), sipariş ve işlem bilgileri, ödeme ve fatura bilgileri, IP adresi ve kullanım kayıtları.

4. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI
Online satış işlemlerinin gerçekleştirilmesi, sipariş, ödeme, teslimat ve iade süreçlerinin yürütülmesi, müşteri hizmetleri desteği, hukuki yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin artırılması amaçlarıyla KVKK’nın 5. ve 6. maddelerine uygun olarak işlenmektedir.

5. KİŞİSEL VERİLERİN SAKLAMA SÜRESİ
Kişisel verileriniz, ilgili mevzuatta öngörülen veya işleme amacının gerektirdiği süre kadar muhafaza edilir. Süre sonunda silinir veya anonim hale getirilir.

6. KİŞİSEL VERİLERİN AKTARILMASI
Kişisel verileriniz; ödeme hizmeti sağlayıcıları (iyzico), kargo firmaları, mali müşavirler ve yetkili kamu kurumları ile KVKK’nın 8. ve 9. maddeleri uyarınca paylaşılabilmektedir. Reeha, verilerinizi izinsiz olarak üçüncü kişilere satmaz.

7. KİŞİSEL VERİLERİN KORUNMASINA YÖNELİK TEDBİRLER
Reeha, yetkisiz erişimi önlemek için gerekli teknik tedbirleri almaktadır. Kredi kartı bilgileri Reeha sistemlerinde saklanmaz, tüm işlemler iyzico altyapısı üzerinden güvenli şekilde yapılır.

8. KİŞİSEL VERİ SAHİBİNİNHAKLARI
KVKK’nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, yanlış verilerin düzeltilmesini isteme, verilerin silinmesini talep etme ve kanuna aykırı işlemlerde zararın giderilmesini isteme haklarına sahipsiniz.

9. BAŞVURU YOLLARI
Taleplerinizi yazılı olarak veya admkymk25@gmail.com üzerinden iletebilirsiniz. Başvurular en geç 30 gün içerisinde sonuçlandırılacaktır.

10. İLETİŞİM BİLGİLERİ
Ünvan: Reeha (Adem Koymak)
Adres: Mehmet Akif Ersoy Mah. Egemen Cad. No: 34 Arnavutköy / İSTANBUL
Telefon: 0534 875 57 60

11. YÜRÜRLÜK
İşbu metin, sitede yayınlandığı tarihte yürürlüğe girer.`,

        en: `CLARIFICATION TEXT ON THE PROTECTION OF PERSONAL DATA

As Reeha (“Company”), in accordance with the Law on the Protection of Personal Data No. 6698 (“KVKK”), we show maximum sensitivity to the lawful processing and protection of your personal data as a data controller. This Clarification Text has been prepared to inform natural persons benefiting from the services offered through the website.

1. DATA CONTROLLER
Data Controller: Reeha (Adem Koymak)

2. METHODS OF COLLECTING PERSONAL DATA
Your personal data may be collected through the Reeha website, online sales and payment forms, membership/contact forms, email, telephone, social media channels, and cookies.

3. PROCESSED PERSONAL DATA
Identity (name, surname), contact (phone, email, address), order and transaction information, payment and billing info, IP address, and usage logs.

4. PURPOSES OF PROCESSING PERSONAL DATA
Processing is carried out in accordance with Articles 5 and 6 of the KVKK for the purposes of performing online sales, managing order, payment, delivery, and return processes, providing customer support, fulfilling legal obligations, and improving service quality.

5. RETENTION PERIOD OF PERSONAL DATA
Your personal data is stored for the period stipulated in the relevant legislation or required by the processing purpose. At the end of the period, data is deleted or anonymized.

6. TRANSFER OF PERSONAL DATA
Your personal data may be shared with payment service providers (iyzico), cargo companies, financial consultants, and authorized public institutions in accordance with Articles 8 and 9 of the KVKK. Reeha does not sell your data to third parties.

7. MEASURES FOR DATA PROTECTION
Reeha takes necessary technical measures to prevent unauthorized access. Credit card information is not stored in Reeha systems; all transactions are securely performed via the iyzico infrastructure.

8. RIGHTS OF THE DATA OWNER
Pursuant to Article 11 of the KVKK, you have the right to learn whether your data is processed, request correction of incorrect data, request deletion, and claim compensation for damages in case of unlawful processing.

9. APPLICATION METHODS
You can submit your requests in writing or via admkymk25@gmail.com. Applications will be finalized within 30 days at the latest.

10. CONTACT INFORMATION
Title: Reeha (Adem Koymak)
Address: Mehmet Akif Ersoy Mah. Egemen Cad. No: 34 Arnavutköy / ISTANBUL
Phone: +90 534 875 57 60

11. ENFORCEMENT
This text enters into force on the date it is published on the website.`
    
    },
    contact: { 
        tr: `İLETİŞİM BİLGİLERİ

Veri Sorumlusu:
Reeha (Adem Koymak)

Adres:
Mehmet Akif Ersoy Mah. Egemen Cad. No: 34
Arnavutköy / İSTANBUL

Telefon:
+90 534 875 57 60

E-posta:
admkymk25@gmail.com

KVKK Kapsamında Başvuru E-Postası:
admkymk25@gmail.com`,

        en: `CONTACT INFORMATION

Data Controller:
Reeha (Adem Koymak)

Address:
Mehmet Akif Ersoy Mah. Egemen Cad. No: 34
Arnavutköy / ISTANBUL

Phone:
+90 534 875 57 60

E-mail:
admkymk25@gmail.com

KVKK (GDPR) Application E-mail:
admkymk25@gmail.com`
    }
};

const translations = {
    tr: { emptyCart: "boş.", orderNote: "sipariş notu...", addrTitle: "teslimat bilgileri", /* ... */ },
    en: { emptyCart: "empty.", orderNote: "order note...", addrTitle: "shipping info", /* ... */ }
};
