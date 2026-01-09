:root {
    --bg-color: #ffffff;
    --text-color: #000000;
}

body[data-theme="dark"] {
    --bg-color: #000000;
    --text-color: #ffffff;
}

* {
    margin: 0; padding: 0; box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: "Courier New", Courier, monospace;
    transition: background-color 0.4s ease, color 0.4s ease;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

/* --- HERO SECTION (KAPALI - İSTEK ÜZERİNE GİZLENDİ) --- */
#hero-section { display: none !important; }

/* --- NAVİGASYON (ÜST MENÜ) --- */
.header-left { position: fixed; top: 30px; left: 40px; z-index: 1000; }
.brand-logo { 
    font-family: 'Averta', sans-serif; 
    font-weight: 900; 
    font-size: 24px; 
    letter-spacing: 1px; 
    line-height: 1; 
    margin-bottom: 8px; 
    text-transform: uppercase; 
    color: var(--text-color); 
}
#current-time { 
    font-size: 11px; 
    opacity: 0.8; 
    letter-spacing: 0.5px; 
    min-height: 15px; 
    display: block !important; 
    color: var(--text-color); 
}

.top-right-nav { position: fixed; top: 30px; right: 30px; display: flex; align-items: center; gap: 20px; z-index: 1000; }
.theme-toggle { background: none; border: 1px solid var(--text-color); width: 14px; height: 14px; border-radius: 50%; cursor: pointer; }
body[data-theme="light"] .theme-toggle { background: var(--text-color); }
.cart-toggle { background: none; border: none; color: var(--text-color); font-size: 13px; cursor: pointer; text-transform: lowercase; }

#globalOverlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); z-index: 1500; display: none; pointer-events: none; cursor: pointer; backdrop-filter: blur(4px); }
#globalOverlay.active { display: block; pointer-events: auto !important;}

/* --- MODAL PENCERELER (ARKA PLAN RENGİ DÜZELTİLDİ) --- */
#infoPool, #productDetailPool, #checkoutPool, #soundsPool {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);
    width: 80%;
    height: 75%;
    
    /* Gece modunda siyah olması için değişken kullanıldı */
    background-color: var(--bg-color);
    border: 1px solid var(--text-color);
    color: var(--text-color);
    
    z-index: 2500;
    display: none;
    opacity: 0;
    transition: all 0.3s ease;
    overflow: hidden;
}
#infoPool.active, #productDetailPool.active, #checkoutPool.active, #soundsPool.active { display: flex; opacity: 1; transform: translate(-50%, -50%) scale(1); }

/* --- ÜRÜN DETAY --- */
.detail-container { display: flex; width: 100%; height: 100%; }
.detail-img-box { flex: 1; display: flex; align-items: center; justify-content: center; border-right: 1px solid var(--text-color); padding: 40px; }
.detail-img-box img { max-width: 100%; max-height: 100%; object-fit: contain; }
.detail-info-box { width: 400px; padding: 40px; display: flex; flex-direction: column; justify-content: center; gap: 25px; }
.size-btn { border: 1px solid var(--text-color); background: none; color: var(--text-color); padding: 5px 12px; cursor: pointer; font-size: 10px; transition: 0.3s; font-family: inherit; }
.size-btn.selected { background: var(--text-color); color: var(--bg-color); }
.add-to-cart-btn { background: var(--text-color); color: var(--bg-color); border: none; padding: 12px; cursor: pointer; font-family: inherit; font-size: 11px; text-transform: lowercase; }
.mobile-prod-title { display: none; }
.desktop-prod-title { display: block; margin-bottom: 10px; }
.prod-desc-formal { margin-top: auto; width: 100%; }

/* --- ANA ÜRÜN HAVUZU --- */
.products-pool {
    position: fixed;
    top: 52%;
    left: 55%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 65%;
    
    /* İSTEK: ÇERÇEVE SİLİNDİ */
    border: none; 
    
    /* İSTEK: RENK DEĞİŞİMİ GARANTİLENDİ (Siyah/Beyaz) */
    background-color: var(--bg-color) !important;
    
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s;
}

