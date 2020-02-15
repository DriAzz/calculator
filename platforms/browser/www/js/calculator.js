var calcData = [];

// Calculator Keyboard Controls
window.addEventListener("keydown", function (event) {

    /* KEYBOARD */

    if (event.keyCode == "8") {
        calcData.pop();
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "49") {
        calcData.push(1);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "50") {
        calcData.push(2);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "51") {
        calcData.push(3);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "52") {
        calcData.push(4);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "53") {
        calcData.push(5);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "54") {
        calcData.push(6);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "55") {
        calcData.push(7);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "56") {
        calcData.push(8);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "57") {
        calcData.push(9);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "48") {
        calcData.push(0);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    /* NUMPAD */

    if (event.keyCode == "35") {
        calcData.push(1);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "40") {
        calcData.push(2);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "34") {
        calcData.push(3);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "37") {
        calcData.push(4);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "12") {
        calcData.push(5);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "39") {
        calcData.push(6);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "36") {
        calcData.push(7);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "38") {
        calcData.push(8);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "33") {
        calcData.push(9);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }

    if (event.keyCode == "45") {
        calcData.push(0);
        console.log(calcData);
        document.getElementById("display").innerHTML = calcData.join("");
    }
});

function getNumber1() {
    calcData.push(1);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber2() {
    calcData.push(2);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber3() {
    calcData.push(3);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber4() {
    calcData.push(4);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber5() {
    calcData.push(5);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber6() {
    calcData.push(6);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber7() {
    calcData.push(7);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber8() {
    calcData.push(8);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber9() {
    calcData.push(9);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}

function getNumber0() {
    calcData.push(0);
    console.log(calcData);
    document.getElementById("display").innerHTML = calcData.join("");
}









function clearDisplay() {
    console.log(calcData);
    if (calcData != "") {
        calcData = [];
        document.getElementById("display").innerHTML = calcData;
        console.log(calcData);
    } else {
        alert("Display is empty!");
    }
}

function sumNumbers() {

}

function subNumbers() {

}

function multiNumbers() {

}

function divNumbers() {

}

function equal() {

}