var displayData = [];
var getFirstValue;
var getSecondValue;
var getFinalValue;
var check;
var answer;
var i = 0;


function sumNumbers() {
    check = "+";
    i++;  //Incrementing

    if (i == 1) {
        getFirstValue = document.getElementById("display").value = displayData.join("");
        console.log("First Value: " + getFirstValue);
    }

    if (i == 2) {
        getSecondValue = document.getElementById("display").value = displayData.join("");
        var sum = parseInt(getFirstValue) + parseInt(getSecondValue);
        console.log("Second Value: " + getSecondValue + " | " + "Sum: " + sum);
        document.getElementById("display").innerHTML = sum;
        getFirstValue = sum;
        i--;
    }

    if (displayData != "") {
        displayData = [];
        console.log(getFirstValue + check);
    }

    console.log(i);
}

function subNumbers() {
    check = "-";
    i++;  //Incrementing

    if (i == 1) {
        getFirstValue = document.getElementById("display").value = displayData.join("");
        console.log("First Value: " + getFirstValue);
    }

    if (i == 2) {
        getSecondValue = document.getElementById("display").value = displayData.join("");
        var sub = parseInt(getFirstValue) - parseInt(getSecondValue);
        console.log("Second Value: " + getSecondValue + " | " + "Sub: " + sub);
        document.getElementById("display").innerHTML = sub;
        getFirstValue = sub;
        i--;
    }

    if (displayData != "") {
        displayData = [];
        console.log(getFirstValue + check);
    }

    console.log(i);
}

function multiplyNumbers() {
    check = "x";
    i++;  //Incrementing

    if (i == 1) {
        getFirstValue = document.getElementById("display").value = displayData.join("");
        console.log("First Value: " + getFirstValue);
    }

    if (i == 2) {
        getSecondValue = document.getElementById("display").value = displayData.join("");
        var mult = parseInt(getFirstValue) * parseInt(getSecondValue);
        console.log("Second Value: " + getSecondValue + " | " + "Multiply: " + mult);
        document.getElementById("display").innerHTML = mult;
        getFirstValue = mult;
        i--;
    }

    if (displayData != "") {
        displayData = [];
        console.log(getFirstValue + check);
    }

    console.log(i);
}

function divideNumbers() {
    check = "/";
    i++;  //Incrementing

    if (i == 1) {
        getFirstValue = document.getElementById("display").value = displayData.join("");
        console.log("First Value: " + getFirstValue);
    }

    if (i == 2) {
        getSecondValue = document.getElementById("display").value = displayData.join("");
        var div = parseInt(getFirstValue) / parseInt(getSecondValue);
        console.log("Second Value: " + getSecondValue + " | " + "Divide: " + div);
        document.getElementById("display").innerHTML = div;
        getFirstValue = div;
        i--;
    }

    if (displayData != "") {
        displayData = [];
        console.log(getFirstValue + check);
    }

    console.log(i);
}

function equal() {
    i = 0;
    getFinalValue = document.getElementById("display").value = displayData.join("");
    console.log(getFinalValue);

    if (check == "+") {
        answer = parseInt(getFirstValue) + parseInt(getFinalValue);
        console.log("Answer: " + answer);
        document.getElementById("display").innerHTML = answer;
        check = "";
        displayData = [];
    }

    if (displayData == "") {
        displayData.push(answer);
    }

    if (check == "-") {
        answer = parseInt(getFirstValue) - parseInt(getFinalValue);
        document.getElementById("display").innerHTML = answer;
        console.log("Answer: " + answer);
        check = "";
        displayData = [];
        getFirstValue = answer;
    }

    if (displayData == "") {
        displayData.push(answer);
    }

    if (check == "*") {
        answer = parseInt(getFirstValue) * parseInt(getFinalValue);
        document.getElementById("display").innerHTML = answer;
        console.log("Answer: " + answer);
        check = "";
        displayData = [];
        getFirstValue = answer;
    }

    if (displayData == "") {
        displayData.push(answer);
    }

    if (check == "/") {
        answer = parseInt(getFirstValue) / parseInt(getFinalValue);
        document.getElementById("display").innerHTML = answer;
        console.log("Answer: " + answer);
        check = "";
        displayData = [];
        getFirstValue = answer;
    }

    if (displayData == "") {
        displayData.push(answer);
    }
}

function clearScreen() {
    if (displayData != "") {
        displayData = [];
        document.getElementById("display").innerHTML = displayData;
    } else {
        alert("Screen is not clear!");
    }
}