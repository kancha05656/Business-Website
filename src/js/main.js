


    /* ------------------------------------------------------ */
    // Preloader Area
    $(window).on('load', function() {
        $('.preloader').addClass('preloader-deactivate');
    });


    // Testomonial slider
    $('.testomonial-comment-area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.tesomonial-author-img'
    });
    $('.tesomonial-author-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testomonial-comment-area',
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        centerMode: true,
        infinite: true,
        arrows: false
    });

    // About us slider
    $('.about-us-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });


    // team slider
    $('.team-slider-active').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });


// custom
// nav active
    document.querySelector('.navbtn').addEventListener('click', function(e){
        document.querySelector('nav').classList.toggle('active');
        this.classList.toggle('active')
    });

    $(window).scroll(function() {    // this will work when your window scrolled.
        var height = $(window).scrollTop();  //getting the scrolling height of window
        if(height  > 45) {
            $(".main-header").addClass("sticy_header");
        } else{
            $(".main-header").removeClass('sticy_header');
        }
    });

    var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

    window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop){
            // Do scroll down code
            $('.sticy_header').removeClass('active');
            $('.navbtn').removeClass('show')
        } else {
            // Do scroll up code
            $('.sticy_header').addClass('active');
            $('.navbtn').addClass('show')
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

    if ($(window).scrollTop() > 5){
        $('.navbtn').removeClass('show')
    }


