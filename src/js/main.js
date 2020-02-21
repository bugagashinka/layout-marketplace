$(function() {
  var productList = document.querySelector(".new-products__list");
  if (productList) {
    mixitup(".new-products__list");
  }

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
  // Weekly section | Home page
  createSlider(".weekly__slide-list", { appendArrows: ".weekly__buttons" });

  // Followers section | Home page
  createSlider(".followers__slide-list", {
    appendArrows: ".followers__buttons",
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  // Aside price slider | Category page
  $(".aside__price-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    min: 0,
    max: 350,
    from: 30,
    to: 300
  });

  $(".filter__view-grid").on("click", function() {
    $(this).addClass("active");
    $(".filter__view-list").removeClass("active");
  });

  $(".filter__view-list").on("click", function() {
    $(this).addClass("active");
    $(".filter__view-grid").removeClass("active");
  });
});
