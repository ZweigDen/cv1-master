$(document).ready(function(){
    $('.card-body').slideToggle();
    $('.con1').slideToggle();
    $('.one').click(function(e){
        e.preventDefault();
        $('.con2').slideUp();
        $('.con1').slideToggle();
        $('.one').addClass('disabled');
        $('.two').removeClass('disabled');
    });
    $('.two').click(function(e){
        e.preventDefault();
        $('.con1').slideUp();
        $('.con2').slideToggle();
        $('.two').addClass('disabled');
        $('.one').removeClass('disabled');
    });
    swiper();
});

function swiper(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }
      });
}