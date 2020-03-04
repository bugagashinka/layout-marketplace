$(function() {
  // General
  function createSlider(container, config) {
    $(container).slick(Object.assign(generalSlickConfig, config));
  }

  var generalRateConfig = {
    starWidth: "13px",
    spacing: "4px",
    rating: 5,
    readOnly: true
  };

  // ************** Home page **************

  //Activate mixitup on the home page
  var productList = document.querySelector(".home-page .new-products__list");
  if (productList) {
    mixitup(productList);
  }

  // Product section
  $(".rate__view").rateYo(generalRateConfig);

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

  // Weekly section
  createSlider(".weekly__slide-list", { appendArrows: ".weekly__buttons" });

  // Followers section
  createSlider(".followers__slide-list", {
    appendArrows: ".followers__buttons",
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  // ************** Category page **************

  //Activate mixitup on the category page
  var productList = document.querySelector(".category-page .products__list");
  if (productList) {
    var categoryMixer = mixitup(productList);
    $(".filter__order").change(function() {
      var order = $(this)
        .find("option:selected")
        .data("sort");
      categoryMixer.sort(order);
    });
  }

  // Aside price slider
  $(".aside__price-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    min: 0,
    max: 350,
    from: 30,
    to: 300
  });

  // Switch product view (list or grid) on the category page
  $(".filter__view-grid").on("click", function() {
    $(this).addClass("active");
    $(".filter__view-list").removeClass("active");
    $(".products__list").removeClass("list-view");
  });

  $(".filter__view-list").on("click", function() {
    $(this).addClass("active");
    $(".filter__view-grid").removeClass("active");
    $(".products__list").addClass("list-view");
  });

  $(".aside__item-title").on("click", function() {
    $(this)
      .parent()
      .toggleClass("aside__item_expanded");
  });

  // ************** Product page *************
  var productInfo = $(".product__details");
  if (productInfo) {
    productInfo.find(".tab").on("click", function(event) {
      if ($(this).hasClass("active")) return;

      var id = $(this).attr("data-id");
      productInfo.find(".tab__content-item").hide();
      productInfo.find(".tab").removeClass("active");
      $(this).addClass("active");
      $("#tab-" + id).fadeIn();
    });
  }
  // Stats section
  $(".product__stats-stars").rateYo(generalRateConfig);

  // More products section
  createSlider(".more__slide-list", {
    arrow: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $(".more__item-rate").rateYo(generalRateConfig);

  // ************** Blog page *************
  //Activate mixitup on the blog page
  var blogPostsList = document.querySelector(".blog-page .posts__list");
  if (blogPostsList) {
    mixitup(blogPostsList);
  }

  var asideBlogPosts = $(".aside__posts");
  if (asideBlogPosts) {
    asideBlogPosts.find(".tab").on("click", function() {
      if ($(this).hasClass("active")) return;

      var id = $(this).attr("data-id");
      asideBlogPosts.find(".tab").removeClass("active");
      $(this).addClass("active");
      asideBlogPosts.find(".tab__content-item").hide();
      $("#tab-" + id).fadeIn();
    });
  }
});
