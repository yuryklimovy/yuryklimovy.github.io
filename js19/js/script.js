$(document).ready(function() {

  //JCAROUSEL

  $('.jcarousel').jcarousel({
    animation: 'slow',
  });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })

  .jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '"></a>';
    }
  });

  //NAVIGATION

  var $nav = $("#nav");
  var $navHeight = $nav.height();
  var $featuresTop = $('#features').offset().top;
  var $servicesTop = $('#services').offset().top;
  var $newsTop = $('#news').offset().top;
  var $link = $('.nav__link');


  $(window).scroll(function() {

    if ($(this).scrollTop() > 100 && $nav.hasClass("default")) {
      $nav.removeClass("default").addClass("fixed");
    } else if ($(this).scrollTop() <= 100 && $nav.hasClass("fixed")) {
      $nav.removeClass("fixed").addClass("default");
    };

    if ($(this).scrollTop() < $featuresTop) {
      $link.removeClass('nav__link-active');
      $('a[href="#home"]').addClass('nav__link-active');
    };

    if ($(this).scrollTop() >= $featuresTop - 182) {
      $link.removeClass('nav__link-active');
      $('a[href="#features"]').addClass('nav__link-active');
    };

    if ($(this).scrollTop() >= $servicesTop - 182) {
      $link.removeClass('nav__link-active');
      $('a[href="#services"]').addClass('nav__link-active');
    };

    if ($(this).scrollTop() >= $newsTop - 182) {
      $link.removeClass('nav__link-active');
      $('a[href="#news"]').addClass('nav__link-active');
    };


  });

  $link.on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top - $navHeight;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });

  //HOVER SERVICES
  $('.service__link').hover(function() {
    $(this).toggleClass('hover-active');
    $(this).siblings('.hover').toggleClass('hover-active');
    $(this).siblings('.service__link').toggleClass('service__link-hover');
  });

  $('.hover').hover(function() {
    $(this).toggleClass('hover-active');
    $(this).siblings('.hover').toggleClass('hover-active');
    $(this).siblings('.service__link').toggleClass('service__link-hover');
  });

  //ACCORDION

  $('.accordion__content').hide();

  $('.accordion__title').click(function() {
    $(this).next().slideToggle().siblings('div:visible').slideUp(800);
    $('.accordion__title').not(this).find('i').removeClass('fa-minus').addClass('fa-plus');
    $(this).find('i').toggleClass('fa-minus').toggleClass('fa-plus');
    $(this).toggleClass('accordion__title-active');
    $('.accordion__title').not(this).removeClass('accordion__title-active');
  });
});
