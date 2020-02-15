var displayData = [];
var sumArray = [];
var subArray = [];
var multArray = [];
var divArray = [];
var answerHistory = [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function clearDisplay() {
    console.log(displayData);
    if (displayData != "") {
        displayData = [];
        sumArray = [];
        subArray = [];
        multArray = [];
        divArray = [];
        document.getElementById("display").innerHTML = displayData;
        console.log(displayData);
    } else {
        alert("Display is empty!");
    }
}

function sumNumbers() {
    //Assigning a value to getSumNumber
    var getSumNumber = document.getElementById("display").value = displayData.join("");
    let addSign = "+";
    sumArray.push(parseInt(getSumNumber));

    //Adding Logic
    if (sumArray != "") {
        
    }
    
    if (displayData != "") {
        
    }


    // //getCurrentValue sets current value from displayData array;
    // var getCurrentValue = document.getElementById("display").value = displayData.join("");
    // console.log("Converting displayData array to numbers: " + getCurrentValue);

    // //updating sumArray;
    // sumArray.push(parseInt(getCurrentValue));
    // console.log("sumArray: " + sumArray);

    // //Emptying calData array;
    // displayData = [];
    // document.getElementById("display").innerHTML = displayData;
}

function subNumbers() {

}

function multiNumbers() {

}

function divNumbers() {

}

function equal() {



    // //Get final value from display div;
    // var getFinalNumber = document.getElementById("display").value = displayData.join("");

    // if (sumArray != "") {
    //     sumArray.push(parseInt(getFinalNumber));
    //     var getAnswer = sumArray.reduce(reducer);
    //     sumArray = [];
    //     console.log("sumArray: " + sumArray);
    //     console.log("Answer: " + getAnswer);
    // }

    // if (sumArray == "") {
    //     sumArray.push(parseInt(getAnswer));
    //     console.log("sumArray new value: " + sumArray);
    // }

    // if (displayData != "") {
    //     displayData = [];
    //     console.log("displayData: " + displayData);
    //     displayData.push(parseInt(getAnswer));
    // }

    // document.getElementById("display").innerHTML = getAnswer;
}