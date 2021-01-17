$(function () {
  $(".header__menu-link").on("click", function () {
    $(".header__menu").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 2700) {
      // создаем эффекты и анимацию
      $(".bottle__line").css("display", "block");
      $(".bottle__line path").addClass("line-animation");
      
    countCharacter();
    dotAnimate();
      
    }
  });

function dotAnimate(){
    let dot1 = $('#dot-1');
    let dot2 = $('#dot-2');
    let dot3 = $('#dot-3');
    dot1.css({
        'animation' : `dotsAnimate .4s ease-in 1s`,
        'animation-fill-mode': 'forwards'
    })
    dot2.css({
        'animation' : `dotsAnimate .4s ease-in 2.7s`,
        'animation-fill-mode': 'forwards'
    })
    dot3.css({
        'animation' : `dotsAnimate .4s ease-in 4.1s`,
        'animation-fill-mode': 'forwards'
    })
}

  function countCharacter(){
    let text1 = $('#line-text-1');
    let text2 = $('#line-text-2');
    let text3 = $('#line-text-3');
    let numCharT1 = text1.text().length;
    let numCharT2 = text2.text().length;
    let numCharT3 = text3.text().length;

    
    text1.css({
        'width' : `${numCharT1}ch`,
        'animation' : `print-text .7s steps(${numCharT1}) 1s`,
         'animation-fill-mode': 'forwards'
    })
    text2.css({
        'width' : `${numCharT2}ch`,
        'animation' : `print-text .7s steps(${numCharT2}) 2.4s`,
         'animation-fill-mode': 'forwards'
    })
    text3.css({
        'width' : `${numCharT3}ch`,
        'animation' : `print-text .7s steps(${numCharT3}) 3.8s`,
         'animation-fill-mode': 'forwards'
    })
}
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       200,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
wow.init();

$('.photos-slider__slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true
});

});
