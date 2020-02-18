$(function() {
  var mixer = mixitup(".new-products__list");

  var generalRateConfig = {
    starWidth: "13px",
    spacing: "4px",
    rating: 5,
    readOnly: true
  };

  // Product section
  $(".product__item-rate").rateYo(generalRateConfig);

  // Weekly section
  $(".weekly__item-rate").rateYo(generalRateConfig);

  // Followers section
  $(".followers__item-rate").rateYo(generalRateConfig);

  // Sliders
  var generalSlickConfig = {
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>'
  };

  function createSlider(container, config) {
    $(container).slick(Object.assign(generalSlickConfig, config));
  }
  // Weekly section
  createSlider(".weekly__slide-list", { appendArrows: ".weekly__buttons" });

  // Followers section
  createSlider(".followers__slide-list", {
    appendArrows: ".followers__buttons",
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});
