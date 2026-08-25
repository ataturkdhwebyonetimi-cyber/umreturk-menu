/* UMRETÜRK MENÜ V15.1 FINAL - ARAMA SONUCU KORUMA */
/* UmreTürk Merkezi Menü V15 FINAL — Mobil + Masaüstü Garantili Arama — Mobil Site İçi Arama Güncellemesi
   Kaynak: V3.6 toparlanmış menü
   Bu dosyayı değiştirince tüm sayfalardaki menü güncellenir.
*/
(function(){
  if (document.getElementById("ut-final-menu") || window.__UMRETURK_MERKEZI_MENU__) return;
  window.__UMRETURK_MERKEZI_MENU__ = true;

  var style = document.createElement("style");
  style.id = "ut-merkezi-menu-style";
  style.textContent = "\n\n/* SITEJET SKIP LINK - normalde gizli, klavye odağında görünür */\na[href^=\"#\"][class*=\"skip\" i],\n.skip-link,\n.skip-to-main,\na[href=\"#main\"],\na[href=\"#main-content\"],\na[href=\"#content\"]{\nposition:absolute !important;\nwidth:1px !important;\nheight:1px !important;\npadding:0 !important;\nmargin:-1px !important;\noverflow:hidden !important;\nclip:rect(0,0,0,0) !important;\nwhite-space:nowrap !important;\nborder:0 !important;\n}\na[href^=\"#\"][class*=\"skip\" i]:focus,\n.skip-link:focus,\n.skip-to-main:focus,\na[href=\"#main\"]:focus,\na[href=\"#main-content\"]:focus,\na[href=\"#content\"]:focus{\nposition:fixed !important;\ntop:10px !important;\nleft:10px !important;\nwidth:auto !important;\nheight:auto !important;\npadding:10px 14px !important;\nmargin:0 !important;\noverflow:visible !important;\nclip:auto !important;\nwhite-space:normal !important;\nbackground:#10372c !important;\ncolor:#ffcc11 !important;\nborder-radius:8px !important;\nz-index:2147483647 !important;\n}\n\n\nhtml body #ut-final-menu,\nhtml body #ut-final-menu *,\nhtml body #ut-final-mobile,\nhtml body #ut-final-mobile *{\n    box-sizing:border-box !important;\n}\n\nhtml body #ut-final-menu{\n    display:block !important;\n    visibility:visible !important;\n    opacity:1 !important;\n    position:fixed !important;\n    top:0 !important;\n    left:0 !important;\n    right:0 !important;\n\n    width:100% !important;\n    max-width:100% !important;\n\n    margin:0 !important;\n    padding:0 !important;\n\n    background:#ffcc11 !important;\n\n    border:0 !important;\n    border-bottom:3px solid #123b30 !important;\n\n    box-shadow:0 5px 20px rgba(0,0,0,.11) !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n\n    z-index:999999 !important;\n\n    transform:translateY(0) !important;\n    transition:\n        transform .42s cubic-bezier(.22,.61,.36,1),\n        box-shadow .30s ease,\n        filter .30s ease !important;\n    will-change:transform !important;\n}\n\n/* AŞAĞI KAYDIRIRKEN MENÜYÜ GİZLE */\nhtml body #ut-final-menu.ut-scroll-hidden{\n    transform:translateY(-112%) !important;\n    box-shadow:none !important;\n    filter:saturate(.96) !important;\n}\n\n/* YUKARI KAYDIRINCA MENÜYÜ TEKRAR GÖSTER */\nhtml body #ut-final-menu.ut-scroll-visible{\n    transform:translateY(0) !important;\n    box-shadow:0 7px 24px rgba(0,0,0,.14) !important;\n    filter:saturate(1) !important;\n}\n\n\n/* =========================================================\n   İÇ ALAN\n========================================================= */\n\nhtml body #ut-final-menu .ut-inner{\n    display:flex !important;\n\n    width:100% !important;\n    max-width:1600px !important;\n\n    min-height:96px !important;\n    height:96px !important;\n\n    margin:0 auto !important;\n    padding:0 30px !important;\n\n    align-items:center !important;\n    gap:25px !important;\n}\n\n\n/* =========================================================\n   LOGO\n========================================================= */\n\nhtml body #ut-final-menu .ut-logo{\n    display:flex !important;\n\n    width:250px !important;\n    min-width:250px !important;\n    max-width:250px !important;\n\n    height:76px !important;\n\n    align-items:center !important;\n    justify-content:flex-start !important;\n\n    margin:0 !important;\n    padding:0 !important;\n\n    text-decoration:none !important;\n}\n\nhtml body #ut-final-menu .ut-logo img{\n    display:block !important;\n\n    width:235px !important;\n    min-width:235px !important;\n    max-width:235px !important;\n\n    height:74px !important;\n    min-height:74px !important;\n    max-height:74px !important;\n\n    margin:0 !important;\n    padding:0 !important;\n\n    object-fit:contain !important;\n    object-position:left center !important;\n\n    border:0 !important;\n}\n\n\n/* =========================================================\n   ANA MENÜ\n========================================================= */\n\nhtml body #ut-final-menu .ut-nav{\n    display:flex !important;\n    flex:1 1 auto !important;\n\n    align-items:center !important;\n    justify-content:center !important;\n    flex-wrap:nowrap !important;\n\n    gap:8px !important;\n\n    margin:0 !important;\n    padding:0 !important;\n\n    list-style:none !important;\n}\n\nhtml body #ut-final-menu .ut-item{\n    position:relative !important;\n\n    display:flex !important;\n    align-items:center !important;\n\n    margin:0 !important;\n    padding:0 !important;\n\n    list-style:none !important;\n}\n\n\n/* =========================================================\n   ANA MENÜ LINKLERİ\n========================================================= */\n\nhtml body #ut-final-menu .ut-link{\n    position:relative !important;\n\n    display:flex !important;\n\n    min-height:46px !important;\n    height:46px !important;\n\n    align-items:center !important;\n    justify-content:center !important;\n\n    margin:0 !important;\n    padding:0 15px !important;\n\n    color:#10372c !important;\n    background:transparent !important;\n\n    border:0 !important;\n    border-radius:10px !important;\n\n    text-decoration:none !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:16px !important;\n    font-weight:600 !important;\n\n    line-height:16px !important;\n    letter-spacing:.3px !important;\n\n    white-space:nowrap !important;\n\n    transition:\n        background .25s ease,\n        color .25s ease,\n        transform .25s ease !important;\n}\n\nhtml body #ut-final-menu .ut-link:hover{\n    color:#071f19 !important;\n    background:rgba(255,255,255,.27) !important;\n    transform:translateY(-2px) !important;\n}\n\nhtml body #ut-final-menu .ut-link::after{\n    content:\"\" !important;\n\n    position:absolute !important;\n    left:50% !important;\n    bottom:4px !important;\n\n    width:0 !important;\n    height:2px !important;\n\n    transform:translateX(-50%) !important;\n\n    background:#10372c !important;\n    border-radius:20px !important;\n\n    transition:width .25s ease !important;\n}\n\nhtml body #ut-final-menu .ut-link:hover::after{\n    width:55% !important;\n}\n\n\n/* =========================================================\n   GÜNCEL TURLAR\n========================================================= */\n\nhtml body #ut-final-menu .ut-tour{\n    color:#ffcc11 !important;\n\n    background:linear-gradient(\n        135deg,\n        #17483a,\n        #0d2d25\n    ) !important;\n\n    font-weight:700 !important;\n\n    padding-left:19px !important;\n    padding-right:19px !important;\n\n    box-shadow:0 6px 16px rgba(0,0,0,.16) !important;\n}\n\nhtml body #ut-final-menu .ut-tour::after{\n    display:none !important;\n}\n\nhtml body #ut-final-menu .ut-tour:hover{\n    color:#fff3ad !important;\n\n    background:linear-gradient(\n        135deg,\n        #0d2d25,\n        #17483a\n    ) !important;\n}\n\n\n/* =========================================================\n   DROPDOWN OK\n========================================================= */\n\nhtml body #ut-final-menu .ut-dropdown-parent > .ut-link{\n    padding-right:31px !important;\n}\n\nhtml body #ut-final-menu .ut-dropdown-parent > .ut-link::before{\n    content:\"\" !important;\n\n    position:absolute !important;\n    right:13px !important;\n    top:50% !important;\n\n    width:6px !important;\n    height:6px !important;\n\n    margin-top:-5px !important;\n\n    border-right:2px solid #10372c !important;\n    border-bottom:2px solid #10372c !important;\n\n    transform:rotate(45deg) !important;\n\n    transition:transform .25s ease !important;\n}\n\nhtml body #ut-final-menu .ut-dropdown-parent:hover > .ut-link::before{\n    transform:rotate(225deg) translate(-2px,-2px) !important;\n}\n\n\n/* =========================================================\n   DROPDOWN\n========================================================= */\n\nhtml body #ut-final-menu .ut-dropdown{\n    position:absolute !important;\n\n    top:100% !important;\n    left:0 !important;\n\n    width:max-content !important;\n    min-width:240px !important;\n    max-width:380px !important;\n\n    margin:0 !important;\n    padding:10px !important;\n\n    list-style:none !important;\n\n    background:linear-gradient(\n        160deg,\n        #17483a,\n        #0d2d25\n    ) !important;\n\n    border:1px solid rgba(255,204,17,.30) !important;\n    border-top:3px solid #ffcc11 !important;\n\n    border-radius:0 0 15px 15px !important;\n\n    box-shadow:0 18px 40px rgba(0,0,0,.27) !important;\n\n    opacity:0 !important;\n    visibility:hidden !important;\n    pointer-events:none !important;\n\n    transform:translateY(5px) !important;\n\n    transition:\n        opacity .20s ease,\n        transform .20s ease,\n        visibility .20s ease !important;\n\n    z-index:99999999 !important;\n}\n\nhtml body #ut-final-menu .ut-dropdown-parent:hover > .ut-dropdown,\nhtml body #ut-final-menu .ut-dropdown-parent:focus-within > .ut-dropdown{\n    opacity:1 !important;\n    visibility:visible !important;\n    pointer-events:auto !important;\n    transform:translateY(0) !important;\n}\n\n\n/* =========================================================\n   DROPDOWN LINKLER\n========================================================= */\n\nhtml body #ut-final-menu .ut-dropdown li{\n    display:block !important;\n    width:100% !important;\n\n    margin:0 !important;\n    padding:0 !important;\n\n    list-style:none !important;\n}\n\nhtml body #ut-final-menu .ut-dropdown a{\n    display:flex !important;\n\n    width:100% !important;\n    min-height:48px !important;\n\n    align-items:center !important;\n\n    margin:0 !important;\n    padding:0 14px !important;\n\n    color:#ffffff !important;\n    background:transparent !important;\n\n    border-radius:9px !important;\n\n    text-decoration:none !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:14px !important;\n    font-weight:600 !important;\n    line-height:19px !important;\n    white-space:normal !important;\n\n    transition:\n        background .20s ease,\n        color .20s ease,\n        padding-left .20s ease !important;\n}\n\nhtml body #ut-final-menu .ut-dropdown a::before{\n    content:\"\" !important;\n\n    width:5px !important;\n    min-width:5px !important;\n    height:5px !important;\n\n    margin-right:11px !important;\n\n    background:#ffcc11 !important;\n    border-radius:50% !important;\n}\n\nhtml body #ut-final-menu .ut-dropdown a:hover{\n    color:#ffdd5d !important;\n    background:rgba(255,255,255,.075) !important;\n    padding-left:20px !important;\n}\n\n\n/* =========================================================\n   BLOG MEGA MENÜ - MASAÜSTÜ\n   4 SÜTUN: BAŞLANGIÇ / HAZIRLIK / TUR & KONAKLAMA / İBADET & BİLGİ\n========================================================= */\n\nhtml body #ut-final-menu .ut-blog-parent{\n    position:relative !important;\n}\n\nhtml body #ut-final-menu .ut-mega-menu{\n    position:absolute !important;\n    top:100% !important;\n    right:-120px !important;\n    left:auto !important;\n\n    display:grid !important;\n    grid-template-columns:repeat(4,minmax(0,1fr)) !important;\n    gap:14px !important;\n\n    width:min(1120px, calc(100vw - 40px)) !important;\n    max-width:1120px !important;\n\n    margin:0 !important;\n    padding:18px !important;\n\n    background:linear-gradient(\n        155deg,\n        #17483a 0%,\n        #0d2d25 100%\n    ) !important;\n\n    border:1px solid rgba(255,204,17,.34) !important;\n    border-top:3px solid #ffcc11 !important;\n    border-radius:0 0 18px 18px !important;\n    box-shadow:0 22px 55px rgba(0,0,0,.30) !important;\n\n    opacity:0 !important;\n    visibility:hidden !important;\n    pointer-events:none !important;\n\n    transform:translateY(6px) !important;\n\n    transition:\n        opacity .20s ease,\n        transform .20s ease,\n        visibility .20s ease !important;\n\n    z-index:99999999 !important;\n}\n\nhtml body #ut-final-menu .ut-blog-parent:hover > .ut-mega-menu,\nhtml body #ut-final-menu .ut-blog-parent:focus-within > .ut-mega-menu{\n    opacity:1 !important;\n    visibility:visible !important;\n    pointer-events:auto !important;\n    transform:translateY(0) !important;\n}\n\n/* UMRE MEGA MENÜ - soldaki UMRE sekmesine göre ekrana dengeli oturur */\nhtml body #ut-final-menu .ut-umre-parent > .ut-mega-menu{\n    left:-180px !important;\n    right:auto !important;\n    grid-template-columns:repeat(3,minmax(0,1fr)) !important;\n    width:min(900px, calc(100vw - 40px)) !important;\n    max-width:900px !important;\n}\n\nhtml body #ut-final-menu .ut-mega-col{\n    display:block !important;\n    min-width:0 !important;\n\n    margin:0 !important;\n    padding:15px !important;\n\n    background:rgba(255,255,255,.055) !important;\n    border:1px solid rgba(255,255,255,.07) !important;\n    border-radius:13px !important;\n}\n\nhtml body #ut-final-menu .ut-mega-title{\n    display:block !important;\n\n    margin:0 0 9px 0 !important;\n    padding:0 0 10px 0 !important;\n\n    color:#ffdc58 !important;\n    border-bottom:1px solid rgba(255,204,17,.25) !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:12px !important;\n    font-weight:800 !important;\n    line-height:16px !important;\n    letter-spacing:.8px !important;\n}\n\nhtml body #ut-final-menu .ut-mega-link{\n    position:relative !important;\n\n    display:flex !important;\n    width:100% !important;\n    min-height:42px !important;\n\n    align-items:center !important;\n\n    margin:0 !important;\n    padding:8px 9px 8px 23px !important;\n\n    color:#ffffff !important;\n    background:transparent !important;\n    border-radius:8px !important;\n\n    text-decoration:none !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:13px !important;\n    font-weight:600 !important;\n    line-height:18px !important;\n\n    transition:\n        color .2s ease,\n        background .2s ease,\n        padding-left .2s ease !important;\n}\n\nhtml body #ut-final-menu .ut-mega-link::before{\n    content:\"\" !important;\n    position:absolute !important;\n    left:9px !important;\n    top:50% !important;\n\n    width:5px !important;\n    height:5px !important;\n    margin-top:-2px !important;\n\n    background:#ffcc11 !important;\n    border-radius:50% !important;\n}\n\nhtml body #ut-final-menu .ut-mega-link:hover{\n    color:#ffdf64 !important;\n    background:rgba(255,255,255,.075) !important;\n    padding-left:27px !important;\n}\n\nhtml body #ut-final-menu .ut-mega-footer{\n    grid-column:1 / -1 !important;\n    display:flex !important;\n    justify-content:flex-end !important;\n    margin:0 !important;\n    padding:0 !important;\n}\n\nhtml body #ut-final-menu .ut-mega-all{\n    display:inline-flex !important;\n    align-items:center !important;\n    justify-content:center !important;\n\n    min-height:43px !important;\n    padding:0 18px !important;\n\n    color:#10372c !important;\n    background:#ffcc11 !important;\n    border-radius:10px !important;\n\n    text-decoration:none !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:13px !important;\n    font-weight:800 !important;\n\n    transition:transform .2s ease, background .2s ease !important;\n}\n\nhtml body #ut-final-menu .ut-mega-all:hover{\n    background:#ffdc58 !important;\n    transform:translateY(-2px) !important;\n}\n\n/* TABLETTE MEGA MENÜ EKRANA OTURSUN */\n@media(max-width:1250px) and (min-width:951px){\n    html body #ut-final-menu .ut-mega-menu{\n        grid-template-columns:repeat(2,minmax(0,1fr)) !important;\n        right:-45px !important;\n        width:min(840px, calc(100vw - 24px)) !important;\n        max-width:840px !important;\n        gap:10px !important;\n        padding:14px !important;\n    }\n\n    html body #ut-final-menu .ut-umre-parent > .ut-mega-menu{\n        left:-180px !important;\n        right:auto !important;\n        grid-template-columns:repeat(3,minmax(0,1fr)) !important;\n        width:min(840px, calc(100vw - 24px)) !important;\n        max-width:840px !important;\n    }\n\n    html body #ut-final-menu .ut-mega-col{\n        padding:12px !important;\n    }\n\n    html body #ut-final-menu .ut-mega-link{\n        font-size:12px !important;\n        line-height:17px !important;\n    }\n}\n\n/* =========================================================\n   BLOG MEGA MENÜ - MOBİL İÇ ACCORDION\n========================================================= */\n\nhtml body #ut-final-mobile #ut-mobile-blog,\nhtml body #ut-final-mobile #ut-mobile-umre{\n    padding:5px 0 5px 10px !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-group{\n    display:block !important;\n    width:100% !important;\n    margin:0 0 6px 0 !important;\n    padding:0 !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-cat{\n    position:relative !important;\n\n    display:flex !important;\n    width:100% !important;\n    min-height:46px !important;\n\n    align-items:center !important;\n\n    margin:0 !important;\n    padding:0 45px 0 13px !important;\n\n    color:#10372c !important;\n    background:rgba(255,255,255,.20) !important;\n\n    border:1px solid rgba(16,55,44,.10) !important;\n    border-radius:9px !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:13px !important;\n    font-weight:800 !important;\n    line-height:17px !important;\n    text-align:left !important;\n\n    cursor:pointer !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-cat::after{\n    content:\"+\" !important;\n    position:absolute !important;\n    right:12px !important;\n    top:50% !important;\n    transform:translateY(-50%) !important;\n\n    display:flex !important;\n    width:24px !important;\n    height:24px !important;\n    align-items:center !important;\n    justify-content:center !important;\n\n    color:#ffcc11 !important;\n    background:#10372c !important;\n    border-radius:50% !important;\n\n    font-family:Arial,sans-serif !important;\n    font-size:17px !important;\n    font-weight:700 !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-cat.active::after{\n    content:\"−\" !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-items{\n    display:none !important;\n    width:100% !important;\n    margin:0 !important;\n    padding:5px 0 3px 11px !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-items.active{\n    display:block !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-items a{\n    min-height:43px !important;\n    margin:0 0 3px 0 !important;\n    background:rgba(16,55,44,.06) !important;\n    font-size:13px !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-all{\n    display:flex !important;\n    width:100% !important;\n    min-height:48px !important;\n\n    align-items:center !important;\n    justify-content:center !important;\n\n    margin:7px 0 2px 0 !important;\n    padding:0 12px !important;\n\n    color:#ffcc11 !important;\n    background:#10372c !important;\n    border:1px solid #10372c !important;\n    border-radius:10px !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:13px !important;\n    font-weight:800 !important;\n    text-align:center !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-blog-all::before{\n    display:none !important;\n}\n\n/* =========================================================\n   HAMBURGER\n========================================================= */\n\nhtml body #ut-final-menu .ut-toggle{\n    display:none !important;\n\n    width:46px !important;\n    min-width:46px !important;\n    height:46px !important;\n\n    align-items:center !important;\n    justify-content:center !important;\n\n    margin:0 !important;\n    padding:0 !important;\n\n    background:rgba(255,255,255,.25) !important;\n\n    border:1px solid rgba(16,55,44,.22) !important;\n    border-radius:12px !important;\n\n    cursor:pointer !important;\n}\n\nhtml body #ut-final-menu .ut-bars{\n    display:flex !important;\n    flex-direction:column !important;\n\n    width:23px !important;\n    gap:5px !important;\n}\n\nhtml body #ut-final-menu .ut-bars span{\n    display:block !important;\n\n    width:23px !important;\n    height:2px !important;\n\n    background:#10372c !important;\n    border-radius:10px !important;\n}\n\n\n/* =========================================================\n   MOBİL OVERLAY\n========================================================= */\n\nhtml body #ut-final-overlay{\n    position:fixed !important;\n    inset:0 !important;\n\n    background:rgba(3,18,14,.62) !important;\n\n    opacity:0 !important;\n    visibility:hidden !important;\n    pointer-events:none !important;\n\n    transition:\n        opacity .3s ease,\n        visibility .3s ease !important;\n\n    z-index:2147483000 !important;\n}\n\nhtml body #ut-final-overlay.active{\n    opacity:1 !important;\n    visibility:visible !important;\n    pointer-events:auto !important;\n}\n\n\n/* =========================================================\n   MOBİL PANEL\n========================================================= */\n\nhtml body #ut-final-mobile{\n    position:fixed !important;\n\n    top:0 !important;\n    right:0 !important;\n\n    display:block !important;\n\n    width:min(390px,90vw) !important;\n    height:100dvh !important;\n\n    margin:0 !important;\n\n    padding:\n        20px 18px\n        calc(25px + env(safe-area-inset-bottom))\n        18px !important;\n\n    background:#ffcc11 !important;\n\n    transform:translateX(105%) !important;\n\n    overflow-y:auto !important;\n    overscroll-behavior:contain !important;\n\n    box-shadow:-20px 0 60px rgba(0,0,0,.30) !important;\n\n    transition:\n        transform .38s cubic-bezier(.2,.8,.2,1) !important;\n\n    z-index:2147483001 !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n}\n\nhtml body #ut-final-mobile.active{\n    transform:translateX(0) !important;\n}\n\n\n/* =========================================================\n   MOBİL ÜST\n========================================================= */\n\nhtml body #ut-final-mobile .ut-mobile-head{\n    position:relative !important;\n\n    display:flex !important;\n    min-height:82px !important;\n\n    align-items:center !important;\n\n    padding:0 55px 16px 0 !important;\n    margin:0 0 15px 0 !important;\n\n    border-bottom:1px solid rgba(16,55,44,.22) !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-logo{\n    display:block !important;\n\n    width:220px !important;\n    max-width:220px !important;\n    height:68px !important;\n\n    object-fit:contain !important;\n    object-position:left center !important;\n}\n\nhtml body #ut-final-mobile .ut-close{\n    position:absolute !important;\n\n    right:0 !important;\n    top:8px !important;\n\n    display:flex !important;\n\n    width:42px !important;\n    height:42px !important;\n\n    align-items:center !important;\n    justify-content:center !important;\n\n    padding:0 !important;\n\n    color:#10372c !important;\n\n    background:rgba(255,255,255,.34) !important;\n\n    border:1px solid rgba(16,55,44,.25) !important;\n    border-radius:50% !important;\n\n    font-family:Arial,sans-serif !important;\n    font-size:27px !important;\n    line-height:1 !important;\n\n    cursor:pointer !important;\n}\n\n\n/* =========================================================\n   MOBİL ANA MENÜ\n========================================================= */\n\nhtml body #ut-final-mobile .ut-mobile-link,\nhtml body #ut-final-mobile .ut-mobile-parent{\n    display:flex !important;\n\n    width:100% !important;\n    min-height:54px !important;\n\n    align-items:center !important;\n\n    margin:0 0 5px 0 !important;\n    padding:0 15px !important;\n\n    color:#10372c !important;\n    background:rgba(255,255,255,.12) !important;\n\n    border:1px solid rgba(16,55,44,.08) !important;\n    border-radius:10px !important;\n\n    text-decoration:none !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:16px !important;\n    font-weight:700 !important;\n    line-height:20px !important;\n\n    text-align:left !important;\n\n    cursor:pointer !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-tour{\n    color:#ffcc11 !important;\n\n    background:#10372c !important;\n    border-color:#10372c !important;\n\n    font-weight:800 !important;\n}\n\n\n/* =========================================================\n   MOBİL ALT MENÜ\n========================================================= */\n\nhtml body #ut-final-mobile .ut-mobile-sub{\n    display:none !important;\n\n    width:100% !important;\n\n    margin:0 0 8px 0 !important;\n    padding:4px 0 4px 16px !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-sub.active{\n    display:block !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-sub a{\n    display:flex !important;\n\n    width:100% !important;\n    min-height:45px !important;\n\n    align-items:center !important;\n\n    margin:0 0 3px 0 !important;\n    padding:0 13px !important;\n\n    color:#10372c !important;\n    background:rgba(16,55,44,.07) !important;\n\n    border:1px solid rgba(16,55,44,.08) !important;\n    border-radius:8px !important;\n\n    text-decoration:none !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:14px !important;\n    font-weight:600 !important;\n    line-height:19px !important;\n}\n\nhtml body #ut-final-mobile .ut-mobile-sub a::before{\n    content:\"\" !important;\n\n    width:5px !important;\n    min-width:5px !important;\n    height:5px !important;\n\n    margin-right:10px !important;\n\n    background:#10372c !important;\n    border-radius:50% !important;\n}\n\n\n/* =========================================================\n   TELEFON\n========================================================= */\n\nhtml body #ut-final-mobile .ut-contact-area{\n    display:block !important;\n\n    width:100% !important;\n\n    margin:24px 0 0 0 !important;\n    padding:18px 0 0 0 !important;\n\n    border-top:1px solid rgba(16,55,44,.24) !important;\n}\n\nhtml body #ut-final-mobile .ut-phone{\n    display:flex !important;\n\n    width:100% !important;\n    min-height:66px !important;\n\n    align-items:center !important;\n    justify-content:flex-start !important;\n\n    gap:14px !important;\n\n    margin:0 !important;\n    padding:0 17px !important;\n\n    color:#ffcc11 !important;\n\n    background:linear-gradient(\n        135deg,\n        #17483a,\n        #0d2d25\n    ) !important;\n\n    border:1px solid #10372c !important;\n    border-radius:15px !important;\n\n    text-decoration:none !important;\n\n    box-shadow:0 8px 22px rgba(0,0,0,.16) !important;\n}\n\nhtml body #ut-final-mobile .ut-phone-icon{\n    display:flex !important;\n\n    width:40px !important;\n    min-width:40px !important;\n    height:40px !important;\n\n    align-items:center !important;\n    justify-content:center !important;\n\n    color:#10372c !important;\n    background:#ffcc11 !important;\n\n    border-radius:50% !important;\n\n    font-family:Arial,sans-serif !important;\n    font-size:21px !important;\n}\n\nhtml body #ut-final-mobile .ut-phone-text{\n    display:flex !important;\n\n    flex-direction:column !important;\n    align-items:flex-start !important;\n\n    gap:2px !important;\n}\n\nhtml body #ut-final-mobile .ut-phone-text small{\n    display:block !important;\n\n    color:rgba(255,255,255,.75) !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:10px !important;\n    font-weight:700 !important;\n\n    letter-spacing:.8px !important;\n}\n\nhtml body #ut-final-mobile .ut-phone-text strong{\n    display:block !important;\n\n    color:#ffcc11 !important;\n\n    font-family:Montserrat,Arial,sans-serif !important;\n    font-size:18px !important;\n    font-weight:800 !important;\n\n    letter-spacing:.5px !important;\n}\n\n\n/* =========================================================\n   TABLET\n========================================================= */\n\n@media(max-width:1250px) and (min-width:951px){\n\n    html body #ut-final-menu .ut-inner{\n        padding:0 18px !important;\n        gap:12px !important;\n    }\n\n    html body #ut-final-menu .ut-logo{\n        width:205px !important;\n        min-width:205px !important;\n        max-width:205px !important;\n    }\n\n    html body #ut-final-menu .ut-logo img{\n        width:195px !important;\n        min-width:195px !important;\n        max-width:195px !important;\n    }\n\n    html body #ut-final-menu .ut-nav{\n        gap:2px !important;\n    }\n\n    html body #ut-final-menu .ut-link{\n        padding:0 8px !important;\n        font-size:13px !important;\n    }\n\n    html body #ut-final-menu .ut-dropdown-parent > .ut-link{\n        padding-right:24px !important;\n    }\n}\n\n\n/* =========================================================\n   MOBİL\n========================================================= */\n\n@media(max-width:950px){\n\n    html body #ut-final-menu .ut-inner{\n        min-height:74px !important;\n        height:74px !important;\n\n        padding:0 12px !important;\n\n        justify-content:space-between !important;\n    }\n\n    html body #ut-final-menu .ut-nav{\n        display:none !important;\n    }\n\n    html body #ut-final-menu .ut-logo{\n        width:190px !important;\n        min-width:190px !important;\n        max-width:190px !important;\n\n        height:60px !important;\n    }\n\n    html body #ut-final-menu .ut-logo img{\n        width:190px !important;\n        min-width:190px !important;\n        max-width:190px !important;\n\n        height:60px !important;\n        min-height:60px !important;\n        max-height:60px !important;\n    }\n\n    html body #ut-final-menu .ut-toggle{\n        display:flex !important;\n    }\n}\n\n@media(max-width:480px){\n\n    html body #ut-final-menu .ut-logo{\n        width:165px !important;\n        min-width:165px !important;\n        max-width:165px !important;\n    }\n\n    html body #ut-final-menu .ut-logo img{\n        width:165px !important;\n        min-width:165px !important;\n        max-width:165px !important;\n\n        height:55px !important;\n        min-height:55px !important;\n        max-height:55px !important;\n    }\n}\n\nhtml body.ut-final-lock{\n    overflow:hidden !important;\n}\n\n\n/* =========================================================\n   SITEJET FIXED MENU GARANTİSİ\n   Sticky yerine viewport'a bağlı fixed menü\n========================================================= */\n\nhtml body #ut-final-menu{\n    position:fixed !important;\n    top:0 !important;\n    left:0 !important;\n    right:0 !important;\n    width:100% !important;\n    z-index:2147482500 !important;\n}\n\n\nhtml body #ut-final-menu.ut-scroll-hidden{\n    transform:translate3d(0,-112%,0) !important;\n}\n\nhtml body #ut-final-menu.ut-scroll-visible{\n    transform:translate3d(0,0,0) !important;\n}\n\n\n/* V3.2 - SITEJET MOBİL BOŞLUK FIX\n   Sabit menü için yer body padding ile ayrılır; HTML bloğu boş yükseklik üretmez. */\nhtml body.ut-final-menu-page,\nhtml body:has(#ut-final-menu){\n    padding-top:96px !important;\n}\n\n@media(max-width:950px){\n    html body.ut-final-menu-page,\n    html body:has(#ut-final-menu){\n        padding-top:74px !important;\n    }\n}\n\n@media(max-width:480px){\n    html body.ut-final-menu-page,\n    html body:has(#ut-final-menu){\n        padding-top:74px !important;\n    }\n}\n\nhtml body #ut-final-menu{\n    margin:0 !important;\n}\n\n";
  (document.head || document.documentElement).appendChild(style);

  var searchStyle = document.createElement("style");
  searchStyle.id = "ut-mobile-site-search-style";
  searchStyle.textContent = `
html body #ut-final-mobile .ut-site-search{
    display:block !important;
    width:100% !important;
    margin:0 0 14px 0 !important;
    padding:0 !important;
    font-family:Montserrat,Arial,sans-serif !important;
}
html body #ut-final-mobile .ut-site-search-box{
    position:relative !important;
    display:flex !important;
    width:100% !important;
    align-items:center !important;
}
html body #ut-final-mobile .ut-site-search-icon{
    position:absolute !important;
    left:14px !important;
    top:50% !important;
    transform:translateY(-50%) !important;
    width:20px !important;
    height:20px !important;
    color:#10372c !important;
    pointer-events:none !important;
    z-index:2 !important;
}
html body #ut-final-mobile #ut-site-search-input{
    display:block !important;
    width:100% !important;
    height:50px !important;
    min-height:50px !important;
    margin:0 !important;
    padding:0 44px 0 43px !important;
    color:#10372c !important;
    background:#fff !important;
    border:2px solid rgba(16,55,44,.22) !important;
    border-radius:12px !important;
    outline:none !important;
    box-shadow:0 7px 18px rgba(16,55,44,.08) !important;
    font-family:Montserrat,Arial,sans-serif !important;
    font-size:15px !important;
    font-weight:650 !important;
    line-height:20px !important;
    -webkit-appearance:none !important;
    appearance:none !important;
}
html body #ut-final-mobile #ut-site-search-input::placeholder{
    color:#66766f !important;
    opacity:1 !important;
}
html body #ut-final-mobile #ut-site-search-input:focus{
    border-color:#10372c !important;
    box-shadow:0 0 0 3px rgba(16,55,44,.11),0 8px 20px rgba(16,55,44,.10) !important;
}
html body #ut-final-mobile .ut-site-search-clear{
    position:absolute !important;
    right:8px !important;
    top:50% !important;
    transform:translateY(-50%) !important;
    display:none !important;
    width:34px !important;
    height:34px !important;
    align-items:center !important;
    justify-content:center !important;
    margin:0 !important;
    padding:0 !important;
    color:#10372c !important;
    background:rgba(16,55,44,.08) !important;
    border:0 !important;
    border-radius:50% !important;
    font-family:Arial,sans-serif !important;
    font-size:22px !important;
    line-height:1 !important;
    cursor:pointer !important;
    z-index:3 !important;
}
html body #ut-final-mobile .ut-site-search-clear.active{
    display:flex !important;
}
html body #ut-final-mobile .ut-site-search-results{
    display:none !important;
    width:100% !important;
    max-height:44vh !important;
    margin:8px 0 0 0 !important;
    padding:7px !important;
    overflow-y:auto !important;
    overscroll-behavior:contain !important;
    background:#fffdf4 !important;
    border:1px solid rgba(16,55,44,.17) !important;
    border-radius:12px !important;
    box-shadow:0 12px 30px rgba(16,55,44,.14) !important;
}
html body #ut-final-mobile .ut-site-search-results.active{
    display:block !important;
}
html body #ut-final-mobile .ut-site-search-state{
    display:block !important;
    padding:13px 12px !important;
    color:#53625b !important;
    font-size:13px !important;
    font-weight:650 !important;
    line-height:1.55 !important;
}
html body #ut-final-mobile .ut-site-result{
    display:block !important;
    width:100% !important;
    min-height:0 !important;
    margin:0 0 5px 0 !important;
    padding:12px 12px 11px !important;
    color:#10372c !important;
    background:#fff !important;
    border:1px solid rgba(16,55,44,.09) !important;
    border-radius:9px !important;
    text-decoration:none !important;
}
html body #ut-final-mobile .ut-site-result:last-child{
    margin-bottom:0 !important;
}
html body #ut-final-mobile .ut-site-result::before{
    display:none !important;
}
html body #ut-final-mobile .ut-site-result strong{
    display:block !important;
    margin:0 0 5px 0 !important;
    color:#10372c !important;
    font-size:14px !important;
    font-weight:850 !important;
    line-height:1.35 !important;
}
html body #ut-final-mobile .ut-site-result span{
    display:-webkit-box !important;
    -webkit-box-orient:vertical !important;
    -webkit-line-clamp:2 !important;
    overflow:hidden !important;
    color:#64716b !important;
    font-size:12px !important;
    font-weight:550 !important;
    line-height:1.5 !important;
}
html body #ut-final-mobile .ut-site-result small{
    display:block !important;
    margin-top:6px !important;
    color:#947126 !important;
    font-size:10.5px !important;
    font-weight:750 !important;
    line-height:1.3 !important;
    word-break:break-word !important;
}
`;
  (document.head || document.documentElement).appendChild(searchStyle);

  var desktopSearchStyle = document.createElement("style");
  desktopSearchStyle.id = "ut-desktop-site-search-style";
  desktopSearchStyle.textContent = `
html body #ut-final-menu .ut-search-desktop-item{
    display:flex !important;
    align-items:center !important;
}
html body #ut-final-menu .ut-search-desktop-toggle{
    display:flex !important;
    width:44px !important;
    min-width:44px !important;
    height:44px !important;
    align-items:center !important;
    justify-content:center !important;
    margin:0 !important;
    padding:0 !important;
    color:#10372c !important;
    background:rgba(255,255,255,.22) !important;
    border:1px solid rgba(16,55,44,.16) !important;
    border-radius:11px !important;
    cursor:pointer !important;
    transition:background .2s ease, transform .2s ease !important;
}
html body #ut-final-menu .ut-search-desktop-toggle:hover,
html body #ut-final-menu .ut-search-desktop-toggle.active{
    background:#10372c !important;
    color:#ffcc11 !important;
    transform:translateY(-2px) !important;
}
html body #ut-final-menu .ut-search-desktop-toggle svg{
    width:21px !important;
    height:21px !important;
    display:block !important;
}
html body #ut-desktop-search-panel{
    position:fixed !important;
    top:96px !important;
    left:50% !important;
    transform:translate(-50%,-8px) !important;
    display:block !important;
    width:min(760px,calc(100vw - 40px)) !important;
    margin:0 !important;
    padding:0 !important;
    opacity:0 !important;
    visibility:hidden !important;
    pointer-events:none !important;
    z-index:2147482600 !important;
    transition:opacity .2s ease, transform .2s ease, visibility .2s ease !important;
    font-family:Montserrat,Arial,sans-serif !important;
}
html body #ut-desktop-search-panel.active{
    opacity:1 !important;
    visibility:visible !important;
    pointer-events:auto !important;
    transform:translate(-50%,0) !important;
}
html body #ut-desktop-search-panel .ut-desktop-search-card{
    width:100% !important;
    padding:16px !important;
    background:#fffdf4 !important;
    border:2px solid #10372c !important;
    border-top:4px solid #ffcc11 !important;
    border-radius:0 0 17px 17px !important;
    box-shadow:0 22px 55px rgba(0,0,0,.24) !important;
}
html body #ut-desktop-search-panel .ut-desktop-search-title{
    display:block !important;
    margin:0 0 10px !important;
    color:#10372c !important;
    font-size:13px !important;
    font-weight:850 !important;
    letter-spacing:.4px !important;
}
html body #ut-desktop-search-panel .ut-desktop-search-box{
    position:relative !important;
    display:flex !important;
    align-items:center !important;
    width:100% !important;
}
html body #ut-desktop-search-panel .ut-desktop-search-icon{
    position:absolute !important;
    left:16px !important;
    top:50% !important;
    transform:translateY(-50%) !important;
    width:21px !important;
    height:21px !important;
    color:#10372c !important;
    pointer-events:none !important;
}
html body #ut-desktop-search-input{
    width:100% !important;
    height:52px !important;
    margin:0 !important;
    padding:0 50px 0 48px !important;
    color:#10372c !important;
    background:#fff !important;
    border:1.5px solid rgba(16,55,44,.28) !important;
    border-radius:12px !important;
    outline:none !important;
    font-family:Montserrat,Arial,sans-serif !important;
    font-size:16px !important;
    font-weight:650 !important;
}
html body #ut-desktop-search-input:focus{
    border-color:#10372c !important;
    box-shadow:0 0 0 3px rgba(16,55,44,.10) !important;
}
html body #ut-desktop-search-clear{
    position:absolute !important;
    right:8px !important;
    top:50% !important;
    transform:translateY(-50%) !important;
    display:none !important;
    width:35px !important;
    height:35px !important;
    align-items:center !important;
    justify-content:center !important;
    padding:0 !important;
    color:#10372c !important;
    background:rgba(16,55,44,.08) !important;
    border:0 !important;
    border-radius:50% !important;
    font-size:22px !important;
    cursor:pointer !important;
}
html body #ut-desktop-search-clear.active{
    display:flex !important;
}
html body #ut-desktop-search-results{
    display:none !important;
    width:100% !important;
    max-height:52vh !important;
    margin:10px 0 0 !important;
    padding:7px !important;
    overflow-y:auto !important;
    background:#fff !important;
    border:1px solid rgba(16,55,44,.13) !important;
    border-radius:12px !important;
}
html body #ut-desktop-search-results.active{
    display:block !important;
}
html body #ut-desktop-search-results .ut-desktop-search-state{
    display:block !important;
    padding:14px !important;
    color:#53625b !important;
    font-size:14px !important;
    font-weight:650 !important;
}
html body #ut-desktop-search-results .ut-desktop-search-result{
    display:block !important;
    width:100% !important;
    margin:0 0 5px !important;
    padding:12px 13px !important;
    color:#10372c !important;
    background:#fffdf7 !important;
    border:1px solid rgba(16,55,44,.09) !important;
    border-radius:9px !important;
    text-decoration:none !important;
    transition:background .18s ease, transform .18s ease !important;
}
html body #ut-desktop-search-results .ut-desktop-search-result:hover{
    background:#fff5c8 !important;
    transform:translateX(3px) !important;
}
html body #ut-desktop-search-results .ut-desktop-search-result strong{
    display:block !important;
    margin:0 0 4px !important;
    color:#10372c !important;
    font-size:14px !important;
    font-weight:850 !important;
}
html body #ut-desktop-search-results .ut-desktop-search-result span{
    display:block !important;
    color:#64716b !important;
    font-size:12px !important;
    line-height:1.5 !important;
}
html body #ut-desktop-search-results .ut-desktop-search-result small{
    display:block !important;
    margin-top:5px !important;
    color:#947126 !important;
    font-size:10.5px !important;
    font-weight:750 !important;
}
@media(max-width:950px){
    html body #ut-final-menu .ut-search-desktop-item,
    html body #ut-desktop-search-panel{
        display:none !important;
    }
}
`;
  (document.head || document.documentElement).appendChild(desktopSearchStyle);

  var mount = document.createElement("div");
  mount.id = "ut-merkezi-menu-mount";
  mount.innerHTML = "<div id=\"ut-final-menu\" data-version=\"3.6\">\n\n    <div class=\"ut-inner\">\n\n        <a class=\"ut-logo\" href=\"https://www.umreturk.com/\" aria-label=\"UmreTürk Ana Sayfa\">\n            <img src=\"https://cdn1.site-media.eu/images/0/27271215/LLLL2-01-N4jlvsCX-CyRRfo0EbBs-g-xj4AdZxQIiC_B9sJbMsDJQ.png\" alt=\"UmreTürk\">\n        </a>\n\n\n        <ul class=\"ut-nav\">\n\n            <li class=\"ut-item\">\n                <a class=\"ut-link ut-tour\" href=\"https://www.umreturk.com/guncel-turlar/\">\n                    GÜNCEL TURLAR\n                </a>\n            </li>\n\n\n            \n\n            <li class=\"ut-item ut-dropdown-parent\">\n\n                <a class=\"ut-link\" href=\"https://www.umreturk.com/hac/\">\n                    HAC\n                </a>\n\n                <ul class=\"ut-dropdown\">\n\n                    <li>\n                        <a href=\"https://www.umreturk.com/hac/\">\n                            Hac Hakkında\n                        </a>\n                    </li>\n\n                    <li>\n                        <a href=\"https://www.umreturk.com/haci-kime-denir/\">\n                            Hacı Kime Denir?\n                        </a>\n                    </li>\n\n                    <li>\n                        <a href=\"https://www.umreturk.com/hac-ile-umre-arasindaki-fark-nedir/\">\n                            Hac ile Umre Arasındaki Fark\n                        </a>\n                    </li>\n\n                </ul>\n\n            </li>\n\n\n            \n\n            <li class=\"ut-item ut-dropdown-parent ut-blog-parent ut-umre-parent\">\n\n                <a class=\"ut-link\" href=\"https://www.umreturk.com/umre/\">\n                    UMRE\n                </a>\n\n                <div class=\"ut-mega-menu ut-umre-mega\" id=\"ut-desktop-umre-mega\" aria-label=\"UmreTürk Umre Mega Menü\">\n\n                    <div class=\"ut-mega-col\">\n                        <span class=\"ut-mega-title\">UMRE &amp; SİYER</span>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/umre/\">Umre Hakkında</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/bolgelerimiz/\">Bölgelerimiz</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/siyer-umresi/\">Siyer Umresi</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/siyer-umresi-rotasi\">Siyer Umresi Rotası</a>\n                    </div>\n\n                    <div class=\"ut-mega-col\">\n                        <span class=\"ut-mega-title\">ZİYARET &amp; İBADET</span>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/kabenin-tarihi-kabeyi-taniyalim/\">Kâbe’yi Tanıyalım</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/tavaf-ve-say-dualari/\">Tavaf ve Sa’y Duaları</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/mekke-i-muekerremme-ziyaret-yerleri/\">Mekke Ziyaret Yerleri</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/medine-i-munevveredeki-ziyaret-yerler/\">Medine Ziyaret Yerleri</a>\n                    </div>\n\n                    <div class=\"ut-mega-col\">\n                        <span class=\"ut-mega-title\">SİYERLİ UMRE PROGRAMLARI</span>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/guncel-turlar/\">Güncel Umre Turları</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/10-gunluk-siyerli-umre-programi/\">10 Günlük Siyerli Umre</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/14-gunluk-siyerli-umre-programi/\">14 Günlük Siyerli Umre</a>\n                        <a class=\"ut-mega-link\" href=\"https://www.umreturk.com/20-gunluk-siyerli-umre-programi/\">20 Günlük Siyerli Umre</a>\n                    </div>\n\n                </div>\n\n            </li>\n\n\n            <li class=\"ut-item\">\n                <a class=\"ut-link\" href=\"https://www.umreturk.com/belgelerimiz/\">\n                    BELGELERİMİZ\n                </a>\n            </li>\n\n\n            \n\n            <li class=\"ut-item ut-dropdown-parent\">\n\n                <a class=\"ut-link\" href=\"#\">\n                    OTELLERİMİZ\n                </a>\n\n                <ul class=\"ut-dropdown\">\n\n                    <li>\n                        <a href=\"https://www.umreturk.com/mekke\">\n                            Mekke\n                        </a>\n                    </li>\n\n                    <li>\n                        <a href=\"https://www.umreturk.com/medine\">\n                            Medine\n                        </a>\n                    </li>\n\n                </ul>\n\n            </li>\n\n\n            <li class=\"ut-item\">\n                <a class=\"ut-link\" href=\"https://www.umreturk.com/galeri/\">\n                    GALERİ\n                </a>\n            </li>\n\n\n            \n\n            <li class=\"ut-item ut-dropdown-parent ut-blog-parent\">\n\n                <a class=\"ut-link\" href=\"https://www.umreturk.com/blog/\">\n                    BLOG\n                </a>\n\n                <div class=\"ut-mega-menu\" id=\"ut-desktop-blog-mega\" aria-label=\"UmreTürk Blog Mega Menü\">\n                \n\n                </div>\n\n            </li>\n\n\n            <li class=\"ut-item ut-search-desktop-item\">\n                <button class=\"ut-search-desktop-toggle\" id=\"ut-desktop-search-toggle\" type=\"button\" aria-label=\"UmreTürk'te ara\" aria-expanded=\"false\" aria-controls=\"ut-desktop-search-panel\">\n                    <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                        <circle cx=\"10.8\" cy=\"10.8\" r=\"6.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></circle>\n                        <path d=\"M15.5 15.5l4.2 4.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"></path>\n                    </svg>\n                </button>\n            </li>\n\n\n            <li class=\"ut-item\">\n                <a class=\"ut-link\" href=\"https://www.umreturk.com/iletisim/\">\n                    İLETİŞİM\n                </a>\n            </li>\n\n        </ul>\n\n\n        <button class=\"ut-toggle\" id=\"ut-final-toggle\" type=\"button\" aria-label=\"Menüyü aç\">\n\n            <span class=\"ut-bars\">\n                <span></span>\n                <span></span>\n                <span></span>\n            </span>\n\n        </button>\n\n    </div>\n\n</div>\n\n\n<div id=\"ut-desktop-search-panel\" aria-hidden=\"true\">\n    <div class=\"ut-desktop-search-card\">\n        <span class=\"ut-desktop-search-title\">UMRETÜRK SİTE İÇİ ARAMA</span>\n        <div class=\"ut-desktop-search-box\">\n            <svg class=\"ut-desktop-search-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                <circle cx=\"11\" cy=\"11\" r=\"6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></circle>\n                <path d=\"M16 16l4.2 4.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"></path>\n            </svg>\n            <input id=\"ut-desktop-search-input\" type=\"search\" autocomplete=\"off\" spellcheck=\"false\" placeholder=\"UmreTürk’te ne arıyorsunuz?\" aria-label=\"UmreTürk sitesinde ara\" aria-controls=\"ut-desktop-search-results\">\n            <button id=\"ut-desktop-search-clear\" type=\"button\" aria-label=\"Aramayı temizle\">×</button>\n        </div>\n        <div id=\"ut-desktop-search-results\" role=\"listbox\" aria-live=\"polite\"></div>\n    </div>\n</div>\n\n\n<div id=\"ut-final-overlay\"></div>\n\n\n<div id=\"ut-final-mobile\">\n\n    <div class=\"ut-mobile-head\">\n\n        <img class=\"ut-mobile-logo\" src=\"https://cdn1.site-media.eu/images/0/27271215/LLLL2-01-N4jlvsCX-CyRRfo0EbBs-g-xj4AdZxQIiC_B9sJbMsDJQ.png\" alt=\"UmreTürk\">\n\n        <button class=\"ut-close\" id=\"ut-final-close\" type=\"button\" aria-label=\"Menüyü kapat\">\n            ×\n        </button>\n\n    </div>\n\n\n    <div class=\"ut-site-search\" role=\"search\" aria-label=\"UmreTürk site içi arama\">\n        <div class=\"ut-site-search-box\">\n            <svg class=\"ut-site-search-icon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                <circle cx=\"11\" cy=\"11\" r=\"6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></circle>\n                <path d=\"M16 16l4.2 4.2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"></path>\n            </svg>\n            <input id=\"ut-site-search-input\" type=\"search\" inputmode=\"search\" autocomplete=\"off\" spellcheck=\"false\" placeholder=\"UmreTürk’te ara…\" aria-label=\"UmreTürk sitesinde ara\" aria-controls=\"ut-site-search-results\" aria-autocomplete=\"list\">\n            <button class=\"ut-site-search-clear\" id=\"ut-site-search-clear\" type=\"button\" aria-label=\"Aramayı temizle\">×</button>\n        </div>\n        <div class=\"ut-site-search-results\" id=\"ut-site-search-results\" role=\"listbox\" aria-live=\"polite\"></div>\n    </div>\n\n\n    <a class=\"ut-mobile-link ut-mobile-tour\" href=\"https://www.umreturk.com/guncel-turlar/\">\n        GÜNCEL TURLAR\n    </a>\n\n\n    \n\n    <button class=\"ut-mobile-parent\" data-target=\"ut-mobile-hac\" type=\"button\">\n        HAC ▾\n    </button>\n\n    <div class=\"ut-mobile-sub\" id=\"ut-mobile-hac\">\n\n        <a href=\"https://www.umreturk.com/hac/\">\n            Hac Hakkında\n        </a>\n\n        <a href=\"https://www.umreturk.com/haci-kime-denir/\">\n            Hacı Kime Denir?\n        </a>\n\n        <a href=\"https://www.umreturk.com/hac-ile-umre-arasindaki-fark-nedir/\">\n            Hac ile Umre Arasındaki Fark\n        </a>\n\n    </div>\n\n\n    \n\n    <button class=\"ut-mobile-parent\" data-target=\"ut-mobile-umre\" type=\"button\">\n        UMRE ▾\n    </button>\n\n    <div class=\"ut-mobile-sub\" id=\"ut-mobile-umre\">\n\n        <div class=\"ut-mobile-blog-group\">\n            <button type=\"button\" class=\"ut-mobile-blog-cat\" aria-expanded=\"false\" aria-controls=\"ut-mobile-umre-group-0\">UMRE &amp; SİYER</button>\n            <div class=\"ut-mobile-blog-items\" id=\"ut-mobile-umre-group-0\">\n                <a href=\"https://www.umreturk.com/umre/\">Umre Hakkında</a>\n                <a href=\"https://www.umreturk.com/bolgelerimiz/\">Bölgelerimiz</a>\n                <a href=\"https://www.umreturk.com/siyer-umresi/\">Siyer Umresi</a>\n                <a href=\"https://www.umreturk.com/siyer-umresi-rotasi\">Siyer Umresi Rotası</a>\n            </div>\n        </div>\n\n        <div class=\"ut-mobile-blog-group\">\n            <button type=\"button\" class=\"ut-mobile-blog-cat\" aria-expanded=\"false\" aria-controls=\"ut-mobile-umre-group-1\">ZİYARET &amp; İBADET</button>\n            <div class=\"ut-mobile-blog-items\" id=\"ut-mobile-umre-group-1\">\n                <a href=\"https://www.umreturk.com/kabenin-tarihi-kabeyi-taniyalim/\">Kâbe’yi Tanıyalım</a>\n                <a href=\"https://www.umreturk.com/tavaf-ve-say-dualari/\">Tavaf ve Sa’y Duaları</a>\n                <a href=\"https://www.umreturk.com/mekke-i-muekerremme-ziyaret-yerleri/\">Mekke Ziyaret Yerleri</a>\n                <a href=\"https://www.umreturk.com/medine-i-munevveredeki-ziyaret-yerler/\">Medine Ziyaret Yerleri</a>\n            </div>\n        </div>\n\n        <div class=\"ut-mobile-blog-group\">\n            <button type=\"button\" class=\"ut-mobile-blog-cat\" aria-expanded=\"false\" aria-controls=\"ut-mobile-umre-group-2\">SİYERLİ UMRE PROGRAMLARI</button>\n            <div class=\"ut-mobile-blog-items\" id=\"ut-mobile-umre-group-2\">\n                <a href=\"https://www.umreturk.com/guncel-turlar/\">Güncel Umre Turları</a>\n                <a href=\"https://www.umreturk.com/10-gunluk-siyerli-umre-programi/\">10 Günlük Siyerli Umre</a>\n                <a href=\"https://www.umreturk.com/14-gunluk-siyerli-umre-programi/\">14 Günlük Siyerli Umre</a>\n                <a href=\"https://www.umreturk.com/20-gunluk-siyerli-umre-programi/\">20 Günlük Siyerli Umre</a>\n            </div>\n        </div>\n\n    </div>\n\n\n    <a class=\"ut-mobile-link\" href=\"https://www.umreturk.com/belgelerimiz/\">\n        BELGELERİMİZ\n    </a>\n\n\n    \n\n    <button class=\"ut-mobile-parent\" data-target=\"ut-mobile-oteller\" type=\"button\">\n        OTELLERİMİZ ▾\n    </button>\n\n    <div class=\"ut-mobile-sub\" id=\"ut-mobile-oteller\">\n\n        <a href=\"https://www.umreturk.com/mekke\">\n            Mekke\n        </a>\n\n        <a href=\"https://www.umreturk.com/medine\">\n            Medine\n        </a>\n\n    </div>\n\n\n    <a class=\"ut-mobile-link\" href=\"https://www.umreturk.com/galeri/\">\n        GALERİ\n    </a>\n\n\n    \n\n    <button class=\"ut-mobile-parent\" data-target=\"ut-mobile-blog\" type=\"button\">\n        BLOG ▾\n    </button>\n\n    <div class=\"ut-mobile-sub\" id=\"ut-mobile-blog\">\n    \n\n    </div>\n\n\n    <a class=\"ut-mobile-link\" href=\"https://www.umreturk.com/iletisim/\">\n        İLETİŞİM\n    </a>\n\n\n    \n\n    <div class=\"ut-contact-area\">\n\n        <a class=\"ut-phone\" href=\"tel:+905434417271\" aria-label=\"UmreTürk 0543 441 72 71 numarasını ara\">\n\n            <span class=\"ut-phone-icon\">\n                ☎\n            </span>\n\n            <span class=\"ut-phone-text\">\n\n                <small>\n                    HEMEN ARAYIN\n                </small>\n\n                <strong>\n                    0543 441 72 71\n                </strong>\n\n            </span>\n\n        </a>\n\n    </div>\n\n</div>";
  var current = document.currentScript;
  if (current && current.parentNode) {
    current.parentNode.insertBefore(mount, current);
  } else {
    (document.body || document.documentElement).insertBefore(mount, (document.body || document.documentElement).firstChild);
  }



(function(){

if(document.body){ document.body.classList.add("ut-final-menu-page"); }


/* =========================================================
   BLOG MEGA MENÜ VERİLERİ
   YENİ BLOG GELİNCE SADECE İLGİLİ KATEGORİYE EKLE
========================================================= */

var blogKategorileri = [
    {
        kategori:"UMREYE BAŞLARKEN",
        yazilar:[
            { baslik:"Umre Nedir?", link:"https://www.umreturk.com/umre-nedir/" },
            { baslik:"İlk Defa Umreye Gidecekler Ne Yapmalı?", link:"https://www.umreturk.com/ilk-defa-umreye-gidecekler-ne-yapmali" },
            { baslik:"Umre Öncesi Merak Edilen Sorular", link:"https://www.umreturk.com/umre-oncesi-merak-edilen-sorular" },
            { baslik:"Hac ile Umre Arasındaki Fark Nedir?", link:"https://www.umreturk.com/hac-ile-umre-arasindaki-fark-nedir/" }
        ]
    },
    {
        kategori:"HAZIRLIK & AİLE",
        yazilar:[
            { baslik:"Umre Vizesi Nasıl Alınır?", link:"https://www.umreturk.com/umre-vizesi-nasil-alinir" },
            { baslik:"Umreye Giderken Ne Alınır?", link:"https://www.umreturk.com/umreye-giderken-ne-alinir" },
            { baslik:"Kadınlar Umreye Giderken Nasıl Giyinmeli?", link:"https://www.umreturk.com/kadinlar-umreye-giderken-nasil-giyinmeli" },
            { baslik:"Çocuklarla Umre", link:"https://www.umreturk.com/cocuklarla-umre/" }
        ]
    },
    {
        kategori:"TUR & KONAKLAMA",
        yazilar:[
            { baslik:"2026 Umre Turu Seçme Rehberi", link:"https://www.umreturk.com/2026-umre-turu-secerken-nelere-dikkat-edilmeli/" },
            { baslik:"Umre Fiyatına Neler Dahil?", link:"https://www.umreturk.com/umre-fiyat-na-neler-dahil" },
            { baslik:"Umre Turu Kaç Gün Olmalı?", link:"https://www.umreturk.com/umre-turu-kac-guen-olmal" },
            { baslik:"Mekke'de Servisli Otel Ne Demek?", link:"https://www.umreturk.com/mekke-22" }
        ]
    },
    {
        kategori:"İBADET & BİLGİ",
        yazilar:[
            { baslik:"İhram Yasakları Nelerdir?", link:"https://www.umreturk.com/ihram-yasaklari-nelerdir" },
            { baslik:"Kâbe’yi Tanıyalım", link:"https://www.umreturk.com/kabenin-tarihi-kabeyi-taniyalim/" },
            { baslik:"Hacı Kime Denir?", link:"https://www.umreturk.com/haci-kime-denir/" },
            { baslik:"2026 Dini Günler ve Kandil Tarihleri", link:"https://www.umreturk.com/2026-dini-gunler-kandil-tarihleri" }
        ]
    }
];


/* =========================================================
   MASAÜSTÜ MEGA MENÜYÜ OLUŞTUR
========================================================= */

var desktopBlogMega =
    document.getElementById(
        "ut-desktop-blog-mega"
    );

if(desktopBlogMega && desktopBlogMega.children.length === 0){

    blogKategorileri.forEach(function(kategori){

        var kolon = document.createElement("div");
        kolon.className = "ut-mega-col";

        var baslik = document.createElement("span");
        baslik.className = "ut-mega-title";
        baslik.textContent = kategori.kategori;

        kolon.appendChild(baslik);

        kategori.yazilar.forEach(function(yazi){

            var link = document.createElement("a");
            link.className = "ut-mega-link";
            link.href = yazi.link;
            link.textContent = yazi.baslik;

            kolon.appendChild(link);

        });

        desktopBlogMega.appendChild(kolon);

    });

    var footer = document.createElement("div");
    footer.className = "ut-mega-footer";

    var tumYazilar = document.createElement("a");
    tumYazilar.className = "ut-mega-all";
    tumYazilar.href = "https://www.umreturk.com/blog/";
    tumYazilar.textContent = "Tüm Umre Rehberi Yazıları →";

    footer.appendChild(tumYazilar);
    desktopBlogMega.appendChild(footer);
}


/* =========================================================
   MOBİL BLOG ACCORDION OLUŞTUR
========================================================= */

var mobileBlog =
    document.getElementById(
        "ut-mobile-blog"
    );

if(mobileBlog && mobileBlog.children.length === 0){

    blogKategorileri.forEach(function(kategori,index){

        var grup = document.createElement("div");
        grup.className = "ut-mobile-blog-group";

        var button = document.createElement("button");
        button.type = "button";
        button.className = "ut-mobile-blog-cat";
        button.textContent = kategori.kategori;
        button.setAttribute("aria-expanded","false");

        var items = document.createElement("div");
        items.className = "ut-mobile-blog-items";
        items.id = "ut-mobile-blog-group-" + index;

        button.setAttribute("aria-controls",items.id);

        kategori.yazilar.forEach(function(yazi){

            var link = document.createElement("a");
            link.href = yazi.link;
            link.textContent = yazi.baslik;

            items.appendChild(link);

        });

        grup.appendChild(button);
        grup.appendChild(items);
        mobileBlog.appendChild(grup);

    });

    var mobileAll = document.createElement("a");
    mobileAll.className = "ut-mobile-blog-all";
    mobileAll.href = "https://www.umreturk.com/blog/";
    mobileAll.textContent = "TÜM UMRE REHBERİ YAZILARI";

    mobileBlog.appendChild(mobileAll);
}


/* MOBİL UMRE + BLOG İÇ KATEGORİLER */

document
.querySelectorAll(
    "#ut-mobile-umre .ut-mobile-blog-cat, #ut-mobile-blog .ut-mobile-blog-cat"
)
.forEach(function(button){

    button.addEventListener(
        "click",
        function(){

            var hedefId = button.getAttribute("aria-controls");
            var hedef = document.getElementById(hedefId);
            var anaGrup = button.closest(".ut-mobile-sub");

            if(!hedef || !anaGrup){
                return;
            }

            anaGrup
            .querySelectorAll(".ut-mobile-blog-items")
            .forEach(function(other){

                if(other !== hedef){
                    other.classList.remove("active");
                }

            });

            anaGrup
            .querySelectorAll(".ut-mobile-blog-cat")
            .forEach(function(otherButton){

                if(otherButton !== button){
                    otherButton.classList.remove("active");
                    otherButton.setAttribute("aria-expanded","false");
                }

            });

            var aciliyor = !hedef.classList.contains("active");

            hedef.classList.toggle("active",aciliyor);
            button.classList.toggle("active",aciliyor);
            button.setAttribute(
                "aria-expanded",
                aciliyor ? "true" : "false"
            );

        }
    );

});



/* =========================================================
   V15 FINAL - GARANTİLİ SITE İÇİ ARAMA
   1) Menü + 16 blog yazısı anında indekslenir.
   2) Sitemap ve sayfa içerikleri arka planda zenginleştirilir.
   3) Mobil ve masaüstü aynı arama motorunu kullanır.
========================================================= */

(function(){

    var SEARCH_CACHE_KEY = "ut_site_search_index_v15_1_final";
    var SEARCH_CACHE_TTL = 6 * 60 * 60 * 1000;

    var staticIndex = [];
    var enrichedIndex = null;
    var enrichmentPromise = null;

    function normalizeTR(value){
        return String(value || "")
            .toLocaleLowerCase("tr-TR")
            .normalize("NFD")
            .replace(/\p{M}+/gu,"")
            .replace(/ı/g,"i")
            .replace(/ğ/g,"g")
            .replace(/ü/g,"u")
            .replace(/ş/g,"s")
            .replace(/ö/g,"o")
            .replace(/ç/g,"c")
            .replace(/[^\p{L}\p{N}\s]+/gu," ")
            .replace(/\s+/g," ")
            .trim();
    }

    function escapeHTML(value){
        return String(value || "")
            .replace(/&/g,"&amp;")
            .replace(/</g,"&lt;")
            .replace(/>/g,"&gt;")
            .replace(/"/g,"&quot;")
            .replace(/'/g,"&#039;");
    }

    function canonicalUrl(raw){
        try{
            var u = new URL(raw,location.origin);
            if(u.hostname !== "www.umreturk.com" && u.hostname !== "umreturk.com"){
                return null;
            }
            u.protocol = location.protocol;
            u.host = location.host;
            u.hash = "";
            return u.href;
        }catch(e){
            return null;
        }
    }

    function makeItem(url,title,description,keywords){
        var cleanUrl = canonicalUrl(url);
        if(!cleanUrl) return null;

        title = String(title || "").replace(/\s+/g," ").trim();
        description = String(description || "").replace(/\s+/g," ").trim();
        keywords = String(keywords || "").replace(/\s+/g," ").trim();

        if(!title){
            try{
                title = decodeURIComponent(new URL(cleanUrl).pathname)
                    .replace(/^\/+|\/+$/g,"")
                    .replace(/[-_]+/g," ")
                    .trim() || "UmreTürk";
            }catch(e){
                title = "UmreTürk";
            }
        }

        return {
            url:cleanUrl,
            title:title,
            description:description,
            headings:title,
            body:"",
            searchable:normalizeTR(title+" "+description+" "+keywords+" "+cleanUrl),
            titleNorm:normalizeTR(title),
            descNorm:normalizeTR(description),
            headingsNorm:normalizeTR(title)
        };
    }

    function buildStaticIndex(){
        var byUrl = Object.create(null);

        function add(url,title,description,keywords){
            var item = makeItem(url,title,description,keywords);
            if(!item) return;

            if(!byUrl[item.url]){
                byUrl[item.url] = item;
                return;
            }

            var old = byUrl[item.url];
            if(title && old.title.length < String(title).length){
                old.title = String(title).trim();
                old.titleNorm = normalizeTR(old.title);
            }
            old.searchable += " " + normalizeTR(
                String(title||"")+" "+String(description||"")+" "+String(keywords||"")
            );
        }

        /* 16 BLOG YAZISI: arama için garanti kaynak */
        try{
            if(Array.isArray(blogKategorileri)){
                blogKategorileri.forEach(function(kategori){
                    (kategori.yazilar || []).forEach(function(yazi){
                        add(
                            yazi.link,
                            yazi.baslik,
                            kategori.kategori,
                            kategori.kategori+" umre rehberi blog"
                        );
                    });
                });
            }
        }catch(e){}

        /* Menüde görünen tüm bağlantılar */
        document.querySelectorAll(
            "#ut-final-menu a[href], #ut-final-mobile a[href]"
        ).forEach(function(a){
            add(
                a.href,
                String(a.textContent||"").replace(/\s+/g," ").trim(),
                "",
                "umreturk menü"
            );
        });

        /* Şu an açık olan sayfa */
        add(
            location.href,
            document.title || "",
            (document.querySelector('meta[name="description"]')||{}).content || "",
            "mevcut sayfa"
        );

        staticIndex = Object.keys(byUrl).map(function(url){
            return byUrl[url];
        });
    }

    function getCache(){
        try{
            var raw = localStorage.getItem(SEARCH_CACHE_KEY);
            if(!raw) return null;
            var cached = JSON.parse(raw);
            if(!cached || !Array.isArray(cached.items) || !cached.savedAt) return null;
            if(Date.now() - cached.savedAt > SEARCH_CACHE_TTL) return null;
            return cached.items;
        }catch(e){
            return null;
        }
    }

    function setCache(items){
        try{
            localStorage.setItem(
                SEARCH_CACHE_KEY,
                JSON.stringify({savedAt:Date.now(),items:items})
            );
        }catch(e){}
    }

    async function fetchText(url){
        var response = await fetch(url,{
            credentials:"same-origin",
            cache:"no-store"
        });
        if(!response.ok) throw new Error("HTTP "+response.status);
        return await response.text();
    }

    async function collectSitemapUrls(sitemapUrl,depth){
        depth = depth || 0;
        if(depth > 2) return [];

        var xmlText = await fetchText(sitemapUrl);
        var xml = new DOMParser().parseFromString(xmlText,"application/xml");
        if(xml.querySelector("parsererror")) throw new Error("Sitemap okunamadı");

        var locNodes = Array.from(xml.getElementsByTagName("loc"));

        var childMaps = locNodes.filter(function(node){
            var parent = node.parentNode;
            return parent &&
                String(parent.localName || parent.nodeName).toLowerCase() === "sitemap";
        }).map(function(node){
            return node.textContent.trim();
        }).filter(Boolean);

        if(childMaps.length){
            var nested = [];
            for(var i=0;i<childMaps.length;i++){
                try{
                    nested = nested.concat(
                        await collectSitemapUrls(childMaps[i],depth+1)
                    );
                }catch(e){}
            }
            return nested;
        }

        return locNodes.filter(function(node){
            var parent = node.parentNode;
            return parent &&
                String(parent.localName || parent.nodeName).toLowerCase() === "url";
        }).map(function(node){
            return node.textContent.trim();
        }).filter(Boolean);
    }

    function extractPage(html,url){
        var doc = new DOMParser().parseFromString(html,"text/html");

        doc.querySelectorAll(
            "script,style,noscript,svg,nav,footer,iframe,form"
        ).forEach(function(node){ node.remove(); });

        var title =
            (doc.querySelector("title")||{}).textContent ||
            (doc.querySelector("h1")||{}).textContent ||
            url;

        title = String(title||"").replace(/\s+/g," ").trim();

        var meta = doc.querySelector('meta[name="description"]');
        var description = meta ?
            String(meta.getAttribute("content")||"").replace(/\s+/g," ").trim() :
            "";

        var headings = Array.from(doc.querySelectorAll("h1,h2,h3"))
            .map(function(node){
                return String(node.textContent||"").replace(/\s+/g," ").trim();
            })
            .filter(Boolean)
            .join(" ");

        var root = doc.querySelector("main") ||
            doc.querySelector('[role="main"]') ||
            doc.body;

        var body = root ?
            String(root.textContent||"").replace(/\s+/g," ").trim() :
            "";

        if(body.length > 18000) body = body.slice(0,18000);

        return {
            url:url,
            title:title || "UmreTürk",
            description:description,
            headings:headings,
            body:body,
            searchable:normalizeTR(title+" "+description+" "+headings+" "+body),
            titleNorm:normalizeTR(title),
            descNorm:normalizeTR(description),
            headingsNorm:normalizeTR(headings)
        };
    }

    async function buildEnrichedIndex(){
        var cached = getCache();

        /* Cache varsa bile static sonuçları mutlaka içine birleştir. */
        var byUrl = Object.create(null);

        staticIndex.forEach(function(item){
            byUrl[item.url] = item;
        });

        if(cached && cached.length){
            cached.forEach(function(item){
                if(item && item.url){
                    byUrl[item.url] = item;
                }
            });
            enrichedIndex = Object.keys(byUrl).map(function(url){return byUrl[url];});
            return enrichedIndex;
        }

        var sitemapUrls = [];
        try{
            sitemapUrls = await collectSitemapUrls(
                location.origin+"/sitemap.xml",0
            );
        }catch(e){}

        var urls = [];
        var seen = Object.create(null);

        staticIndex.forEach(function(item){
            if(!seen[item.url]){
                seen[item.url] = true;
                urls.push(item.url);
            }
        });

        (sitemapUrls||[]).forEach(function(raw){
            var u = canonicalUrl(raw);
            if(!u) return;
            if(/\.(jpg|jpeg|png|gif|webp|svg|pdf|xml|mp4|mp3|zip|js|css)$/i.test(new URL(u).pathname)){
                return;
            }
            if(!seen[u]){
                seen[u] = true;
                urls.push(u);
                byUrl[u] = makeItem(u,"","","sitemap");
            }
        });

        var next = 0;
        var workers = [];
        var workerCount = Math.min(3,Math.max(1,urls.length));

        async function worker(){
            while(true){
                var i = next++;
                if(i >= urls.length) return;
                var url = urls[i];

                try{
                    var page = extractPage(await fetchText(url),url);

                    /* Static başlık/anahtarlar kaybolmasın */
                    if(byUrl[url]){
                        page.searchable += " " + byUrl[url].searchable;
                        if(
                            byUrl[url].title &&
                            (!page.title || /^umretürk/i.test(page.title))
                        ){
                            page.title = byUrl[url].title;
                            page.titleNorm = normalizeTR(page.title);
                        }
                    }

                    byUrl[url] = page;
                }catch(e){
                    if(!byUrl[url]){
                        byUrl[url] = makeItem(url,"","","sitemap");
                    }
                }
            }
        }

        for(var w=0;w<workerCount;w++){
            workers.push(worker());
        }

        await Promise.all(workers);

        enrichedIndex = Object.keys(byUrl).map(function(url){return byUrl[url];});
        setCache(enrichedIndex);
        return enrichedIndex;
    }

    function ensureEnrichment(){
        if(enrichedIndex && enrichedIndex.length){
            return Promise.resolve(enrichedIndex);
        }
        if(enrichmentPromise) return enrichmentPromise;

        enrichmentPromise = buildEnrichedIndex().finally(function(){
            enrichmentPromise = null;
        });

        return enrichmentPromise;
    }

    function scoreItem(item,tokens,fullQuery){
        var score = 0;

        if(item.titleNorm === fullQuery) score += 220;
        if(item.titleNorm.indexOf(fullQuery) >= 0) score += 120;
        if(item.headingsNorm.indexOf(fullQuery) >= 0) score += 60;
        if(item.descNorm.indexOf(fullQuery) >= 0) score += 45;
        if(item.searchable.indexOf(fullQuery) >= 0) score += 30;

        var allFound = true;

        tokens.forEach(function(token){
            var found = false;

            if(item.titleNorm.indexOf(token) >= 0){
                score += 38; found = true;
            }
            if(item.headingsNorm.indexOf(token) >= 0){
                score += 19; found = true;
            }
            if(item.descNorm.indexOf(token) >= 0){
                score += 14; found = true;
            }
            if(item.searchable.indexOf(token) >= 0){
                score += 6; found = true;
            }

            if(!found) allFound = false;
        });

        if(allFound && tokens.length > 1) score += 38;

        return score;
    }

    function snippet(item,tokens){
        var source = item.description || item.body || item.headings || "";
        var clean = String(source||"").replace(/\s+/g," ").trim();

        if(!clean) return "İlgili UmreTürk sayfasını açın.";

        var norm = normalizeTR(clean);
        var pos = -1;

        tokens.some(function(token){
            var p = norm.indexOf(token);
            if(p >= 0){ pos = p; return true; }
            return false;
        });

        if(pos < 0){
            return clean.slice(0,155)+(clean.length>155?"…":"");
        }

        var start = Math.max(0,pos-55);
        var end = Math.min(clean.length,start+180);

        return (start>0?"…":"")+
            clean.slice(start,end).trim()+
            (end<clean.length?"…":"");
    }

    function searchItems(query,index){
        var full = normalizeTR(query);
        if(full.length < 2) return [];

        var tokens = full.split(" ").filter(function(t){return t.length>=2;});

        return (index||[]).map(function(item){
            return {item:item,score:scoreItem(item,tokens,full)};
        }).filter(function(row){
            return row.score > 0;
        }).sort(function(a,b){
            return b.score-a.score;
        }).slice(0,8);
    }

    function renderInto(query,index,results,isDesktop){
        var ranked = searchItems(query,index);

        if(normalizeTR(query).length < 2){
            results.classList.remove("active");
            results.innerHTML = "";
            return;
        }

        if(!ranked.length){
            results.innerHTML =
                '<span class="'+
                (isDesktop?"ut-desktop-search-state":"ut-site-search-state")+
                '">Bu aramayla eşleşen bir sayfa bulunamadı.</span>';
            results.classList.add("active");
            return;
        }

        var tokens = normalizeTR(query).split(" ").filter(function(t){
            return t.length>=2;
        });

        results.innerHTML = ranked.map(function(row){
            var item = row.item;
            var path = "";

            try{ path = new URL(item.url).pathname; }
            catch(e){ path = item.url; }

            if(isDesktop){
                return '<a class="ut-desktop-search-result" role="option" href="'+
                    escapeHTML(item.url)+'">'+
                    '<strong>'+escapeHTML(item.title)+'</strong>'+
                    '<span>'+escapeHTML(snippet(item,tokens))+'</span>'+
                    '<small>'+escapeHTML(path)+'</small>'+
                    '</a>';
            }

            return '<a class="ut-site-result" role="option" href="'+
                escapeHTML(item.url)+'">'+
                '<strong>'+escapeHTML(item.title)+'</strong>'+
                '<span>'+escapeHTML(snippet(item,tokens))+'</span>'+
                '<small>'+escapeHTML(path)+'</small>'+
                '</a>';
        }).join("");

        results.classList.add("active");
    }

    function bindSearch(input,results,clearBtn,isDesktop){
        if(!input || !results) return;

        var timer = null;

        function run(){
            var q = input.value || "";

            if(clearBtn){
                clearBtn.classList.toggle("active",q.length>0);
            }

            /* GARANTİ: önce local static indeksle anında sonuç */
            var staticMatches = searchItems(q,staticIndex);
            renderInto(q,staticIndex,results,isDesktop);

            /*
             * KRİTİK V15.1 DÜZELTMESİ:
             * Hazır indeks sonuç bulduysa sitemap/arka plan indeksi
             * bu sonucu ASLA ezemez. Böylece "İhram" önce bulunup
             * 2 saniye sonra "bulunamadı"ya dönmez.
             */
            if(normalizeTR(q).length >= 2 && staticMatches.length === 0){
                ensureEnrichment().then(function(index){
                    if((input.value||"") === q){
                        renderInto(q,index,results,isDesktop);
                    }
                }).catch(function(){});
            }
        }

        input.addEventListener("focus",function(){
            ensureEnrichment().catch(function(){});
        });

        input.addEventListener("input",function(){
            clearTimeout(timer);
            timer = setTimeout(run,100);
        });

        input.addEventListener("keydown",function(event){
            if(event.key === "Escape"){
                if(input.value){
                    input.value = "";
                    if(clearBtn) clearBtn.classList.remove("active");
                    results.classList.remove("active");
                    results.innerHTML = "";
                    event.stopPropagation();
                }
            }
        });

        if(clearBtn){
            clearBtn.addEventListener("click",function(){
                input.value = "";
                clearBtn.classList.remove("active");
                results.classList.remove("active");
                results.innerHTML = "";
                input.focus();
            });
        }
    }

    buildStaticIndex();

    /* Mobil arama */
    bindSearch(
        document.getElementById("ut-site-search-input"),
        document.getElementById("ut-site-search-results"),
        document.getElementById("ut-site-search-clear"),
        false
    );

    /* Masaüstü arama */
    var desktopToggle = document.getElementById("ut-desktop-search-toggle");
    var desktopPanel = document.getElementById("ut-desktop-search-panel");
    var desktopInput = document.getElementById("ut-desktop-search-input");
    var desktopResults = document.getElementById("ut-desktop-search-results");
    var desktopClear = document.getElementById("ut-desktop-search-clear");

    bindSearch(
        desktopInput,
        desktopResults,
        desktopClear,
        true
    );

    function closeDesktopSearch(){
        if(!desktopPanel || !desktopToggle) return;
        desktopPanel.classList.remove("active");
        desktopPanel.setAttribute("aria-hidden","true");
        desktopToggle.classList.remove("active");
        desktopToggle.setAttribute("aria-expanded","false");
    }

    if(desktopToggle && desktopPanel){
        desktopToggle.addEventListener("click",function(event){
            event.stopPropagation();

            var opening = !desktopPanel.classList.contains("active");

            desktopPanel.classList.toggle("active",opening);
            desktopPanel.setAttribute("aria-hidden",opening?"false":"true");
            desktopToggle.classList.toggle("active",opening);
            desktopToggle.setAttribute("aria-expanded",opening?"true":"false");

            if(opening && desktopInput){
                setTimeout(function(){desktopInput.focus();},30);
                ensureEnrichment().catch(function(){});
            }
        });

        desktopPanel.addEventListener("click",function(event){
            event.stopPropagation();
        });

        document.addEventListener("click",closeDesktopSearch);

        document.addEventListener("keydown",function(event){
            if(event.key === "Escape"){
                closeDesktopSearch();
            }
        });

        desktopResults.addEventListener("click",function(event){
            if(event.target.closest("a")){
                closeDesktopSearch();
            }
        });
    }

    /* Arka planda hazırlık; kullanıcıyı bekletmez */
    setTimeout(function(){
        ensureEnrichment().catch(function(){});
    },1200);

})();



/* Mobil arama sonucuna dokununca panel kapanır */
document.addEventListener("click",function(event){
    var resultLink = event.target.closest("#ut-site-search-results a");
    if(resultLink && typeof closeMenu === "function"){
        closeMenu();
    }
});

/* =========================================================
   MOBİL PANEL
========================================================= */

var toggle =
    document.getElementById(
        "ut-final-toggle"
    );

var close =
    document.getElementById(
        "ut-final-close"
    );

var menu =
    document.getElementById(
        "ut-final-mobile"
    );

var overlay =
    document.getElementById(
        "ut-final-overlay"
    );


function openMenu(){

    if(menu){
        menu.classList.add("active");
    }

    if(overlay){
        overlay.classList.add("active");
    }

    document.body.classList.add(
        "ut-final-lock"
    );

}


function closeMenu(){

    if(menu){
        menu.classList.remove("active");
    }

    if(overlay){
        overlay.classList.remove("active");
    }

    document.body.classList.remove(
        "ut-final-lock"
    );

}


if(toggle){
    toggle.addEventListener(
        "click",
        openMenu
    );
}

if(close){
    close.addEventListener(
        "click",
        closeMenu
    );
}

if(overlay){
    overlay.addEventListener(
        "click",
        closeMenu
    );
}


/* =========================================================
   MOBİL ALT MENÜLER
========================================================= */

document
.querySelectorAll(
    "#ut-final-mobile .ut-mobile-parent"
)
.forEach(function(button){

    button.addEventListener(
        "click",
        function(){

            var hedef =
                button.getAttribute(
                    "data-target"
                );

            var submenu =
                document.getElementById(
                    hedef
                );

            if(!submenu){
                return;
            }

            document
            .querySelectorAll(
                "#ut-final-mobile .ut-mobile-sub"
            )
            .forEach(function(other){

                if(other !== submenu){
                    other.classList.remove(
                        "active"
                    );
                }

            });

            submenu.classList.toggle(
                "active"
            );

        }
    );

});


/* LINK TIKLANINCA KAPAT */

document
.querySelectorAll(
    "#ut-final-mobile a"
)
.forEach(function(link){

    link.addEventListener(
        "click",
        closeMenu
    );

});


/* ESC */

document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Escape"){
            closeMenu();
        }

    }
);


/* OTELLERİMİZ MASAÜSTÜ BAŞLIĞI SAYFAYI YUKARI ZIPLATMASIN */
document
.querySelectorAll(
    '#ut-final-menu .ut-dropdown-parent > a[href="#"]'
)
.forEach(function(link){

    link.addEventListener(
        "click",
        function(event){
            event.preventDefault();
        }
    );

});


/* =========================================================
   AKILLI MENÜ — SITEJET UYUMLU FINAL
   AŞAĞI KAYDIR = GİZLE
   YUKARI KAYDIR = GÖSTER
========================================================= */

var smartMenu = document.getElementById("ut-final-menu");
var lastScrollY = Math.max(
    window.pageYOffset || 0,
    document.documentElement.scrollTop || 0
);
var ticking = false;
var menuState = "visible";

function showSmartMenu(){
    if(!smartMenu || menuState === "visible") return;
    smartMenu.classList.remove("ut-scroll-hidden");
    smartMenu.classList.add("ut-scroll-visible");
    menuState = "visible";
}

function hideSmartMenu(){
    if(!smartMenu || menuState === "hidden") return;
    smartMenu.classList.add("ut-scroll-hidden");
    smartMenu.classList.remove("ut-scroll-visible");
    menuState = "hidden";
}

function updateSmartMenu(){

    if(!smartMenu){
        ticking = false;
        return;
    }

    var currentScrollY = Math.max(
        window.pageYOffset || 0,
        document.documentElement.scrollTop || 0
    );

    /* Sayfanın üst kısmında menü daima açık */
    if(currentScrollY <= 20){
        showSmartMenu();
        lastScrollY = currentScrollY;
        ticking = false;
        return;
    }

    /* Mobil panel açıkken üst menüyü gizleme */
    if(document.body.classList.contains("ut-final-lock")){
        showSmartMenu();
        lastScrollY = currentScrollY;
        ticking = false;
        return;
    }

    var delta = currentScrollY - lastScrollY;

    /* Mouse / touch mikro hareketlerinde menü zıplamasın */
    if(Math.abs(delta) < 5){
        ticking = false;
        return;
    }

    if(delta > 0 && currentScrollY > 120){
        hideSmartMenu();
    }else if(delta < 0){
        showSmartMenu();
    }

    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener("scroll", function(){
    if(!ticking){
        window.requestAnimationFrame(updateSmartMenu);
        ticking = true;
    }
}, {passive:true});

/* Sayfa geri geldiğinde menü görünür olsun */
window.addEventListener("pageshow", function(){
    showSmartMenu();
});

/* Ekran boyutu değişirse spacer yüksekliğini CSS yönetir */
window.addEventListener("resize", function(){
    showSmartMenu();
});


})();

})();
