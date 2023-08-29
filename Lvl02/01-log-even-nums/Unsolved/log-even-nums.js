// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
	const numbers = [];
	for (let i = 0; i <= num; i++) {
		numbers.push(i);
	}

	for (const number of numbers) {
		if (number % 2 === 0) {
			console.log(number);
		}
	}
};
