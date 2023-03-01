$(document).ready(function () {
  var include_meta = "./resources/html/meta.html";
  $.get(include_meta, function (meta) {
    $("head").prepend(meta);
  });

  $("header").load("./resources/html/header.html");
  $("footer").load("./resources/html/footer.html");

  AOS.init();
});