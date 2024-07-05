$(document).ready(function(){
if ($(".banner_category").length) {
    $(".banner_category").owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        lazyLoad: true,
        loop: true,
        margin: 10,
        autoHeight:true,
        responsive: {
            0: {
              items: 2
            },
            480: {
              items: 2,
            },
            768: {
              items: 3,
            },
            992: {
              items: 4,
            }
          },
    });
}


    $(".news_item").owlCarousel({
            items: 4,
            nav: false,
            dots: true,
            lazyLoad: true,
            loop: true,
            margin: 10,
            autoHeight:true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                }
            },
        });


    if ($("#halim-carousel-related").length) {
        $("#halim-carousel-related").owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            items: 4,
            nav: true,
            dots: false,
            lazyLoad: true,
            loop: true,
            margin: 10,
            autoHeight:true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2,
                },
                992: {
                    items: 4,
                }
            },
        });
    }

    if ($(".news_viewer").length) {
        $(".news_viewer").owlCarousel({
            items: 4,
            nav: true,
            dots: false,
            lazyLoad: true,
            loop: true,
            autoHeight:true,
            margin: 10,
            responsive: {
                0: {
                  items: 2
                },
                480: {
                  items: 2,
                },
                768: {
                  items: 3,
                },
                992: {
                  items: 4,
                }
              },
        });
    }
    $("#expand-ajax-filter").click(function (){
        $("#ajax-filter").toggleClass("active");
    });
    $(".view-more").click(function (e){
        e.preventDefault();
        $(this).toggleClass("hidden");
        $("#asc").toggleClass("active");
    });
    
    if (screen.width < 768) {
        $(".about_me .arrow").after($(".about_me .title .intro_title"));
        $(".body_service .arrow").after($(".body_service .title .intro_title"));
        $(".all_service .arrow").after($(".all_service .title_service .title .button_view_all"));
        $(".criteria .criteria_text .icon_1 img").after($(".about_me .criteria .criteria_text .text .criteria_text_1"));
        $(".criteria .criteria_text .icon_2 img").after($(".about_me .criteria .criteria_text .text .criteria_text_2"));
        $(".criteria .criteria_text .icon_3 img").after($(".about_me .criteria .criteria_text .text .criteria_text_3"));
        // $(".progresss .progress_item .right").after($(".progresss .progress_item .mid"));
    }
    $(".menu-mobile").click(function(event) {
        event.stopPropagation();
    });
    $(".modal_menu-mobile").click(function() {
        $(this).removeClass("show-mobile");
        $("body").css("overflow", "visible");
    });
    $(".carriage .left_column .list_question ul li").click(function() {
        $(this).toggleClass("active");
        $(this).find("p.pra_hide").slideToggle();
    });


    $(".switch").on("click", function() {
        $("body").hasClass("light") ? (
            $("body").removeClass("light"),
                $(".switch").removeClass("switched")
        ) : (
            $("body").addClass("light"),
                $(".switch").addClass("switched")
        );
    });

    var e = document.querySelector(".progress-wrap path"),
        t = e.getTotalLength();

    e.style.transition = e.style.WebkitTransition = "none";
    e.style.strokeDasharray = t + " " + t;
    e.style.strokeDashoffset = t;
    e.getBoundingClientRect();
    e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    var o = function() {
        var o = $(window).scrollTop(),
            r = $(document).height() - $(window).height(),
            i = t - o * t / r;
        e.style.strokeDashoffset = i;
    };

    o();
    $(window).scroll(o);

    $(window).on("scroll", function() {
        $(this).scrollTop() > 50 ? $(".progress-wrap").addClass("active-progress") : $(".progress-wrap").removeClass("active-progress");
    });

    $(".progress-wrap").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 0);
        return false;
    });


});