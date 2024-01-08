// // Write code to create a function that accepts an array numbers
// // Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
	let countMap = {};
	// Create a mapping of the frequency of each number in the array
	for (const count of arr) {
		if (count in countMap) {
			countMap[count]++;
		} else {
			countMap[count] = 1;
		}
	}
	// Default return value of true
	let result = true;

	// If a count has a value greater than 1, set result to false;
	for (const [key, value] of Object.entries(countMap)) {
		if (value > 1) {
			result = false;
		}
	}
	return result;
};

// Alternative approach from solution

// const isUnique = (arr) => {
//   let numMap = {};
//   for (let i = 0; i < arr.length; i++) {
//     const currentNumber = arr[i];
//     if (numMap[currentNumber] === true) {
//       return false;
//     }

//     numMap[currentNumber] = true;
//   }

//   return true;
// }
