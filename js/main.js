// import Elements for header read more
let text = document.getElementById("text");
let readMore = document.getElementById("readMore");


let showMore = () => {
    if (text.classList.contains("display")) {
        text.classList.remove("display");
        readMore.textContent = "Read Less";
    } else {
        text.classList.add("display");
        readMore.textContent = "Read More";
    }
}

readMore.addEventListener("click", showMore);
//==========================================================//
// scrolltop function for section menu

$(document).ready(function(){

    $(window).scroll(function(){
        x = $(window).scrollTop();
        console.log(x);
    })
     

    // .menu .left ul .first
    $(window).scroll(function(){
       if($(window).scrollTop() > 914) {
           $(".menu").css({
            position: "fixed",
            top: "0",
            right: "0",
            left: "0",
            zIndex: "1030",
            background: "rgb(251 238 238)",
           });

           $(".menu .left ul .first").css("border-bottom", "1px solid aqua");
           

       } else if($(window).scrollTop() < 914){
            $(".menu").css("position", "static");
            $(".menu .left ul .first").css("border-bottom", "none");
            $(".menu").css({
                background: "transparent",
                paddingTop: "5px",
            })
       }
    });


    //.menu .left ul .second
    $(window).scroll(function(){
        if($(window).scrollTop() > 1882) {
            $(".menu .left ul .first").css("border-bottom", "none");
            $(".menu .left ul .second").css("border-bottom", "1px solid aqua");

        } else if ($(window).scrollTop() < 1882) {
            $(".menu .left ul .second").css("border-bottom", "none");
        }
    });










}); // document































// plugins
new WOW().init();        // wow.js

var scroll = new SmoothScroll('a[href*="#"]');     // smooth scroll

$(document).ready(function(){                     // owl.js
    $('.owl-carousel').owlCarousel();
  });