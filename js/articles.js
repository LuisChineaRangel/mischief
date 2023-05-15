$(document).ready(function () {
  var maxLines = 2; // Maximum number of lines to display
  var lineHeight = parseInt($(".text-container").css("line-height")); // Get the line height of the container
  var maxHeight = lineHeight * maxLines; // Calculate the maximum height

  $(".text-container p").each(function () {
    var text = $(this).text();
    var lines = Math.floor($(this).height() / lineHeight);

    if (lines > maxLines) {
      var truncatedText = text
        .split(" ")
        .slice(0, maxLines * 15)
        .join(" "); // Adjust the number (7) to control the truncation length
      $(this).text(truncatedText + "...");
    }
  });
});
