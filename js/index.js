$(document).ready(function() {
  $('#articles-carousel').hover(
    function() {
      $(this).find('.carousel-control-prev, .carousel-control-next').stop().fadeTo(200, 1);
    },
    function() {
      $(this).find('.carousel-control-prev, .carousel-control-next').stop().fadeTo(200, 0);
    }
  );
});
