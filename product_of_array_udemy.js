/*
JavaScript Algorithms and Data Structures Masterclass

productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

const productOfArray = (arr) => {
  let product = arr.pop();
  if(arr.length > 0) {
    return product * productOfArray(arr);
  } else {
    return product;
  }
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60