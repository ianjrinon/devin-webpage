$(document).ready(function() {

    $(".main").onepage_scroll({
         sectionContainer: "section",
         easing: "ease",
         animationTime: 1000,
         pagination: true,
         updateURL: false,
         beforeMove: function(index) {},
         afterMove: function(index) {},
         loop: false,
         keyboard: true,
         responsiveFallback: false,
         direction: "vertical"
     });

    $('.fotorama').fotorama({
        width: 600,
        maxwidth: '100%',
        ratio: 16/9,
        allowfullscreen: true,
        nav: 'thumbs',
        thumbborderwidth: '50%',
        startindex: 3
    });

    // $('.slideshow-section').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     dots: true,
    //     speed: 300,
    //     centerMode: true,
    //     arrows: true,
    //     cssEase: 'ease',
    //     initialSlide: 2,
    //     respondTo: 'min',
    //     swipeToSlide: true,
    //     variableWidth: true
    // });

    (function() {
        $('#myNavbar').css('visibility', 'hidden');
        $('#navbar-eye-img').css('visibility', 'hidden');
        setTimeout(function() {
            $('#intro-video').css('display', 'none');
            $('#myNavbar').css('visibility', 'visible');
            $('#navbar-eye-img').css('visibility', 'visible');
        }, 4100);
    }());

    $("#navbar-eye-img").on('click', function() {
        $('#intro-video').css('display','block');
        var video = $('#intro-video')[0];
        if (video.paused) {
            video.play();
            setTimeout(function() {$('#intro-video').css('display', 'none')}, 4000);
        }
        else {
            video.pause();
        }
        return false;
    });
});
