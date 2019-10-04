$(function () {
    let slideNow = 1;
    let slideCount = $('.about__slider').children().length;
    document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;

    $('input, select').styler();
    $('.about__slider').slick({
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('.slick-next').click(function() {

        if(slideNow < slideCount){
            slideNow++;
            document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;
        }
        if(slideNow > slideCount){
            slideNow = 1;
            document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;
            $('.slick-next').disabled();
        }

    });
    $('.slick-prev').click(function() {

        if(slideNow > 1){
            slideNow--;
            document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;
        }
        if(slideNow < 1){
            slideNow = slideCount;
            document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;
            $('.slick-prev').disabled();
        }

    });



    $('.slide').click(function(event) {

        $('header').append(
            '<div id="overlay"><div class="number-slides"><span id="count_slide">1 / 8</span><a href="#">Наши клубы</a></div><div id="close-popup"><i></i></div></div><div id="magnify" class="slider"><div><img src="images/big-slide.jpg"></div><div><img src="images/big-slide.jpg"></div><div><img src="images/big-slide.jpg"></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
        });
        $('#overlay, #magnify').fadeIn('fast');


        let slideNow = 1;
        let slideCount = $('.slider').children().length;
        document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;

        $('.slider').slick({
            nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
            prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
            infinite: false
        });

        $('.slick-next').click(function() {

            if(slideNow < slideCount){
                slideNow++;
                document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;
            }
            if(slideNow > slideCount){
                slideNow = 1;
                document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;
                $('.slick-next').disabled();
            }

        });
        $('.slick-prev').click(function() {

            if(slideNow > 1){
                slideNow--;
                document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;
            }
            if(slideNow < 1){
                slideNow = slideCount;
                document.getElementById("count_slide").innerHTML = slideNow + " / " + slideCount;
                $('.slick-prev').disabled();
            }

        });
    });

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__popup-menu ul').slideToggle();
    });
});