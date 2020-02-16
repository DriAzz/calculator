var displayData = [];
var globalMath = [];
var triggerCheck = [];

//Create Trigger Value (null);
var trigger;

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
    var buttonAdd = document.getElementById("buttonJS04").value;
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

    //Assign trigger to button
    trigger = buttonAdd;
    triggerCheck.push(trigger);
    console.log("trigger array: " + triggerCheck);
}

function subNumbers() {
    var getNewValue = document.getElementById("display").value = displayData.join("");
    console.log(getNewValue);
    var buttonSub = document.getElementById("buttonJS08").value;
    console.log("New Value: " + getNewValue + " | globalMath: " + globalMath + " | displayData: " + displayData);

    if (displayData != "") {
        displayData = [];
        globalMath.push(parseInt(getNewValue));
        console.log("Cleared displayData: " + displayData + " | Added to globalMath: " + globalMath);
    }

    if (globalMath != "") {
        var subAnswer = globalMath.reduce(subReducer);
        console.log("This is the sum: " + subAnswer); //Getting the sum;
        document.getElementById("display").innerHTML = subAnswer;
    }

    //Assign trigger to button
    trigger = buttonSub;
    triggerCheck.push(trigger);
    console.log("trigger array: " + triggerCheck);
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

    last = function (array, n) {
        if (array == null)
            return void 0;
        if (n == null)
            return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));
    };

    console.log("Last value in triggerArray: " + last(triggerCheck));
    var check = last(triggerCheck);

    if (check == "+") {
        //displayData get it
        
    }

    if (check == "-") {
        // subNumbers();
    }

    // const answer = globalMath.reduce(sumReducer);
    // document.getElementById("display").innerHTML = answer;
    // console.log("displayData: " + displayData);

}