#pool-initial-img { height: 100%; width: 100%; object-fit: contain; display: block; cursor: pointer; padding: 20px; }
.products-grid { display: none; grid-template-columns: repeat(4, 1fr); gap: 20px; width: 100%; height: 100%; padding: 30px; overflow-y: auto; }

.product-box { 
    width: 100%; 
    aspect-ratio: 1/1; 
    border: none; /* Ürün kutusunun çerçevesi de silindi */
    display: flex; 
    align-items: center; 
    justify-content: center; 
    overflow: hidden; 
    margin-bottom: 8px; 
    
    /* Ürün kutuları da temaya göre renk değiştirecek */
    background-color: var(--bg-color) !important; 
}
.product-box img { width: 90%; height: 90%; object-fit: contain; }
.product-info { font-size: 9px; text-transform: lowercase; color: var(--text-color); text-align: center; }

/* --- YAN SEPET --- */
.side-cart { position: fixed; top: 0; right: -400px; width: 350px; height: 100vh; background-color: var(--bg-color); color: var(--text-color); transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1); z-index: 2000; padding: 30px; display: flex; flex-direction: column; border-left: 1px solid var(--text-color); }
.side-cart.active { right: 0; }
.cart-item { border-bottom: 1px solid var(--text-color); padding-bottom: 10px; margin-bottom: 15px; font-size: 11px; display: flex; justify-content: space-between; align-items: center;}
.cart-footer { border-top: 1px solid var(--text-color); padding-top: 20px; margin-top: auto; }
.checkout-btn { width: 100%; background: var(--text-color); color: var(--bg-color); border: none; padding: 15px; font-family: inherit; font-size: 12px; cursor: pointer; text-transform: lowercase; font-weight: bold; }
.cart-note { width: 100%; background: none; border: 1px solid var(--text-color); color: var(--text-color); font-family: inherit; font-size: 10px; padding: 10px; height: 60px; resize: none; margin-bottom: 15px; outline: none; }

/* --- MENÜ (NAV) --- */
nav#main-nav { position: fixed; left: 40px; top: 180px; display: flex; flex-direction: column; gap: 12px; z-index: 20000; }
.nav-link { text-decoration: none; color: var(--text-color); font-size: 14px; text-transform: lowercase; cursor: pointer; opacity: 0.5; }
.nav-link.active { opacity: 1; font-weight: bold; text-decoration: underline; }

/* --- FOOTER (MASAÜSTÜ İÇİN SABİT) --- */
.legal-footer { position: fixed; bottom: 40px; left: 40px; display: flex; gap: 20px; }
.legal-link { font-size: 11px; opacity: 0.5; cursor: pointer; color: var(--text-color); text-transform: lowercase; }
.copyright-text { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); font-size: 10px; opacity: 0.4; text-transform: lowercase; pointer-events: none; z-index: 100; color: var(--text-color); }
.bottom-right-container { position: fixed; right: 40px; bottom: 30px; display: flex; align-items: center; gap: 12px; z-index: 100; }
.social-link svg { width: 14px; height: 14px; fill: var(--text-color); opacity: 0.6; transition: opacity 0.3s; display: block; }
.artwork-credit { position: absolute; bottom: -20px; right: 0; font-size: 8px; opacity: 0.5; text-transform: lowercase; font-family: inherit; pointer-events: none; color: var(--text-color); }

/* --- SOUNDS POOL --- */
#soundsPool { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.95); width: 350px; height: auto; padding: 30px; background-color: var(--bg-color); border: 1px solid var(--text-color); z-index: 3500; display: none; flex-direction: column; align-items: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: all 0.3s ease; }
#soundsPool.active { display: flex; transform: translate(-50%, -50%) scale(1); }

