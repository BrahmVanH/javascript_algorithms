// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  let response = null;
	const reversedString = str.split("").reverse().join("");

  if (str === reversedString) {
    response = true;
  } else {
    response = false;
  }

  return response;

	
};
