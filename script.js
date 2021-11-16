let previousNumber = document.getElementById("previous-number");
let currentNumber = document.getElementById("current-number");
let allowDecimal = true;

const numbers = Array.from(document.querySelector(".button-container").querySelectorAll(".button"));
numbers.forEach(element => {
    element.addEventListener("click", () => {
        if(currentNumber.textContent == "0"){
            currentNumber.textContent = "";
        };
        currentNumber.textContent += element.textContent;
    });
});

const operands = Array.from(document.querySelector(".button-container").querySelectorAll(".operand"));
const operandList = ["*", "/", "+", "-"]

operands.forEach(element => {
    element.addEventListener("click", () => {
        if(!operandList.some(x => currentNumber.textContent.includes(x))){
            currentNumber.textContent += ` ${element.textContent} `;
            operand = element.textContent;
            allowDecimal = true;
        };
    });
});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
    let newString = currentNumber.textContent.slice(0, -1);
    if (newString == ""){
        newString = "0";
        allowDecimal = true; 
    };
    currentNumber.textContent = newString;
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
    currentNumber.innerText = "0";
    previousNumber.innerText = "";
    allowDecimal = true;
});

const decimalButton = document.getElementById("decimal-button");

decimalButton.addEventListener("click", () => {
    if (!currentNumber.textContent.includes(".")){
        allowDecimal = true;
    }
    
    if (allowDecimal) {
        currentNumber.textContent += ".";
    };
    allowDecimal = false; 
});

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
    let screenString = currentNumber.textContent.split(operand);
    let firstNumber = parseFloat(screenString[0]);
    let secondNumber = parseFloat(screenString[1]);
    if (operand == "+"){
        let sum = addition(firstNumber, secondNumber);
    }
    else if (operand == "-"){
        let difference = subtraction(firstNumber, secondNumber);
    }
    else if (operand == "*"){
        let product = multiplication(firstNumber, secondNumber);
    }
    else if (operand == "/") {
        let quotient = division(firstNumber, secondNumber);
    }
    
    if (!currentNumber.textContent.includes(".")){
        allowDecimal = true;
    }
});

const addition = (a, b) => {
    sum = a + b;
    previousNumber.textContent = sum;
    currentNumber.textContent = sum;
};

const subtraction = (a, b) => {
    difference = a - b;
    previousNumber.textContent = difference;
    currentNumber.textContent = difference;
};

const multiplication = (a, b) => {
    product = a * b;
    previousNumber.textContent = product;
    currentNumber.textContent = product;
};

const division = (a, b) => {
    quotient = (a / b);
    previousNumber.textContent = quotient;
    currentNumber.textContent = quotient;
};