/* --- INFO & CHECKOUT SIDES --- */
.info-container, .checkout-container { display: flex; width: 100%; height: 100%; position: relative; }
.info-sidebar, .checkout-summary-box { width: 200px; border-right: 1px solid var(--text-color); padding: 40px; display: flex; flex-direction: column; gap: 20px; flex-shrink: 0; }
.info-content, .checkout-form-box { flex: 1; padding: 40px; overflow-y: auto; font-size: 12px; line-height: 1.8; }


/* =========================================================================
   MOBİL İÇİN ÖZEL DÜZENLEMELER (RESPONSIVE) - DÜZELTİLDİ
   ========================================================================= */
@media (max-width: 768px) {
    /* İSTEK: MOBİL BOZUKLUĞU GİDERİLDİ */
    body { 
        height: auto !important; 
        min-height: 100vh; 
        overflow-y: auto !important; /* Kaydırma açıldı */
        overflow-x: hidden; 
        position: relative; 
        padding-bottom: 40px;
    }

    nav#main-nav { 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 120px; 
        display: flex; 
        flex-direction: row; 
        justify-content: center; 
        align-items: flex-end; 
        padding-bottom: 15px; 
        background-color: var(--bg-color); 
        z-index: 400; 
        border-bottom: 1px solid var(--text-color); 
    }

    .products-pool { 
        position: relative !important; 
        top: auto !important; 
        left: auto !important; 
        transform: none !important; 
        width: 90% !important; 
        height: auto !important; 
        
        /* Menünün altında kalsın diye yukarıdan boşluk verildi */
        margin: 160px auto 40px auto !important; 
        
        border: none !important; /* Mobilde de çerçeve yok */
        background-color: var(--bg-color) !important;
        padding: 0; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        overflow: visible; 
    }

    /* İSTEK: MOBİLDE ALT METİNLER AŞAĞIYA ALINDI */
    .legal-footer { 
        position: relative !important; 
        bottom: auto !important; 
        left: auto !important; 
        width: 100%; 
        display: flex; 
        justify-content: center; 
        flex-wrap: wrap; 
        gap: 15px; 
        margin-top: 30px; 
        padding: 10px;
        background: none; 
        z-index: 1; 
    }
    
    .bottom-right-container { 
        position: relative !important; 
        bottom: auto !important; 
        right: auto !important; 
        left: auto !important; 
        transform: none; 
        width: 100%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        gap: 20px; 
        margin-top: 10px;
        z-index: 1; 
    }
    
    .copyright-text { 
        position: relative !important; 
        bottom: auto !important; 
        left: auto !important; 
        transform: none; 
        width: 100%; 
        text-align: center; 
        margin-top: 20px;
        margin-bottom: 40px;
        background: none; 
        font-size: 9px; 
        opacity: 0.4; 
        z-index: 1; 
    }

    /* Havuzun içindeki ana resmi mobilde küçülttük ki ekranı patlatmasın */
    #pool-initial-img { width: 100%; height: auto; max-height: 400px; object-fit: contain; }
    
    .products-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; padding: 0; width: 100%; height: auto; overflow: visible; }
    
    #productDetailPool, #infoPool, #checkoutPool, #soundsPool { width: 95% !important; height: 90% !important; padding: 0; flex-direction: column; overflow-y: auto; }
    .detail-container, .info-container, .checkout-container { flex-direction: column; height: auto; padding: 20px; }
    .mobile-prod-title { display: block; font-family: 'Averta', sans-serif; font-weight: 900; font-size: 20px; text-transform: uppercase; margin-bottom: 15px; width: 100%; border-bottom: 1px solid var(--text-color); padding-bottom: 10px; color: var(--text-color); }
    .desktop-prod-title { display: none; }
    .detail-img-box, .detail-info-box, .info-sidebar, .info-content, .checkout-summary-box, .checkout-form-box { width: 100%; border: none; padding: 0; margin-bottom: 20px; }
    .info-sidebar { border-bottom: 1px solid var(--text-color); padding-bottom: 20px; }
    .side-cart { width: 90%; right: -100%; z-index: 4000; }
    .side-cart.active { right: 0; }
}
