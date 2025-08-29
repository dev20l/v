 let currentStage = 'followers'; 
    const MAX_FOLLOWERS_SELECT = 3; 
    let selectedFollowersCount = 0;

    function setActiveTabForStage(stage) {
      $('.label .item').removeClass('active');
      if (stage === 'gifts') {
        $('.label .item').first().addClass('active'); // Items
      } else if (stage === 'last') {
        $('.label .item').last().addClass('active'); // Info
      }
    }

    function chat_list() {
      if ($('.chat .items').length === 0) return;
      const interval = setInterval(function () {
        var userImg = (typeof users_img !== "undefined" && users_img.length) ? users_img[Math.floor(Math.random() * users_img.length)] : "https://i.imgur.com/HBaO44H.png";
        var userName = (typeof users !== "undefined" && users.length) ? users[Math.floor(Math.random() * users.length)] : ("User" + Math.floor(Math.random()*1000));
        var follVal = (typeof followers !== "undefined" && followers.length) ? followers[Math.floor(Math.random() * followers.length)] : Math.floor(Math.random()*1000);
        var html = `
          <div class="item animate__animated animate__fadeInLeft">
            <div class="img"><img src="${userImg}" alt=""></div>
            <div class="info">
              <div class="user">${userName}</div>
              <div class="abdo">+${follVal} Received ✅</div>
            </div>
          </div>`;
        $(".chat .items").append(html);
        $(".chat .items").scrollTop($(".chat .items")[0].scrollHeight);
      }, 2000);
    }

    function updateFollowersNextButton() {
      if (selectedFollowersCount > 0) {
        $('.followers-next .action').removeClass('disabled');
      } else {
        $('.followers-next .action').addClass('disabled');
      }
    }

    function populateGifts() {
      $("#gifts .row").empty();
      giftsImg.forEach(img => {
        var el = `
          <div class="col-4 col-md-3">
            <div class="item">
              <img src="https://i.imgur.com/MjVLeNt.gif" class="lazy-load" data-src="${img}">
            </div>
          </div>`;
        $("#gifts .row").append(el);
      });
      const images = $("img.lazy-load");
      const options = { root: null, rootMargin: "0px", threshold: 0.1 };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = $(entry.target);
            el.attr("src", el.data("src"));
            el.removeClass("lazy-load");
            observer.unobserve(entry.target);
          }
        });
      }, options);
      images.each(function () { observer.observe(this); });
    }

    $(document).on("click", "#followers .item", function () {
      var el = $(this);
      if (el.hasClass('active')) {
        el.removeClass('active');
        selectedFollowersCount = Math.max(0, selectedFollowersCount - 1);
        updateFollowersNextButton();
        return;
      }
      if (selectedFollowersCount < MAX_FOLLOWERS_SELECT) {
        el.addClass('active');
        selectedFollowersCount++;
        updateFollowersNextButton();
      } else {
        el.css('transform','scale(1.03)');
        setTimeout(()=> el.css('transform',''),120);
      }
    });

$(document).on("click", ".followers-next .action", function () {
  if ($(this).hasClass("disabled")) return;

  var selectedItems = $("#followers .item.active").map(function () {
    return {
      txt: $(this).find(".txt").text().trim(),
      img: $(this).find("img").attr("src")
    };
  }).get();

  $("#follow-val").empty();

  selectedItems.forEach(function(item, index) {
    var imgEl = `<img src="${item.img}" alt="${item.txt}" style="width:60px;height:60px;object-fit:contain;">`;
    $("#follow-val").append(imgEl);
    if(index < selectedItems.length - 1) {
      $("#follow-val").append(" , "); 
    }
  });

  $('#followers').addClass('d-none');
  $('#last').removeClass('d-none');

  $('.followers-next').addClass('d-none');
  $('.coins-next').removeClass('d-none');

  currentStage = 'last';
  setActiveTabForStage(currentStage);

  $(".loading").removeClass("d-none").css({ 'top': '150px' });
  setTimeout(function () {
    $(".loading").addClass("d-none");
    chat_list();
  }, 200);
});



    $(document).on("click", ".gift-next .action", function () {
      if ($(this).hasClass("disabled")) return;
      $("#gifts").addClass("d-none");
      $("#followers").removeClass('d-none');
      $('.gift-next').addClass("d-none");
      $('.followers-next').removeClass("d-none");

      currentStage = 'followers';
      setActiveTabForStage(currentStage);
    });

   $(document).ready(function () {
  $('.label .item').each(function () {
    if ($(this).text().trim() === 'Robux') $(this).remove();
  });

  $('.label .item').removeClass('active');
  $('.label .item').first().addClass('active'); // Items

  populateGifts();

  $('#gifts').addClass('d-none');
  $('#followers').removeClass('d-none');
  $('#last').addClass('d-none');

  $('.gift-next').addClass('d-none');
  $('.followers-next').removeClass('d-none');
  $('.coins-next').addClass('d-none');

  selectedFollowersCount = 0;
  updateFollowersNextButton();

  $(".loading").addClass("d-none");

  currentStage = 'followers';
});
 
