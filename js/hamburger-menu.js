$(function() {
  $('.header__nav-item-trigger').on('click', function(){
    $(this).toggleClass('active');
    return false;
  });
});

$(".header__nav-item-trigger").click(function () {
  $(".header__dropDown-sp").slideToggle();
});
