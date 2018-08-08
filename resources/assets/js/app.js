/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
///////////////////////////////////////////////////////////////////
/**
 * responsive script start
 */
$(document).ready(function() {
    var width = $(window).width();
    var about = $("#about-padding");
    if(width < 450 && width >= 400) { //获取屏幕的的宽度
        about.css("padding-top", "100px");
    } else if(width < 400 && width >= 375) {
        about.css("padding-top", "80px");
    }else if(width < 375 && width >= 300) {
        about.css("padding-top", "60px");
    }
    else {
        about.css("padding-top", "150px");
    }
});
$(document).ready(function() {
    var width = $(window).width();
    var item2 = document.getElementById("item2");
    if(width < 975) { //获取屏幕的的宽度
        item2.innerHTML = " <div id=\"research-item2-img\" class=\"col-md-4 content-icon\">\n" +
            "                    <i class=\"iconfont icon-rengongzhineng\"></i>\n" +
            "                </div>\n" +
            "                <div id=\"research-item2-info\" class=\"col-md-8 content-words\">\n" +
            "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem blanditiis cum dolore exercitationem laudantium maxime minus molestiae necessitatibus placeat quae quasi, quidem recusandae tempora tempore vel voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem blanditiis cum dolore exercitationem laudantium maxime minus molestiae necessitatibus placeat quae quasi, quidem recusandae tempora tempore vel voluptates!</p>\n" +
            "                </div>";
    }
    else {
        item2.innerHTML = "<div id=\"research-item2-info\" class=\"col-md-8 content-words\">\n" +
            "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem blanditiis cum dolore exercitationem laudantium maxime minus molestiae necessitatibus placeat quae quasi, quidem recusandae tempora tempore vel voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem blanditiis cum dolore exercitationem laudantium maxime minus molestiae necessitatibus placeat quae quasi, quidem recusandae tempora tempore vel voluptates!</p>\n" +
            "                </div>\n" +
            "                <div id=\"research-item2-img\" class=\"col-md-4 content-icon\">\n" +
            "                    <i class=\"iconfont icon-rengongzhineng\"></i>\n" +
            "                </div>";
    }
});
$(window).resize(function() {
    var width = $(this).width();
    var about = $("#about-padding");
    if(width < 450 && width >= 400) {  //获取屏幕的的宽度
        about.css("padding-top", "100px");
    } else if(width < 400 && width >= 375) {
        about.css("padding-top", "80px");
    }else if(width < 375 && width >= 300) {
        about.css("padding-top", "60px");
    }
    else {
        about.css("padding-top", "150px");
    }
});
$(window).resize(function() {
    var width = $(this).width();
    var item2 = document.getElementById("item2");
    //var about = document.getElementById("about-padding");
    var about = $("#about-padding");
    if(width < 975) { //获取屏幕的的宽度
        item2.innerHTML = " <div id=\"research-item2-img\" class=\"col-md-4 content-icon\">\n" +
            "                    <i class=\"iconfont icon-rengongzhineng\"></i>\n" +
            "                </div>\n" +
            "                <div id=\"research-item2-info\" class=\"col-md-8 content-words\">\n" +
            "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem blanditiis cum dolore exercitationem laudantium maxime minus molestiae necessitatibus placeat quae quasi, quidem recusandae tempora tempore vel voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem blanditiis cum dolore exercitationem laudantium maxime minus molestiae necessitatibus placeat quae quasi, quidem recusandae tempora tempore vel voluptates!</p>\n" +
            "                </div>";
    } else {
        item2.innerHTML = "<div id=\"research-item2-info\" class=\"col-md-8 content-words\">\n" +
            "                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem blanditiis cum dolore exercitationem laudantium maxime minus molestiae necessitatibus placeat quae quasi, quidem recusandae tempora tempore vel voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem blanditiis cum dolore exercitationem laudantium maxime minus molestiae necessitatibus placeat quae quasi, quidem recusandae tempora tempore vel voluptates!</p>\n" +
            "                </div>\n" +
            "                <div id=\"research-item2-img\" class=\"col-md-4 content-icon\">\n" +
            "                    <i class=\"iconfont icon-rengongzhineng\"></i>\n" +
            "                </div>";
    }
});
/**
 * responsive script end
 */
///////////////////////////////////////////////////////////////////
/**
 * team members slide script start
 */
$('#team-members').carousel({
    interval: 0,
    keyboard: true,
    pause: 'hover',
    wrap: true
});
/**
 * team members slide script end
 */
///////////////////////////////////////////////////////////////////
/***
 * Sticky Header Start
 */
$(document).ready(function() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if(window.pageYOffset >= 100) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
});
/***
 * Sticky Header End
 */
///////////////////////////////////////////////////////////////////


