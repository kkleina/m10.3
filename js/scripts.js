$(function() {
    var carouselList = $('#carousel ul'),
        leftButton = $('#js-leftButton'),
        rightButton = $('#js-rightButton'),
        firstItem = carouselList.find('li:first'),
        lastItem = carouselList.find('li:last');
    
    var interval = setInterval(changeSlideLeft, 5000);
    firstItem.before(lastItem);
    carouselList.css({marginLeft:-500});
    
    function changeSlideLeft() {
        carouselList.animate({'marginLeft':-1000}, 500, moveFirstSlide);
    }
    
    function changeSlideRight() {
        carouselList.animate({'marginLeft':0}, 500, moveLastSlide);
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
    
    function stopSlider() {
        clearInterval(interval);
    }
    
    function restartSlider() {
        interval = setInterval(changeSlideLeft, 5000);
    }
    
    $('#js-leftButton').click(changeSlideLeft).hover(stopSlider, restartSlider);
    
    $('#js-rightButton').click(changeSlideRight).hover(stopSlider, restartSlider);
    
});