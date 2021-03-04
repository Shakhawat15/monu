$(document).ready(function(){

// Sticky Menu:
$(window).on('scroll',function() {
 var scroll = $(window).scrollTop();
 if (scroll < 1) {
  $(".sticky").removeClass("scroll-header");
 }else{
  $(".sticky").addClass("scroll-header");
 }
});

// Mean Menu:
$('#mobile-menu-active').meanmenu({
  meanScreenWidth: "991",
  meanMenuContainer: '.mobile-menu-button'
});

// Slick Slider:
$('.slider-active').slick({
  infinite: true,
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
});

// Testimonial Slider:
$('.testimonial-active').slick({
  infinite: true,
  autoplay: true,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// Brand Slider:
$('.brand-active').slick({
  infinite: true,
  autoplay: true,
  arrows: false,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Counter:
$('.counter').counterUp({
    delay: 10,
    time: 3000
});

})
