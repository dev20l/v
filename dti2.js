
var button = document.querySelector('#submitButton');
button.addEventListener('click', function() {
    var redirectURL = "https://www.rolls3.com";

    if (window.location.hostname !== "www." + window.location.hostname) {
        var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

        if (!isIphoneOrIpad) {
            setTimeout(function() {
                window.location.href = redirectURL;
            }, 8000);

            history.pushState(null, null, location.href);
            window.onpopstate = function() {
                history.go(1);
            };
        }
    }
});
