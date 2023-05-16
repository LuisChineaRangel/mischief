function truncateText() {
  var maxLines = 2; // Maximum number of lines to display
  var lineHeight = parseInt($(".text-container").css("line-height")); // Get the line height of the container
  var maxHeight = lineHeight * maxLines; // Calculate the maximum height

  $(".truncated").each(function () {
    var $textContainer = $(this);
    var combinedText = ""; // Variable to store the combined text of all elements

    // Iterate over all <p> and <h> tags inside the current text container
    $textContainer.find("p, h").each(function () {
      var $element = $(this);
      combinedText += $element.text().trim() + " "; // Add the text of the current element to the combinedText
    });

    // Split the combined text into words and join the first x lines with a space
    var truncatedText = combinedText
      .split(" ")
      .slice(0, maxLines * 15)
      .join(" ");

    // Set the truncated text with ellipsis to all <p> and <h> tags inside the current text container
    $textContainer.text(truncatedText + "...");
  });
}
