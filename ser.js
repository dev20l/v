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
