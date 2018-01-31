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

