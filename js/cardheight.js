/*-------------------------------------------
  Blog cardの高さを揃える
-------------------------------------------*/

$(function () {
  var h = 0;

  $(".card").each(function () {

    if ($(this).height() > h) {
      h = $(this).height();
    }
  });

  $(".card").css("height", h + "px");

});