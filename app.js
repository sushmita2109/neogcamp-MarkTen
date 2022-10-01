const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message1 = document.querySelector("#message-one");

const message2 = document.querySelector("#message-two");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const proceedBtn = document.querySelector("#proceed");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const toggleElement = document.querySelector("#toggle-element");
const changeTable = document.querySelector(".change-table");
toggleElement.style.display = "none";

function tableOpen() {

  if (billAmount.value) {
    hideMessage1();
    toggleElement.style.display = "block";
    checkButton.addEventListener("click", function validateBillAndCashAmount() {
      hideMessage2();

      changeTable.style.display = "none";
      if (Number(cashGiven.value) >= Number(billAmount.value) && Number(billAmount.value) > 0) {


        const amountToBeReturned = cashGiven.value - billAmount.value;
        caluclateChange(amountToBeReturned);
        changeTable.style.display = "block";

      } else {
        showMessage2("Do you wanna wash plates?");
        changeTable.style.display = "none";

      }
    });
  } else {
    showMessage1("please enter valid values");
  }
}
proceedBtn.addEventListener("click", tableOpen);
changeTable.style.display = "none";



function caluclateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    noOfNotes[i].innerHTML = "";
    const numberOfNotes = Math.trunc(
      amountToBeReturned / availableNotes[i]);

    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }

}

function showMessage1(msg) {
  message1.style.display = "block";
  message1.innerText = msg;
}

function hideMessage2() {
  message2.style.display = "none";

}

function hideMessage1() {
  message1.style.display = "none";

}

function showMessage2(msg) {
  message2.style.display = "block";
  message2.innerText = msg;
}