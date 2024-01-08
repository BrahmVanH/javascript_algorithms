// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
	// Turn string into array of words
	const words = str.split(' ');

	// Iterate through each word in array
	for (let i = 0; i < words.length; i++) {
		if (i === 0) {
			// Isolate first word and make arr
			word = words[i].split('');
			// Make fist letter in word lowercase
			word[0] = word[0].toLowerCase();
			// Recombine char array into formatted word
			words[i] = word.join('');
		} else {
			// Isolate word if not first and make into array
			word = words[i].split('');

			// Make first letter uppercase
			word[0] = word[0].toUpperCase();
			// Recombine char array to
			words[i] = word.join('');
		}
	}
	// Return recombined array of words into camelcase string
	return words.join('');
};
