$(function() {
  var mixer = mixitup(".new-products__list");

  var generalRateConfig = {
    starWidth: "13px",
    spacing: "4px",
    rating: 5,
    readOnly: true
  };

  $(".product__item-rate").rateYo(generalRateConfig);
  $(".weekly__item-rate").rateYo(generalRateConfig);

  // Weekly section
  $(".weekly__slide-list").slick({
    // autoplay: true,
    appendArrows: ".weekly__buttons",
    prevArrow: '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>'
  });
});
