/* =========================================================
   UMRETÜRK MERKEZİ MENÜ - SABİT YÜKLEYİCİ
   Bu dosyaya artık dokunulmayacak.
========================================================= */

(function () {

    if (window.__UMRETURK_MENU_LOADER__) return;
    window.__UMRETURK_MENU_LOADER__ = true;

    function menuYukle() {

        if (document.getElementById("umreturk-current-menu-script")) return;

        var script = document.createElement("script");

        /*
         * Asıl güncel menü GitHub Pages'ten gelir.
         * 5 dakikalık sürüm parametresi eski cache sorununu önler.
         */
        script.src =
            "https://ataturkdhwebyonetimi-cyber.github.io/umreturk-menu/umreturk-menu-current.js?v=" +
            Math.floor(Date.now() / 300000);

        script.id = "umreturk-current-menu-script";
        script.async = false;

        script.onerror = function () {
            console.error("UmreTürk merkezi menü dosyası yüklenemedi.");
        };

        (document.head || document.documentElement).appendChild(script);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", menuYukle, { once: true });
    } else {
        menuYukle();
    }

})();
