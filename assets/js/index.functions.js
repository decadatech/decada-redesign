$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    autoWidth: true,
    autoHeight: true,
    margin: 30,
    responsive: {
      600: {
        items: 1,
      },
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
});