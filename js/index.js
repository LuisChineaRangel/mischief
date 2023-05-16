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

var maxLines = 2; // Maximum number of lines to display
var lineHeight = parseInt($(".text-container").css("line-height")); // Get the line height of the container
var maxHeight = lineHeight * maxLines; // Calculate the maximum height

var combinedText = ""; // Variable to store the combined text

$(".text-container p").each(function() {
  var text = $(this).text();
  combinedText += text + " ";
});

var lines = Math.floor($(".text-container").height() / lineHeight);
if (lines > maxLines) {
  var truncatedText = combinedText
    .split(" ")
    .slice(0, maxLines * 2)
    .join(" "); // Adjust the number (2) to control the truncation length
  $(".text-container").text(truncatedText + "...");
}

});
