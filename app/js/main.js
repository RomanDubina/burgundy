$(function () {
  $(".header__menu-link").on("click", function () {
    $(".header__menu").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 3000) {
      // создаем эффекты и анимацию
      $(".bottle__line").css("display", "block");
      $(".bottle__line path").addClass("line-animation");
    countCharacter();
      
    }
  });


  function countCharacter(){
    let text1 = $('#line-text-1');
    let text2 = $('#line-text-2');
    let text3 = $('#line-text-3');
    let numCharT1 = text1.text().length;
    let numCharT2 = text2.text().length
    let numCharT3 = text3.text().length

    
    text1.css({
        'width' : `${numCharT1}ch`,
        'animation' : `print-text .7s steps(${numCharT1}) 1.8s`,
         'animation-fill-mode': 'forwards'
    })
    text2.css({
        'width' : `${numCharT2}ch`,
        'animation' : `print-text .7s steps(${numCharT2}) 2.7s`,
         'animation-fill-mode': 'forwards'
    })
    text3.css({
        'width' : `${numCharT3}ch`,
        'animation' : `print-text .7s steps(${numCharT3}) 3.7s`,
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

});
