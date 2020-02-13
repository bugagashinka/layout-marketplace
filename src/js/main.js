$(function() {
  var mixer = mixitup(".new-products__list");
  $(".product__item-rate").rateYo({
    starWidth: "13px",
    spacing: "4px",
    rating: 5,
    readOnly: true
  });
});
