let display = document.getElementById('display');
let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (operation === null || currentInput === '') return;
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result;
    operation = null;
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    previousInput = '';
    display.value = '';
}
