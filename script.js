let val1 = Number(prompt("Enter a number: "));
let operator = prompt("Operation to carry out: ");
let val2 = Number(prompt("Enter a number: "));
if (operator === "+") {
	alert(`${val1} ${operator} ${val2} = ${val1 + val2}`);
} else if (operator === "-") {
	alert(`${val1} ${operator} ${val2} = ${val1 - val2}`);
} else if (operator === "*") {
	alert(`${val1} ${operator} ${val2} = ${val1 * val2}`);
} else if (operator === "/") {
	alert(`${val1} ${operator} ${val2} = ${val1 / val2}`);
}
