var nextButton = document.querySelector(".fa-angle-right");
var prevButton = document.querySelector(".fa-angle-left");
var lis = document.querySelector('div.slider').querySelectorAll("li");
var indexOfImg = 0;

lis[indexOfImg].className += " visible";

nextButton.addEventListener("click", function() {
    console.log("Next button CLICK");
    lis[indexOfImg].classList.toggle("visible");
    indexOfImg++;
    if (indexOfImg == lis.length) {
        indexOfImg = 0;
    }
    lis[indexOfImg].classList.toggle("visible");
})

prevButton.addEventListener("click", function() {
    console.log("Prev button CLICK")
    lis[indexOfImg].classList.toggle("visible");
    indexOfImg--;
    if (indexOfImg == -1) {
        indexOfImg = (lis.length - 1);
    }
    lis[indexOfImg].classList.toggle("visible");
})