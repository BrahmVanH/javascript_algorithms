// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
	const charMap = {};

	for (const char of str) {
		if (char in charMap) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	return charMap;
};
