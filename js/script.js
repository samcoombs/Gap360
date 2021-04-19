const $hamburger = $(".hamburger");
const $navList = $(".nav__list");

$hamburger.on("click", function () {
  $navList.slideToggle().css("display", "flex");
});
