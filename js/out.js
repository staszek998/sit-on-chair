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
__webpack_require__(5);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

// Create function to refresh the PRICE SUM after every change
function checkPriceSum() {
    var sum = 0;
    priceSum.innerText = '';
  var prices = [chairPrice, colourPrice, materialPrice, deliveryPrice];
  for (var i = 0; i < prices.length; i++) {
    if (prices[i].style.display == "block") {
      sum += Number(prices[i].innerText);
    }
  }
  priceSum.innerText = sum + " zł";
  priceSum.style.display = "block";
}

// Catch the arrow buttons
var arrowChair = document.querySelector(
    ".drop_down_list:first-child span.list_arrow"
);
var arrowColour = document.querySelector(
    ".drop_down_list:nth-child(2) span.list_arrow"
);
var arrowMaterial = document.querySelector(
    ".drop_down_list:nth-child(3) span.list_arrow"
);

// Catch the corresponding lists
var listChair = arrowChair.nextElementSibling;
var listColour = arrowColour.nextElementSibling;
var listMaterial = arrowMaterial.nextElementSibling;

// ...and the corresponding spans in PRICE SUM
var chairName = document.querySelector(".summary-panel__col .chair");
var chairPrice = document.querySelector(".summary-panel__col .chair-value");
var colourName = document.querySelector(".summary-panel__col .colour");
var colourPrice = document.querySelector(".summary-panel__col .colour-value");
var materialName = document.querySelector(".summary-panel__col .material");
var materialPrice = document.querySelector(
  ".summary-panel__col .material-value"
);

// Catch all the lists' items
var lis = document.querySelectorAll(".list_panel li");

// Catch the 'delivery' checkbox
var delivery = document.querySelector(".sub-row--delivery input");

// ...and the corresponding span in PRICE SUM
var deliveryName = document.querySelector(".summary-panel__col .delivery");
var deliveryPrice = document.querySelector(
  ".summary-panel__col .delivery-value"
);

// Catch the PRICE SUM
var priceSum = document.querySelector("h5").nextElementSibling;

// Add event listeners to the arrow buttons
arrowChair.addEventListener("click", function() {
  listChair.classList.toggle("visible");
});
arrowColour.addEventListener("click", function() {
  listColour.classList.toggle("visible");
});
arrowMaterial.addEventListener("click", function() {
  listMaterial.classList.toggle("visible");
});

// Add event listeners to the lists' items
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    if (this.className == "chair") {
      var chair = this.innerText;
      var price = 0;
      if (chair == "Claire") {
        price = 250;
      } else if (chair == "Margharita") {
        price = 350;
      } else if (chair == "Selena") {
        price = 450;
      }

      chairName.innerText = "Chair " + chair;
      chairPrice.innerText = price;

      chairName.style.display = "block";
      chairPrice.style.display = "block";
      
      checkPriceSum();

      listChair.classList.toggle("visible");
    } else if (this.className == "colour") {
      var colour = this.innerText;
      var price = 0;
      if (colour == "Red") {
        price = 50;
      } else if (colour == "Black") {
        price = 30;
      } else if (colour == "Orange") {
        price = 80;
      }

      colourName.innerText = colour;
      colourPrice.innerText = price;

      colourName.style.display = "block";
      colourPrice.style.display = "block";
      
      checkPriceSum();

      listColour.classList.toggle("visible");
    } else if (this.className == "material") {
      var material = this.innerText;
      var price = 0;
      if (material == "Textile") {
        price = 0;
      } else if (material == "Leather") {
        price = 200;
      }

      materialName.innerText = material;
      materialPrice.innerText = price;

      materialName.style.display = "block";
      materialPrice.style.display = "block";

      checkPriceSum();
      
      listMaterial.classList.toggle("visible");
    }
  });
}

// Add event listener to the checkbox 'delivery'
delivery.addEventListener("change", function() {
  if (this.checked) {
    deliveryName.style.display = "block";
    deliveryPrice.style.display = "block";
    deliveryPrice.innerText = 25;
    checkPriceSum();
  } else {
    deliveryName.style.display = "none";
    deliveryPrice.style.display = "none";
    checkPriceSum();    
  }
});



/***/ }),
/* 5 */
/***/ (function(module, exports) {

var planBasic = document.querySelector("div.pricing-plan.basic");
var planStandard = document.querySelector("div.pricing-plan.standard");
var planPremium = document.querySelector("div.pricing-plan.premium");
var buttonBasic = planBasic.querySelector("button");
var buttonStandard = planStandard.querySelector("button");
var buttonPremium = planPremium.querySelector("button");

buttonBasic.addEventListener("click", function() {
  switch (whichSelected()) {
    case planBasic:
      planBasic.classList.toggle("selected");
      buttonBasic.innerText = "append";
      break;
    case planStandard:
      planStandard.classList.toggle("selected");
      planBasic.classList.toggle("selected");
      buttonStandard.innerText = "append";
      buttonBasic.innerText = "detach";
      break;
    case planPremium:
      planPremium.classList.toggle("selected");
      planBasic.classList.toggle("selected");
      buttonPremium.innerText = "append";
      buttonBasic.innerText = "detach";
      break;
    case 0:
      planBasic.classList.toggle("selected");
      buttonBasic.innerText = "detach";
  }
});

buttonStandard.addEventListener("click", function() {
  switch (whichSelected()) {
    case planBasic:
      planBasic.classList.toggle("selected");
      planStandard.classList.toggle("selected");
      buttonBasic.innerText = "append";
      buttonStandard.innerText = "detach";
      break;
    case planStandard:
      planStandard.classList.toggle("selected");
      buttonStandard.innerText = "append";
      break;
    case planPremium:
      planPremium.classList.toggle("selected");
      planStandard.classList.toggle("selected");
      buttonPremium.innerText = "append";
      buttonStandard.innerText = "detach";
      break;
    case 0:
      planStandard.classList.toggle("selected");
      buttonStandard.innerText = "detach";
  }
});

buttonPremium.addEventListener("click", function() {
  switch (whichSelected()) {
    case planBasic:
      planBasic.classList.toggle("selected");
      planPremium.classList.toggle("selected");
      buttonBasic.innerText = "append";
      buttonPremium.innerText = "detach";
      break;
    case planStandard:
      planStandard.classList.toggle("selected");
      planPremium.classList.toggle("selected");
      buttonStandard.innerText = "append";      
      buttonPremium.innerText = "detach";
      break;
    case planPremium:
      planPremium.classList.toggle("selected");
      buttonPremium.innerText = "append";
      break;
    case 0:
      planPremium.classList.toggle("selected");
      buttonPremium.innerText = "detach";
  }
});

function whichSelected() {
  var selected = 0;
  var plans = [planBasic, planStandard, planPremium];

  for (var i = 0; i < plans.length; i++) {
    if (plans[i].classList.contains("selected")) {
      selected = plans[i];
    }
  }

  return selected;
}


/***/ })
/******/ ]);