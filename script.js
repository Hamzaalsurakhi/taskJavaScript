
const form = document.getElementById('calculator-form');
const operationInput = document.getElementById('operation');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');


form.addEventListener('submit', function(event) {
    event.preventDefault();

 
    const operation = operationInput.value;
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    
    let result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = 'Cannot divide by zero';
        }
    } else {
        result = 'Invalid operation';
    }

    
    console.log(`Result: ${result}`);
    resultDisplay.innerHTML = `Operation: ${operation}, Numbers: ${num1}, ${num2}<br>Result: ${result}`;
});
