var slideIndex = 1;
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
prevSlide.addEventListener('click', changeSlides(-1));