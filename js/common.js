function switchLanguage(language) {
  // Fetch the translations from the JSON file
  // based on the selected language
  var translations = window.translations[language];

  // Update the content on the page
  document.getElementById("title").innerText = translations.title;
  document.getElementById("content").innerText = translations.content;
}

// Load the appropriate language on page load
document.addEventListener("DOMContentLoaded", function () {
  var userLanguage = getUserLanguage(); // implement a function to get user's preferred language
  switchLanguage(userLanguage);
});

$(document).ready(function () {
  $("header").load("header.html");
  $("footer").load("footer.html");
  $("#popular-posts").load("popular-posts.html");
});
