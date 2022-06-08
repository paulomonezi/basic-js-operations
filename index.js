function sum(number1, number2) {
    let numberSum = number1 + number2;
    return 'A soma dos dois números é: ' + numberSum;
}

function subtraction(number1, number2) {
    let numberSubtraction = number1 - number2;
    return 'O resultado da substração dos dois números é: ' + numberSubtraction;
}

function division(number1, number2) {
    let numberDivision = number1 / number2;
    return 'A divisão dos dois números é: ' + numberDivision;
}

function multiplication(number1, number2) {
    let numberMultiplication = number1 * number2;
    return 'A multiplicação dos dois números é: ' + numberMultiplication;
}

const firstNumber = 5, secondNumber = 10;

const sumResult = sum(firstNumber, secondNumber)
const subtractionResult = subtraction(firstNumber, secondNumber)
const divisionResult = division(firstNumber, secondNumber)
const multiplicationResult = multiplication(firstNumber, secondNumber)

console.log('Resultado das funções:')
console.log(sumResult)
console.log(subtractionResult)
console.log(divisionResult)
console.log(multiplicationResult)



