var planBasic = document.querySelector("div.pricing-plan.basic");
var planStandard = document.querySelector("div.pricing-plan.standard");
var planPremium = document.querySelector("div.pricing-plan.premium");
var buttonBasic = planBasic.querySelector("button");
var buttonStandard = planStandard.querySelector("button");
var buttonPremium = planPremium.querySelector("button");

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

function changeSelection(button) {
  var selected = whichSelected();
  if (selected == 0 || selected == button.parentElement) {
    button.parentElement.classList.toggle("selected");
    if (selected == 0) {
      button.innerText = "detach";
    } else {
      button.innerText = "append";
    }
  } else {
    selected.classList.toggle("selected");
    selected.lastElementChild.innerText = "append";
    button.parentElement.classList.toggle("selected");
    button.innerText = "detach";
  }
}

buttonBasic.addEventListener("click", function() {
  changeSelection(this);
});

buttonStandard.addEventListener("click", function() {
  changeSelection(this);
});

buttonPremium.addEventListener("click", function() {
  changeSelection(this);
});
