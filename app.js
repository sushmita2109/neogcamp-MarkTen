const billAmount = document.querySelector("#bill-amount");
const givenAmount = document.querySelector("#cash-given");
const checkbtn = document.querySelector("#check-button")
const displayResult = document.querySelector("#result")
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000 , 500 , 100 , 50 , 20 , 10 , 5 , 1 ]
//console.log(givenAmount.value)


function checkValidity(){
    hideMessage();
    if ( billAmount.value > 0 )
    {
        if (   Number(givenAmount.value)  > Number(billAmount.value)){
            
            const calculateChange = givenAmount.value - billAmount.value;
            result("you have change left with "+calculateChange +" Rs...")
            displayAmount(calculateChange);
        }else if(givenAmount.value === billAmount.value){
            result("You have no exchange left")
            
        }
        else{
            result("Do you wanna wash plates? Or\n  GIVE SOME CASH")
        }
    }else{
        result("give correct amount")
    }
}

function result(msg)
{
    displayResult.style.display="block";
    displayResult.innerText = msg;
}
function hideMessage(){
    displayResult.style.display = "none";
}
function displayAmount(calculateChange){
    for(let i = 0 ; i < availableNotes.length; i++)
    {
        const noOfNotes = Math.trunc(calculateChange / availableNotes[i]);
        calculateChange %= availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes;
    }
}
checkbtn.addEventListener("click",checkValidity);