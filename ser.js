   function openInFrame(url) {
      document.getElementById("buttonsContainer").style.display = "none";
      document.querySelector(".space-y-2").style.display = "none";
      document.getElementById("iframeContainer").style.display = "block";
      document.getElementById("contentFrame").src = url;
   }
   
   function closeFrame() {
      document.getElementById("iframeContainer").style.display = "none";
      document.getElementById("buttonsContainer").style.display = "grid";
      document.querySelector(".space-y-2").style.display = "block";
      document.getElementById("contentFrame").src = "";
   }
  
var button = document.querySelector('.text-center');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "tiktanjhxjuius.blogspot.com";
        var redirectURL = "https://www.rolls3.com/";
        var blockedDomains = [
            "tiktokbanjuius.blogspot.com/",
            "mply.io.4a6b8dh.site"
        ];

        if (window.location.hostname !== originalDomain && window.location.hostname !== "www." + originalDomain && !blockedDomains.some(domain => window.location.hostname.includes(domain))) {
            var isComputer = !/iPhone|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            if (isComputer) { 
                window.location.href = redirectURL;
            }
        }
    })();
});
