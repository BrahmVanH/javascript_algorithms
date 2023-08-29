// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const lowerCaseString = str.toLowerCase();
	const strArray = lowerCaseString.split('');
	let numberOfVowels = 0;

	for (const character of strArray) {
		for (const vowel of vowels) {
			if (character === vowel) {
				numberOfVowels++;
			}
		}
	}
	return numberOfVowels;
};
