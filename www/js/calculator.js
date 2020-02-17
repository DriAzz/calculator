var displayData = [];
var globalMath = [];
var triggerCheck = [];

//Create Trigger Value (null);
var trigger;
var getNewValue;

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
    getNewValue = document.getElementById("display").value = displayData.join("");
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
        getNewValue = sumAnswer;
    }

    //Assign trigger to button
    trigger = buttonAdd;
    triggerCheck.push(trigger);
    console.log("trigger array: " + triggerCheck);
}

function subNumbers() {
    getNewValue = document.getElementById("display").value = displayData.join("");
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
        getNewValue = subAnswer;
    }

    //Assign trigger to button
    trigger = buttonSub;
    triggerCheck.push(trigger);
    console.log("trigger array: " + triggerCheck);
}

function multiplyNumbers() {
    getNewValue = document.getElementById("display").value = displayData.join("");
    console.log(getNewValue);
    var buttonMul = document.getElementById("buttonJS12").value;
    console.log("New Value: " + getNewValue + " | globalMath: " + globalMath + " | displayData: " + displayData);

    if (displayData != "") {
        displayData = [];
        globalMath.push(parseInt(getNewValue));
        console.log("Cleared displayData: " + displayData + " | Added to globalMath: " + globalMath);
    }

    if (globalMath != "") {
        var multAnswer = globalMath.reduce(multReducer);
        console.log("This is the sum: " + multAnswer); //Getting the sum;
        document.getElementById("display").innerHTML = multAnswer;
        getNewValue = multAnswer;
    }

    //Assign trigger to button
    trigger = buttonMul;
    triggerCheck.push(trigger);
    console.log("trigger array: " + triggerCheck);
}

function divideNumbers() {
    getNewValue = document.getElementById("display").value = displayData.join("");
    console.log(getNewValue);
    var buttonDiv = document.getElementById("buttonJS16").value;
    console.log("New Value: " + getNewValue + " | globalMath: " + globalMath + " | displayData: " + displayData);

    if (displayData != "") {
        displayData = [];
        globalMath.push(parseInt(getNewValue));
        console.log("Cleared displayData: " + displayData + " | Added to globalMath: " + globalMath);
    }

    if (globalMath != "") {
        var divAnswer = globalMath.reduce(divReducer);
        console.log("This is the sum: " + divAnswer); //Getting the sum;
        document.getElementById("display").innerHTML = divAnswer;
        getNewValue = divAnswer;
    }

    //Assign trigger to button
    trigger = buttonDiv;
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
        var value1 = parseInt(getNewValue);
        var value2 = parseInt(getFinalNumber);
        var answer = value1 + value2;
        document.getElementById("display").innerHTML = answer;
    }

    if (check == "-") {
        var value1 = parseInt(getNewValue);
        var value2 = parseInt(getFinalNumber);
        var answer = value1 - value2;
        document.getElementById("display").innerHTML = answer;
    }

    if (check == "x") {
        var value1 = parseInt(getNewValue);
        var value2 = parseInt(getFinalNumber);
        var answer = value1 * value2;
        document.getElementById("display").innerHTML = answer;
    }

    if (check == "/") {
        var value1 = parseInt(getNewValue);
        var value2 = parseInt(getFinalNumber);
        var answer = value1 / value2;
        document.getElementById("display").innerHTML = answer;
    }
}