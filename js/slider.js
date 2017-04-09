'use strict'

$(function () {
    //zmienne
    var slider = $('#slider');

    var slideShow = $('.slide-show');

    var slideCount = $('.single-slide').length; //liczy elementy div

    var slideWidth = 100 / slideCount;

    var slideIndex = 0;

    slideShow.css('width', slideCount * 100 + '%');

    slideShow.find('.single-slide').each(function (index) {
        $(this).css('margin-left', slideWidth * index + '%');
        $(this).css('width', slideWidth + '%');

        /*
         $(this).css({
                'width' : slideWidth + '%',
                'margin-left' : slideWidth * index + '%'
            });
       */ // skrocony zapis wewnatrz funkcji powyżej

    });

    $('.prev-slide').click(function () {
        //e.preventDefault();//zabezpiecza przed przeładowaniem strony 
        slide(slideIndex - 1);
    });

    $('.next-slide').click(function () {
        //e.preventDefault();
        slide(slideIndex + 1);
        // e.preventDefault();
    });

    function slide(newSlideIndex) { //funkcja ktora pozwala operowac strzalkami w prawo i lewo
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }

        var slideCaption = $('.slider-caption').eq(newSlideIndex);

        slideCaption.hide();

        var marginLeft = (newSlideIndex * (-100)) + '%'; 
        
        slideShow.animate({'margin-left' : marginLeft}, 800, function() {
            slideIndex = newSlideIndex;
            slideCaption.fadeIn('slow');
        });    

    };
    
}); // koniec funkcji głównej