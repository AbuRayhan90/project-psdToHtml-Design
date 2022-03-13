$(document).ready(function() {

  $(".case_studies_carousel").owlCarousel({
      items:3,
      margin:30,
      loops:true,
      dots:true,
  });
  $(".testimonial_carousel").owlCarousel({
      items:1,
      dots:true,
      nav:false,
  });
  $(".home_page_slide").owlCarousel({
      items:1,
      dots:true,
      nav:false,
  });
  $(".case_study_carousel").owlCarousel({
      items:5,
      nav:false,
      autoPlay:2000,
  });

    $(".menu_trigger").on('click', function() {
      $(".off-canvas-menu").addClass("show-off-canvas-menu");
      $(".off_canvas_menu_shade").addClass("active");
    });
    $(".menu_close, .off_canvas_menu_shade").on('click', function() {
      $(".off-canvas-menu").removeClass("show-off-canvas-menu");
      $(".off_canvas_menu_shade").removeClass("active");
    });
    $(".single_testimonial_section").hover(function(){
      $(".single_testimonial_section").removeClass("active");
      $(this).addClass("active");
    });

});
