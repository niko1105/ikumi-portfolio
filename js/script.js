// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {

  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  // ローディング
  var hexagon = $(".loader-wrapper");
  $(window).on("load", function () {
    hexagon.addClass("loaded");
  });
  


  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();
  var width = $(window).width();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    if (width > 767) {
      var position = target.offset().top - navHeight + 68;
    }else if (width < 768) {
      var position = target.offset().top;      
    }
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
  // スクロールイン
  $(window).scroll(function () {
    $(".slide-left, .slide-right, .slide-top").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("scrollin");
      }
    });
  });

  // swiper
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    effect: 'fade',
    direction: 'horizontal',
    loop: true,
    speed: 2000, 
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
  })

});
