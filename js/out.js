/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var dropdownButton = document.querySelector('.dropdown-button');
var dropdownContent = document.querySelector('.dropdown-content');

dropdownContent.addEventListener('mouseover', function() {
    dropdownButton.style.textShadow = '0 0 8px white';
});

dropdownContent.addEventListener('mouseout', function() {
    dropdownButton.style.textShadow = '0 0 0 white';
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var claire = document.querySelector('.claire');
var margharita = document.querySelector('.margharita');
var claireTitle = claire.querySelector('.products__product-title');
var margharitaTitle = margharita.querySelector('.products__product-title');

// Hide claire product title
claire.addEventListener('mouseover', function() {
    claireTitle.style.opacity = '0';
});
// Show claire product title
claire.addEventListener('mouseout', function() {
    claireTitle.style.opacity = '1';
});

// Hide margharita product title
margharita.addEventListener('mouseover', function() {
    margharitaTitle.style.opacity = '0';
});
// Show margharita product title
margharita.addEventListener('mouseout', function() {
    margharitaTitle.style.opacity = '1';
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var arrowChair = document.querySelector('.drop_down_list:first-child span.list_arrow');
console.log(arrowChair);
var arrowColour = document.querySelector('.drop_down_list:nth-child(2) span.list_arrow');
console.log(arrowColour);
var arrowMaterial = document.querySelector('.drop_down_list:nth-child(3) span.list_arrow');
console.log(arrowMaterial);


/***/ })
/******/ ]);