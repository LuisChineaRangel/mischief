function loadTranslations(language) {
  $("#languageDropdown").text(language.toUpperCase());
  $.getJSON("translations.json", function(data) {
    translations = data[language];
    changeLanguage();
  });
}

function changeLanguage() {
  for (var id in translations) {
    if (translations.hasOwnProperty(id)) {
      var translation = translations[id];
      $("#" + id).text(translation);
    }
  }
}

$(document).ready(function () {
  $("header").load("header.html");
  $("footer").load("footer.html");
  $("#sidebar").load("sidebar.html");
  loadTranslations("en");
  $("#languageDropdown").text("EN");
});
