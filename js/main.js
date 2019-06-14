$(function () {
    'use strict';

    //Adjust Slider Height to cover up all the screen size except (minus) the upper bar and navbar divs (instead of using CSS 100vh "ViewPort height")
    //console.log($('.upper-bar').height(), $('.upper-bar').innerHeight());
    var winH   = $(window).height(),//the window height
        upperH = $('.upper-bar').innerHeight(),//the upper bar div inner height including padding
        navH   = $('.navbar').innerHeight();//the navbar div inner height including padding
    $('.slider, .carousel-item').height(winH - (upperH + navH));

    //Featured Work Shuffle
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        //console.log($(this).data('class'));
        if ($(this).data('class') === 'all') {//If the All button is clicked
            $('.shuffle-imgs .col-md').css('opacity', 1);
        } else {//If any buttons other than All button are clicked
            $('.shuffle-imgs .col-md').css('opacity', .08);
            console.log($(this).data('class'));
            console.log($($(this).data('class')));//Selecting the element itself. For Example: $('.logos')
            $($(this).data('class')).parent().css('opacity', 1);//Show the parent div of the <img>
        }
    });

});