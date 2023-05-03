$(document).ready(function() {
  $(window).scroll(function() {
    $('.card').each(function() {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() && !$(this).hasClass('appear')) {
        $(this).addClass('appear');
      }
    });
  });
});