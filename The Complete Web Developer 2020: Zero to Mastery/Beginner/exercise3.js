
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

const firstNumber = parseInt(prompt("First number:"));
const secondNumber = parseInt(prompt("Second number:"));

alert(firstNumber + secondNumber);

// BONUS: Make a program that can subtract, multiply, and also divide!

alert("Enter a symbol operation (+, -, *, /):");
operation = prompt("Operation:");
function calculator(operation) {
	switch(operation) {
		case "+":
			num1 = prompt("Frist number:");
			num2 = prompt("Second number:");
			alert(num1 + num2);
			break;
		case "-":
			num1 = prompt("Frist number:");
			num2 = prompt("Second number:");
			alert(num1 - num2);
			break;
		case "*":
			num1 = prompt("Frist number:");
			num2 = prompt("Second number:");
			alert(num1 * num2);
			break;
		case "/":
			num1 = prompt("Frist number:");
			num2 = prompt("Second number:");
			if (num2 != 0) {
				alert(num1 / num2);	
			} else {
				alert("Second number cannot be 0!");
			}
			break;
		default:
			alert("Operation not identified!");
	}
}

calculator(operation);