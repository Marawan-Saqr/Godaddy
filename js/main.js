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































// plugins
new WOW().init();        // wow.js