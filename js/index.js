$(document).ready(function () {
  $("#articles-carousel").hover(
    function () {
      $(this)
        .find(".carousel-control-prev, .carousel-control-next")
        .stop()
        .fadeTo(200, 1);
    },
    function () {
      $(this)
        .find(".carousel-control-prev, .carousel-control-next")
        .stop()
        .fadeTo(200, 0);
    }
  );
});

function truncateText() {
  var maxLines = 2; // Maximum number of lines to display
  var lineHeight = parseInt($(".text-container").css("line-height")); // Get the line height of the container
  var maxHeight = lineHeight * maxLines; // Calculate the maximum height

  $(".text-container a").each(function () {
    var text = $(this).text();
    var lines = Math.floor($(this).height() / lineHeight);

    if (lines > maxLines) {
      var truncatedText = text
        .split(" ")
        .slice(0, maxLines * 3)
        .join(" "); // Adjust the number to control the truncation length
      $(this).text(truncatedText + "...");
    }
  });
};
