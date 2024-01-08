// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
	// Weed out any word pairs that arent the same length,
	// as they are definitely not anagrams
	if (strA.length !== strB.length) {
		return false;
	}

	// Create an empty map object for each word,
	// that will contain how many instances of each letter
	// exist in each word
	const aMap = {};
	const bMap = {};

	// Populate maps
	for (let i = 0; i < strA.length; i++) {
		let aLetter = strA[i];
		let bLetter = strB[i];

		aMap[aLetter] = (aMap[aLetter] || 0) + 1;
		bMap[bLetter] = (bMap[bLetter] || 0) + 1;
	}

	// Iterate through all keys in first word map
	// To check for same mapping in second word
	for (const key in aMap) {
		if (aMap[key] !== bMap[key]) {
			return false;
		}
		console.log('returning true');
	}

	return true;
};
