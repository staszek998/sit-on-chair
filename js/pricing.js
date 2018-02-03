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
