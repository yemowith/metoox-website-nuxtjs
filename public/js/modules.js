(function ($) {
  "use strict";

  $(function () {
    /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
    var leftArrow = '<i class="fa fa-angle-left"></i>';
    var rightArrow = '<i class="fa fa-angle-right"></i>';
    var leftArrow2 = '<i class="fas fa-arrow-left"></i>';
    var rightArrow2 = '<i class="fas fa-arrow-right"></i>';

    /*--------------------------------------------
            testimonial slider
        ---------------------------------------------*/
    $(".testimonial-slider-1").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      smartSpeed: 1500,
      navText: [leftArrow, rightArrow],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });

    /*--------------------------------------------
            testimonial slider
        ---------------------------------------------*/
    $(".team-slider").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      smartSpeed: 1500,
      navText: [leftArrow2, rightArrow2],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
    /*--------------------------------------------
            project slider
        ---------------------------------------------*/
    $(".team-slider-project").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      smartSpeed: 1500,
      navText: [leftArrow2, rightArrow2],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        992: {
          items: 5,
        },
      },
    });

    /*--------------------------------------------
            testimonial slider 2
        ---------------------------------------------*/
    $(".testimonial-slider-2").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      smartSpeed: 1500,
      navText: [leftArrow, rightArrow],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        992: {
          items: 2,
        },
      },
    });

    /*--------------------------------------------
            client slider
        ---------------------------------------------*/

    /*--------------------------------------------
            creator-slider
        ---------------------------------------------*/
    $(".creator-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      smartSpeed: 1500,
      navText: [leftArrow, rightArrow],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1199: {
          items: 4,
        },
      },
    });

    /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
    $(".video-play-btn-hover").magnificPopup({
      type: "iframe",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    });
    $.extend(true, $.magnificPopup.defaults, {
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "https://www.youtube.com/embed/Wimkqo8gDZ0",
          },
        },
      },
    });

    /* -----------------------------------------
            fact counter
        ----------------------------------------- */
    $(".counter").counterUp({
      delay: 15,
      time: 2000,
    });

    /*----------------------------------------
           back to top
        ----------------------------------------*/
    $(document).on("click", ".back-to-top", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        2000
      );
    });
  });

  $(window).on("scroll", function () {
    /*---------------------------------------
            back-to-top
        -----------------------------------------*/
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1000) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }

    /*---------------------------------------
            sticky-active
        -----------------------------------------*/
    var scroll = $(window).scrollTop();
    if (scroll < 445) {
      $(".navbar").removeClass("sticky-active");
    } else {
      $(".navbar").addClass("sticky-active");
    }
  });

  $(window).on("load", function () {
    /*-----------------
            preloader
        ------------------*/
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);

    /*---------------------
            Cancel Preloader
        ----------------------*/
    $(document).on("click", ".cancel-preloader a", function (e) {
      e.preventDefault();
      $("#preloader").fadeOut(2000);
    });
  });
})(jQuery);
