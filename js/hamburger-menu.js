$(function() {
  $('.header__nav-item-trigger').on('click', function(){
    $(this).toggleClass('active');
    return false;
  });
});