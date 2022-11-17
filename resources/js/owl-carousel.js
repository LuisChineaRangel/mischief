$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 4500,
  dots: true,
  nav: false,
  margin: 0,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    520: {
      items: 2
    },
    750: {
      items: 3
    },
    1130: {
      items: 4
    }
  }
});