let bill = document.getElementById("bill");
let numberOfPeople = document.getElementById("people");
let buttons = document.querySelectorAll(".btn");
const fivePct = document.getElementById("five");
const tenPct = document.getElementById("ten");
const fifteenPct = document.getElementById("fifteen");
const twentyfivePct = document.getElementById("twentyfive");
const fiftyPct = document.getElementById("fifty");
let custom = document.getElementById("custom");
let tipAmount = document.getElementById("tip-ammount");
let totalAmount = document.getElementById("total-ammount");
const reset = document.getElementById("reset");

fivePct.addEventListener("click", function () {
  calculateTip(0.05);
  activateBtn(fivePct);
});

tenPct.addEventListener("click", function () {
  calculateTip(0.1);
  activateBtn(tenPct);
});

fifteenPct.addEventListener("click", function () {
  calculateTip(0.15);
  activateBtn(fifteenPct);
});

twentyfivePct.addEventListener("click", function () {
  calculateTip(0.25);
  activateBtn(twentyfivePct);
});

fiftyPct.addEventListener("click", function () {
  calculateTip(0.5);
  activateBtn(fiftyPct);
});

custom.addEventListener("click", function () {
  calculateTip(parseFloat(custom.value) / 100);
  activateBtn(custom);
});

function calculateTip(tipPercentage) {
  let billValue = parseFloat(bill.value);
  let numberOfPeopleValue = parseFloat(numberOfPeople.value);

  let tipPerPerson = (billValue * tipPercentage) / numberOfPeopleValue;
  let totalPerPerson =(billValue + billValue * tipPercentage) / numberOfPeopleValue;

  tipAmount.textContent = `$ ${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$ ${totalPerPerson.toFixed(2)}`;
}


function activateBtn(selectedButton) {
  buttons.forEach((button) => {
    if (button === selectedButton) {
      button.classList.add("active-btn");
    } else {
      button.classList.remove("active-btn");
    }
  });
}

reset.addEventListener("click", function () {
  bill.value = "";
  numberOfPeople.value = "";
  custom.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  buttons.forEach((button) => {
    button.classList.remove("active-btn");
  });
});
