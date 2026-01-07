// REEHA - Shopier Entegrasyon Dosyası
const SHOPIER_CONFIG = {
    apiKey: "5b46c28b5920af2c4a38c38c777f331819", // API KULLANICI
    apiSecret: "6204159f79734100c88037b7b51188b0", // API ŞİFRE
    callbackUrl: "https://reeha.com.tr/success.html" 
};

window.startCheckout = function() {
    if (cart.length === 0) {
        alert(currentLang === 'tr' ? "sepetiniz boş." : "cart is empty.");
        return;
    }

    // Toplam tutarı hesapla
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    // Ürünleri metne dök (Shopier açıklaması için)
    const productList = cart.map(item => `${item.name} (${item.size}) x${item.qty}`).join(", ");

    console.log("Ödeme başlatılıyor:", productList, totalAmount + " TL");

    // Shopier ödeme sayfasına yönlendir
    // Not: Buradaki ID senin dükkanındaki genel bir ürün ID'sidir.
    window.location.href = "https://www.shopier.com/ShowProductProxy.php?id=42972271";
};
