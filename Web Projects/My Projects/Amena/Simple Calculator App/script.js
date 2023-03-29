// Thank you Amena for the challenge. I have included validation functions for the inputs such that
// the user enters valid input for the calculator app to be effective

let op = window.prompt("Enter operation [ +, -, *, / ]").toString();
calculate();
function calculate() {
  if (op == "+" || op == "-" || op == "*" || op == "/") {
    let firstNumber = parseInt(validateFirstNumber());
    let secondNumber = parseInt(validateSecondNumber());
    switch (op) {
      case "/":
        document.write(
          firstNumber +
            " / " +
            secondNumber +
            " = " +
            firstNumber / secondNumber
        );
        break;
      case "+":
        document.write(
          firstNumber +
            " + " +
            secondNumber +
            " = " +
            (firstNumber + secondNumber)
        );
        break;
      case "*":
        document.write(
          firstNumber +
            " * " +
            secondNumber +
            " = " +
            firstNumber * secondNumber
        );
        break;
      case "-":
        document.write(
          firstNumber +
            " - " +
            secondNumber +
            " = " +
            (firstNumber - secondNumber)
        );
        break;
      default:
        document.write("Thank you for using our calculator");
    }
  } else {
    op = window.prompt("Enter valid operator [+, -, *, /]").toString();
    calculate();
  }
}
function validateFirstNumber() {
  let number = window.prompt("Enter first number");
  if (number.match(/^[a-zA-z]+$/)) {
    validateFirstNumber();
  } else {
    return number;
  }
}
function validateSecondNumber() {
  let number = window.prompt("Enter second number");
  if (number.match(/^[a-zA-z]+$/)) {
    validateSecondNumber();
  } else {
    return number;
  }
}
