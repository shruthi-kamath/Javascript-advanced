//Take only equation as input (numbers and + - / *)
/* Solving the quation
  2 + 4 * 3 - 7
  2 + 12 - 7
  (2 + (4*3)) - 7
  
  7
*/

// parse ( 2 + 4 * 3 - 7 ) returns 2 + 12 - 7
// parse new equation 2 + 12 - 7 returns 14 - 7
// parse new equation 14 - 7 returns 7const inputElement = document.getElementById("equation");

const inputElement = document.getElementById("equation");
const outputElement = document.getElementById("results");
const form = document.getElementById("equation-form");

const PARANTHESIS_REGEX = /\((?<equation>[^\(\)].*)\)/
const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\S+)\s*(?<operation>[\/\*])\s*(?<operand2>\S+)/; //\dmatch any digits + \s* remove whitespace \S- non while space
const EXPONENT_REGEX = /(?<operand1>\S+)\s*(?<operation>[\^])\s*(?<operand2>\S+)/;
const ADD_SUBTRACT_REGEX = /(?<operand1>\S+)\s*(?<operation>(?<!e)[\-\+])\s*(?<operand2>\S+)/; 

form.addEventListener("submit", e => {
    e.preventDefault()
    const result = parse(inputElement.value)
    outputElement.textContent = result
})

function parse(equation) {
  if (equation.match(PARANTHESIS_REGEX)) {
    const subEquation = equation.match(PARANTHESIS_REGEX).groups.equation
    const result = parse(subEquation)
    const newEquation = equation.replace(PARANTHESIS_REGEX, result)
    return parse(newEquation)
  } else if (equation.match(EXPONENT_REGEX)) { // performing exponent operation ^
    const result = handleMath(equation.match(EXPONENT_REGEX).groups);
    const newEquation = equation.replace(EXPONENT_REGEX, result);
    return parse(newEquation);
  } else if (equation.match(MULTIPLY_DIVIDE_REGEX)) {
    // performing multiplication and division
    const result = handleMath(equation.match(MULTIPLY_DIVIDE_REGEX).groups);
    const newEquation = equation.replace(MULTIPLY_DIVIDE_REGEX, result);
    return parse(newEquation);
  } else if (equation.match(ADD_SUBTRACT_REGEX)) {
    // performing Addition and subtraction
    const result = handleMath(equation.match(ADD_SUBTRACT_REGEX).groups);
    const newEquation = equation.replace(ADD_SUBTRACT_REGEX, result);
    return parse(newEquation);
  } else {
    return parseFloat(equation);
  }
}

function handleMath({ operand1, operand2, operation }) {
    //converting to number
    const number1 = parseFloat(operand1)
    const number2 = parseFloat(operand2)

    //applying operations
    switch (operation) {
      case "*":
        return number1 * number2;
      case "/":
        return number1 / number2;
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "^":
        return number1 ** number2;
    }
}

// function getNextStep() {}
// function solve(step) {}
// function replaceNextStep(equation, step, result) {}