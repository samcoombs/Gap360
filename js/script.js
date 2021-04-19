const $hamburger = $(".hamburger");
const $navList = $(".nav__list");
const $html = $("html");
let isOpen = false;

$hamburger.on("click", function () {
  if (!isOpen) {
    $navList.slideDown().css("display", "flex");
    $html.css("overflow-y", "hidden");
    isOpen = true;
  } else {
    $navList.slideUp();
    isOpen = false;
  }
});
