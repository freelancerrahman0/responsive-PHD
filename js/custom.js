$(function () {
    //    navbar link active;
    $('.navbar .nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });

    //about video venobox;

    $('.venobox').venobox({
        spinColor: '#e23e38',
        spinner: 'wave',
    });

    //team slider;
    $('#team .team-slider').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //    testimonials slider;
    $(' #testimonials .tastimonial-slider').slick({
        arrows: false,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //    counter js;
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
    //  brand slick;
    $('#brand .brand-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
    });


    //    back-to-top js starts here;
    var menuBg = $('.navbar');
    var btt = $('.btt');
    var html_body = $('html, body');

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            btt.slideDown();
        } else {
            btt.slideUp();
        }
        if (scrolling > 300) {
            menuBg.addClass('stiky');
        } else {
            menuBg.removeClass('stiky');
        }
    });

    btt.on('click', function () {
        html_body.animate({
            scrollTop: 0,
        }, 2000);
    });

    //animation scroll js
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
});