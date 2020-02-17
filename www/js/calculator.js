var displayData = [];
var getFirstValue;
var getFinalValue;
var check;
var answer;


function sumNumbers() {
    getFirstValue = document.getElementById("display").value = displayData.join("");
    check = "+";
    console.log("First Value: " + getFirstValue);
    if (displayData != "") {
        displayData = [];
        console.log(check);
    }
}

function subNumbers() {
    getFirstValue = document.getElementById("display").value = displayData.join("");
    check = "-";
    console.log("First Value: " + getFirstValue);
    if (displayData != "") {
        displayData = [];
        console.log(check)
    }
}

function multiplyNumbers() {
    getFirstValue = document.getElementById("display").value = displayData.join("");
    check = "*";
    console.log("First Value: " + getFirstValue);
    if (displayData != "") {
        displayData = [];
        console.log(check)
    }
}

function divideNumbers() {
    getFirstValue = document.getElementById("display").value = displayData.join("");
    check = "/";
    console.log("First Value: " + getFirstValue);
    if (displayData != "") {
        displayData = [];
        console.log(check)
    }
}

function equal() {
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

