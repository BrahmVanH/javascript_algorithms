// Write code to return the largest number in the given array

// var maxNum = function (arr) {
// 	let maxNum = arr[0];

// 	for (let i = 1; i < arr.length; i++) {
// 		let currentNum = arr[i];

// 		if (currentNum > maxNum) {
// 			maxNum = currentNum;
// 		}
// 	}
//   console.log(maxNum);
// 	return maxNum;
// };

var maxNum = (arr) => {
	let maxNum = arr[0];
	for (const number of arr) {
		if (number > maxNum) {
			maxNum = number;
		}
	}
	return maxNum;
};
