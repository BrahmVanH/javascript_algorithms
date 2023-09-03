// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = function(arr) {
  // iterate through array of numbers, find two largest numbers
  // return product of two numbers

  // Declare variables for function
  let highest = null;
  let secondHighest = null;
  let solution = null;
  console.log(arr);
  highest = arr[0];
  
  // Loop through array to find highest number
  for (const currentNum of arr) {
    if (currentNum > highest) {
      highest = currentNum
    }
  }

  console.log(highest);

  // Filter through initial array and remove highest number
  const filteredArr = arr.filter(e => e !== highest);

  console.log(filteredArr);

  secondHighest = filteredArr[0];
  
  // Loop through filtered array to find highest number in that array
  for (const currentNum of filteredArr) {
    if (currentNum > secondHighest) {
      secondHighest = currentNum
    }
  }
  console.log(secondHighest);

  // Find product of two highest numbers 
  solution = secondHighest * highest;
  return solution;

  // Code from solved version. Tried running it without the || statements and assigning high and secondHigh to arr[0]
  // and arr[1] initially, but secondHighest kept coming back as incorrect. I can't quite wrap my head around this one
  // for (const currentNum of arr) {

   
  //   if (currentNum > highest || highest === null) {
  //     secondHighest = highest
  //     highest = currentNum
  //   } else if (currentNum > secondHighest || secondHighest === null) {
  //     secondHighest = currentNum
  //   }
   
  // }
  // console.log(highest);
  // console.log(secondHighest);

  // return secondHighest * highest;


};
