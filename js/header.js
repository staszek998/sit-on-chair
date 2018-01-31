/* var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function changeSlides(n) {
    console.log('Changing slide by' + n);
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

var nextSlide = document.querySelector('.fa-angle-right');
nextSlide.addEventListener('click', changeSlides(1));

var prevSlide = document.querySelector('.fa-angle-left');
prevSlide.addEventListener('click', changeSlides(-1)); */

/* ******************************** */

var nextButton = document.querySelector(".fa-angle-right");
var prevButton = document.querySelector(".fa-angle-left");
var lis = document.querySelector('div.slider').querySelectorAll("li");
var indexOfImg = 0;

console.log(nextButton);
console.log(prevButton);
console.log(indexOfImg);
console.log(lis);

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