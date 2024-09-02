/*-------------------------------------------
  hamburger
-------------------------------------------*/

$(function(){
  $('.hamburger').on('click', function() {
    hamburger();
  });
});

$(function(){
  $('#mask').on('click', function() {
    hamburger();
  });
});

function hamburger() {
  $('.hamburger').toggleClass('open');
  if ($('.hamburger').hasClass('open')) {
    $('.header').addClass('open');
  } else {
    $('.header').removeClass('open');
  };
};
