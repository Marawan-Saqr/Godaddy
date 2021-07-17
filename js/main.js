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
            background: "#fff",
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


    //.menu .left ul .third
    $(window).scroll(function(){
        if($(window).scrollTop() > 2343) {
            $(".menu .left ul .first").css("border-bottom", "none");
            $(".menu .left ul .second").css("border-bottom", "none");
            $(".menu .left ul .third").css("border-bottom", "1px solid aqua");

        } else if ($(window).scrollTop() < 2343) {
            $(".menu .left ul .third").css("border-bottom", "none");
        }
    });

    //.menu .left ul .fourth
    $(window).scroll(function(){
        if($(window).scrollTop() > 2854) {
            $(".menu .left ul .first").css("border-bottom", "none");
            $(".menu .left ul .second").css("border-bottom", "none");
            $(".menu .left ul .third").css("border-bottom", "none");
            $(".menu .left ul .fourth").css("border-bottom", "1px solid aqua");

        } else if ($(window).scrollTop() < 2854) {
            $(".menu .left ul .fourth").css("border-bottom", "none");
        }
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 3345) {
            $(".menu .left ul .first").css("border-bottom", "none");
            $(".menu .left ul .second").css("border-bottom", "none");
            $(".menu .left ul .third").css("border-bottom", "none");
            $(".menu .left ul .fourth").css("border-bottom", "none");
        }      
    });

    // show paragraph in section questions
    $(".down .q-one").click(function(){
        $(".down .q-one p").fadeToggle();
    });

    $(".down .q-two").click(function(){
        $(".down .q-two p").fadeToggle();
    });

    $(".down .q-three").click(function(){
        $(".down .q-three p").fadeToggle();
    });

    $(".down .q-four").click(function(){
        $(".down .q-four p").fadeToggle();
    });

    $(".down .q-five").click(function(){
        $(".down .q-five p").fadeToggle();
    });

    // show and hide model in section window

    $(".window h6").click(function(){
        $(".window .modal").show();
    })

    $(".window .modal .close").click(function(){
        $(".window .modal").hide();
    })

    $(".window .modal .close-two").click(function(){
        $(".window .modal").hide();
    })

}); // document


// plugins
new WOW().init();        // wow.js

var scroll = new SmoothScroll('a[href*="#"]');     // smooth scroll

$(document).ready(function(){                     // owl.js
    $('.owl-carousel').owlCarousel();
  });