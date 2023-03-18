$(document).ready(function() {
    $('.accordion-item').click(function() {
      $(this).toggleClass('active');
      $(this).siblings().removeClass('active');
    });
  });