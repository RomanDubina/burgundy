$(function () {
  $(".photos-slider__slick").slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          
        },
      },
      {
        breakpoint: 680,
        settings: {
          
          slidesToShow: 1,
          variableWidth: false,
          centerPadding: '0'
        },
      },
    ],
  });

  $(".header__menu-link").on("click", function (e) {
    e.preventDefault;
    $(".header__menu").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  $(".header__controls-btn").on("click", function () {
    $(".header__menu-wrapper").slideToggle();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 2700) {
      countCharacter();
    }
  });

  function countCharacter() {
    let text1 = $("#dl-1 .dotline__text");
    let text2 = $("#dl-2 .dotline__text");
    let text3 = $("#dl-3 .dotline__text");
    let numCharT1 = text1.text().length;
    let numCharT2 = text2.text().length;
    let numCharT3 = text3.text().length;

    text1.css({
      width: `${numCharT1}ch`,
      animation: `print-text .7s steps(${numCharT1}) 1.4s`,
      "animation-fill-mode": "forwards",
    });
    text2.css({
      width: `${numCharT2}ch`,
      animation: `print-text .7s steps(${numCharT2}) 2.8s`,
      "animation-fill-mode": "forwards",
    });
    text3.css({
      width: `${numCharT3}ch`,
      animation: `print-text .7s steps(${numCharT3}) 4.2s`,
      "animation-fill-mode": "forwards",
    });
  }
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 150,
    mobile: true,
    live: true,
  });
  wow.init();
});
