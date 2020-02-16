var displayData = [];
var globalMath = [];

var buttonAdd = document.getElementById("buttonJS04").value;
var buttonSub = document.getElementById("buttonJS08").value;
var buttonMul = document.getElementById("buttonJS12").value;
var buttonDiv = document.getElementById("buttonJS16").value;

const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
const subReducer = (accumulator, currentValue) => accumulator - currentValue;
const multReducer = (accumulator, currentValue) => accumulator * currentValue;
const divReducer = (accumulator, currentValue) => accumulator / currentValue;


function clearDisplay() {
    var checkDisplay = document.getElementById("display").value;
    if (checkDisplay != "") {
        displayData = [];
        globalMath = [];
        document.getElementById("display").innerHTML = displayData;
        console.log("Cleared displayData: " + displayData);
    } else {
        alert("Screen is empty!");
    }
}

function sumNumbers() {
    var getNewValue = document.getElementById("display").value = displayData.join("");
    console.log("New Value: " + getNewValue + " | globalMath: " + globalMath + " | displayData: " + displayData);

    if (displayData != "") {
        displayData = [];
        globalMath.push(parseInt(getNewValue));
        console.log("Cleared displayData: " + displayData + " | Added to globalMath: " + globalMath);
    }

    if (globalMath != "") {
        var sumAnswer = globalMath.reduce(sumReducer);
        console.log("This is the sum: " + sumAnswer); //Getting the sum;
        document.getElementById("display").innerHTML = sumAnswer;
    }
}

function equal() {
    var getFinalNumber = document.getElementById("display").value = displayData.join("");  //const or let will fix var update;
    console.log("Final Number: " + getFinalNumber);

    if (getFinalNumber != "") {
        globalMath.push(parseInt(getFinalNumber));
        console.log("Pushing last number to globalMath : " + globalMath);
    } else {
        alert("Please enter a value!");
    }

    if (displayData != "") {
        displayData = [];
    }



    const answer = globalMath.reduce(sumReducer);
    document.getElementById("display").innerHTML = answer;
    console.log("displayData: " + displayData);

}