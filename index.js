function faultyCalculator(num1, num2, operator) {
const randomChance = Math.random();

if (operator === '+') {
    return randomChance < 0.1 ? num1 - num2 : num1 + num2;
} else if (operator === '-') {
    return randomChance < 0.1 ? num1 / num2 : num1 - num2;
} else if (operator === '*') {
    return randomChance < 0.1 ? num1 + num2 : num1 * num2;
} else if (operator === '/') {
    return randomChance < 0.1 ? num1 ** num2 : num1 / num2;
} else {
    throw new Error ('Invalid operator');
}
}

document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    const result = faultyCalculator(num1, num2, operator);
    document.getElementById('result').innerText = result;
});