// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
	console.log(arr);

	let max = arr[0];
	let second = arr[0];
	// Iterate through array to find largest num
	for (const num of arr) {
		if (num > max) {
			max = num;
		}
	}
	// Iterate through to find second largest num
	for (const num of arr) {
		if (num < max && num > second) {
			second = num;
		}
	}

	console.log('max: ', max);
	console.log('second: ', second);
	// return product of both numbers
	return max * second;
};
