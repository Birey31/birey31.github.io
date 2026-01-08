// api/odeme.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const { name, price, size } = req.body;

    // Shopier'in beklediği veriler (Dokümantasyona göre)
    const data = {
        "APIuser": "5b46c28b5920af2c4a38c38c777f331819", // Senin API Kullanıcı adın
        "APIpassword": "6204159f79734100c88037b7b51188b0", // Senin API Şifren
        "order_id": "REEHA-" + Date.now(),
        "product_name": `${name} (${size})`,
        "price": price,
        "currency": "TRY",
        "buyer_name": "Reeha", // Test için sabit, normalde formdan gelir
        "buyer_surname": "Customer",
        "buyer_email": "test@test.com",
        "buyer_phone": "05555555555",
        "callback_url": "https://reeha.com.tr/success.html"
    };

    try {
        // Shopier'e ödeme isteği atıyoruz
        const response = await fetch("https://www.shopier.com/api/v1/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        // Shopier bize bir HTML formu döner
        const formHtml = await response.text();
        
        // Bu formu direkt frontend'e gönderiyoruz
        res.status(200).send(formHtml);

    } catch (error) {
        res.status(500).json({ error: "Shopier baglanti hatasi" });
    }
}
