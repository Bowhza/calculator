let previousNumber = document.getElementById("previous-number");
let currentNumber = document.getElementById("current-number");
let allowDecimal = true;
let allowPrevious = true;

const numbers = Array.from(document.querySelector(".button-container").querySelectorAll(".button"));
numbers.forEach(element => {
    element.addEventListener("click", () => {
        if(currentNumber.textContent == "0"){
            currentNumber.textContent = "";
        };
        currentNumber.textContent += element.textContent;
    });
});

const operations = Array.from(document.querySelector(".button-container").querySelectorAll(".operation"));
const operationList = ["*", "/", "+", "-"]

operations.forEach(element => {
    element.addEventListener("click", () => {
        if(!operationList.some(x => currentNumber.textContent.includes(x))){
            currentNumber.textContent += ` ${element.textContent} `;
            operation = element.textContent;
            allowDecimal = true;
            allowPrevious = true;
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
    currentNumber.textContent = "0";
    previousNumber.textContent = "";
    allowDecimal = true;
});

const previousButton = document.getElementById("previous");
previousButton.addEventListener("click", () => {
    if(allowPrevious) {
        if(currentNumber.textContent == "0"){
            currentNumber.textContent = "";
        }
        currentNumber.textContent += previousNumber.textContent;
        allowPrevious = false
    };
})

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
    let screenString = currentNumber.textContent.split(operation);
    let firstNumber = parseFloat(screenString[0]);
    let secondNumber = parseFloat(screenString[1]);
    if (isNaN(firstNumber)){
        firstNumber = 0
    } else if (isNaN(secondNumber)){
        secondNumber = 0;
    };

    if(typeof(operation) == undefined) {
        currentNumber.textContent && previousNumber.textContent == "0";
    };

    if (operation == "+"){
        let sum = addition(firstNumber, secondNumber);
    }
    else if (operation == "-"){
        let difference = subtraction(firstNumber, secondNumber);
    }
    else if (operation == "*"){
        let product = multiplication(firstNumber, secondNumber);
    }
    else if (operation == "/") {
        let quotient = division(firstNumber, secondNumber);
    };
    
    if (!currentNumber.textContent.includes(".")){
        allowDecimal = true;
    };
    allowPrevious = true;
});

const addition = (a, b) => {
    sum = a + b;
    previousNumber.textContent = sum;
    currentNumber.textContent = 0;
};

const subtraction = (a, b) => {
    difference = a - b;
    previousNumber.textContent = difference;
    currentNumber.textContent = 0;
};

const multiplication = (a, b) => {
    product = a * b;
    previousNumber.textContent = product;
    currentNumber.textContent = 0;
};

const division = (a, b) => {
    quotient = (a / b);
    previousNumber.textContent = quotient;
    currentNumber.textContent = 0;
};
