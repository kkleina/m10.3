$(function() {
    var carouselList = $('#carousel ul.slides'),
        carouselControl = $('#carousel ul.control'),
        prevButton = $('#js-leftButton'),
        nextButton = $('#js-rightButton'),
        currentSlide = 0;
    
    var interval = setInterval(changeSlideLeft, 5000);
    moveLastSlide();
    
    function changeSlideLeft() {
        carouselList.animate({'marginLeft':-1000}, 500, moveFirstSlide);
        currentSlide++;
        current();
    }
    
    function changeSlideRight() {
        carouselList.animate({'marginLeft':0}, 500, moveLastSlide);
        currentSlide--;
        current();
    }
    
    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:-500});
    }
    
    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-500});
    }
    
// Stop and restart interval & prev/next buttons
    
    function stopSlider() {
        clearInterval(interval);
    }
    
    function restartSlider() {
        interval = setInterval(changeSlideLeft, 5000);
    }
    
    prevButton.click(changeSlideRight).hover(stopSlider, restartSlider);
    nextButton.click(changeSlideLeft).hover(stopSlider, restartSlider);
    carouselControl.hover(stopSlider, restartSlider);
    
// Active control circle    
    
    function current() {
        if (currentSlide > 4) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = 4;
        }
        
        carouselControl.find('li').each(function(index, elem) {
            if (carouselControl.find('li').index(elem) == currentSlide) {
                carouselControl.find(elem).addClass('active');
            } else {
                carouselControl.find(elem).removeClass('active');
            }
        });
    }

// Change slide by control circles
    
    carouselControl.find('li').click(function() {
        currentClick = $(this).index();
        var diff = Math.abs(currentClick - currentSlide);
        if (currentClick > currentSlide) {
            for (i=0 ; i<diff ; i++) {
                changeSlideLeft();
            }
        } else if (currentClick < currentSlide) {
            for (i=0 ; i<diff ; i++) {
                changeSlideRight();
            }
        }
    });
    
    
});