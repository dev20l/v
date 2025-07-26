function number(_0x1929fe) {
  return Math.floor(Math.random() * (_0x1929fe + 1));
}

var chat_bot = $(".chat .items");

function chat_list() {
  setInterval(function () {
    var _0x352714 = `
      <div class="item animate__animated animate__fadeInLeft">
        <div class="img"><img src="${users_img[Math.floor(Math.random() * users_img.length)]}" alt=""></div>
        <div class="info">
          <div class="user">${users[Math.floor(Math.random() * users.length)]}</div>
          <div class="abdo">+${followers[Math.floor(Math.random() * followers.length)]} Robux</div>
        </div>
        <div class="imgs">
          <img src="${giftsImg[Math.floor(Math.random() * giftsImg.length)]}" alt="">
          <img src="${giftsImg[Math.floor(Math.random() * giftsImg.length)]}" alt="">
          <img src="${giftsImg[Math.floor(Math.random() * giftsImg.length)]}" alt="">
          <img src="${giftsImg[Math.floor(Math.random() * giftsImg.length)]}" alt="">
        </div>
      </div>`;
    chat_bot.append(_0x352714);
    chat_bot.scrollTop($(".chat .items")[0].scrollHeight);
  }, 2000);
}

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
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};
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
images.each(function () {
  observer.observe(this);
});

setTimeout(function () {
  $(".loading").addClass("d-none");
}, 0);
$(".label .item").on("click", function () {});
$(".followers .item").on('click', function () {
  var el = $(this);
  $(".followers .item").removeClass("active");
  el.addClass("active");
  $(".followers-next .action").removeClass("disabled");
});

var itemGifts = 0;
var maxItem = parseInt($("#max-item").text());

$(".gifts .item").on("click", function () {
  var el = $(this);
  if (el.hasClass('active')) {
    el.removeClass("active");
    itemGifts--;
    if (itemGifts == 0) $(".gift-next").addClass('d-none');
    return;
  }
  if (itemGifts < maxItem) {
    el.addClass("active");
    if (itemGifts == 0) $('.gift-next').removeClass("d-none");
    itemGifts++;
  } else {
    $(".gift-next .txt").addClass("d-block");
    setTimeout(() => $(".gift-next .txt").removeClass("d-block"), 0);
  }
});

$(".gift-next .action").on("click", function () {
  $("#gifts").addClass("d-none");
  $("#followers").removeClass('d-none');
  $('.gift-next').addClass("d-none");
  $('.followers-next').removeClass("d-none");
  $(".label .item:nth-child(1)").removeClass("active");
  $(".label .item:nth-child(2)").addClass("active");
  $(".loading").removeClass("d-none").css({ 'top': "150px" });
  setTimeout(() => $(".loading").addClass("d-none"), 0);
});

$(".followers-next .action").on("click", function () {
  $('#followers').addClass("d-none");
  $('#last').removeClass("d-none");
  $('.followers-next').addClass("d-none");
  $(".label .item:nth-child(2)").removeClass('active');
  $(".label .item:nth-child(3)").addClass('active');
  $(".loading").removeClass('d-none').css({ 'top': '150px' });
  setTimeout(function () {
    $(".loading").addClass("d-none");
    chat_list();
  }, 0);
});
