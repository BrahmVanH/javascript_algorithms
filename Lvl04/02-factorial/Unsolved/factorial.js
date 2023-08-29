// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
	let solution = 1;
	// num!
	// num! = num * num - 1 * num - 1 until ( num - 1 )  = 0
	// So... i is equal to the original number, i will never be equal or less than zero, and i is decrementing. each iteration
	// starting with num, multiplies by solution in a decrementing fashion until i equals one. resulting in num! = solution
	for (let i = num; i > 0; i--) {
		solution *= i;
	}
	return solution;
};
