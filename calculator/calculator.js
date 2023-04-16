let displayValue = document.querySelector("#display");
let firstNumber = null;
let secondNumber = null;
let operator = null;
let modeBtn = document.querySelector("#mode");
let mode = true;

function lightMode() {
    document.querySelector("body").style.background = "white";
    document.querySelector(".card").style.background = "white";
    document.querySelector(".card").style.color = "black";
    document.querySelector(".card").style.boxShadow = "none";
    let numbers_btn = document.querySelectorAll(".numbers_btn");
    let operators_btn = document.querySelectorAll(".operators_btn");
    numbers_btn.forEach(Element => {
        Element.style.background = "white";
        Element.style.color = "black";

    })
    operators_btn.forEach(Element => {
        Element.style.background = "white";
        Element.style.color = "black";
    })
    modeBtn.innerHTML = "<i class='fa fa-moon' aria-hidden='true'></i>";
    modeBtn.title = "DarkMode";
    modeBtn.style.color = "white";
}
function darkMode() {
    document.querySelector("body").style.background = "black";
    document.querySelector(".card").style.background = "black";
    document.querySelector(".card").style.color = "white";
    document.querySelector(".card").style.boxShadow = "0px 0px 5px 5px gray";
    let numbers_btn = document.querySelectorAll(".numbers_btn");
    let operators_btn = document.querySelectorAll(".operators_btn");
    numbers_btn.forEach(Element => {
        Element.style.background = "gray";
        Element.style.color = "black";

    })
    operators_btn.forEach(Element => {
        Element.style.background = "black";
        Element.style.color = "white";
    })

    modeBtn.innerHTML = "<i class='fa fa-sun' aria-hidden='true'></i>";
    modeBtn.title = "LightMode";
    modeBtn.style.color = "white";

}

function toggleMode() {
    if (mode == true) {
        darkMode();
        mode = false;
    }
    else if (mode == false) {
        lightMode();
        mode = true;
    }
}
function display_value(values) {
    if (displayValue.innerText == 0) {
        displayValue.innerText = values;
    } else {
        displayValue.innerText += values;
    }
    set_value(displayValue.innerText)
}

function set_value(value) {
    if (operator == null) {
        firstNumber = value;
    }
    else {
        secondNumber = value;
    }
}

function set_operator(value) {
    operator = value;
    displayValue.innerText = 0;
}
function backSpace() {
    if (operator == null) {
        firstNumber = displayValue.innerText = displayValue.innerText.slice(0, -1);
    }
    else {
        secondNumber = displayValue.innerText = displayValue.innerText.slice(0, -1);
    }

}
function clearAll() {
    displayValue.innerText = 0;
    firstNumber = null;
    secondNumber = null;
    operator = null;
}
function solve() {
    switch (operator) {
        case "+":
            displayValue.innerText = 0;
            display_value(parseInt(firstNumber) + parseInt(secondNumber));
            firstNumber = displayValue.innerText;
            break;
        case "-":
            displayValue.innerText = 0;
            display_value(parseInt(firstNumber) - parseInt(secondNumber));
            firstNumber = displayValue.innerText;
            break;
        case "*":
            displayValue.innerText = 0;
            display_value(parseInt(firstNumber) * parseInt(secondNumber));
            firstNumber = displayValue.innerText;
            break;
        case "/":
            displayValue.innerText = 0;
            display_value(parseInt(firstNumber) / parseInt(secondNumber));
            firstNumber = displayValue.innerText;
            break;
        default:
            displayValue.innerText = "!ERROR";
            break;
    }
}
