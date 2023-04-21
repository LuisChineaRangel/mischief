$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 4500,
  dots: false,
  margin: 0,
  items: 1, 
  responsiveClass: true,
  responsive: {
    0: {
      stagePadding: 0
    },
    520: {
      stagePadding: 0
    },
    750: {
      stagePadding: 100
    },
    1130: {
      stagePadding: 400
    }
  }
});