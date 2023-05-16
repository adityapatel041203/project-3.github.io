$(document).ready(function () {

  // ===========Responsive-header======================= 
  $('.header-3 .d-flex .icon').click(function () {
    $('.header-3 .slide-down').css("top", "0");
  });
  $('.header-3 .slide-down .close').click(function () {
    $('.header-3 .slide-down').css({ "top": "-200%" });
  });

  // ==========slider======================= 

  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: false,
    arrows: false,
    infinite: true,

    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  AOS.init();

});