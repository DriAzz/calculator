var displayData = [];
// var sumArray = [];
// var subArray = [];
// var divideArray = [];
// var multiplicationArray = [];

var getFirstValue;
var getFinalValue;
var check;
var answer;


function sumNumbers() {
    // const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
    getFirstValue = document.getElementById("display").value = displayData.join("");
    // sumArray.push(parseInt(getFirstValue));
    check = "+";
    // console.log("First Value: " + getFirstValue + "||" + "sumArray: " + sumArray);

    if (displayData != "") {
        displayData = [];
        console.log(getFirstValue + check);
    }

    // if (sumArray != "") {
    //     answer = sumArray.reduce(sumReducer);
    //     getFirstValue = answer;
    //     document.getElementById("display").innerHTML = getFirstValue;
    //     console.log("Increment Answer: " + answer);
    //     displayData = [];
    // }
}

function subNumbers() {
    const subReducer = (accumulator, currentValue) => accumulator - currentValue;
    getFirstValue = document.getElementById("display").value = displayData.join("");
    subArray.push(parseInt(getFirstValue));
    check = "-";
    console.log("First Value: " + getFirstValue + "||" + "subArray: " + subArray);

    if (displayData != "") {
        displayData = [];
        console.log(getFirstValue + check);
    }

    if (subArray != "") {
        answer = subArray.reduce(subReducer);
        getFirstValue = answer;
        document.getElementById("display").innerHTML = getFirstValue;
        console.log("Increment Answer: " + answer);
        displayData = [];
    }
}

function multiplyNumbers() {
    const multReducer = (accumulator, currentValue) => accumulator * currentValue;
    getFirstValue = document.getElementById("display").value = displayData.join("");
    multiplicationArray.push(parseInt(getFirstValue));
    check = "*";
    console.log("First Value: " + getFirstValue + "||" + "multArray: " + multiplicationArray);

    if (displayData != "") {
        displayData = [];
        console.log(getFirstValue + check);
    }

    if (sumArray != "") {
        answer = multiplicationArray.reduce(multReducer);
        getFirstValue = answer;
        document.getElementById("display").innerHTML = getFirstValue;
        console.log("Increment Answer: " + answer);
        displayData = [];
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
    sumArray = [];
    subArray = [];
    multiplicationArray = [];
    divideArray = [];

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