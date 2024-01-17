// Big O Notation And Time Complexity

// Big O Notation is a mathematical notation which help us analyze and compare the efficiency of algorithms by
// expressing how their runtime or space requierements grow as the input size increases.

// IN SIMPLE TERMS IT IS USED TO KNOW HOW MUCH TIME IT TAKES TO A FUNCTION TO RUN AND DO THE WHOLE PROCCESS
// This depends how fast the computer is, if it is running other programs, etc

// How does the runtime of this function grow?

// Time complexity ----> It is a way of showing how the runtime of a function increases

// Types of time complexity --->
// - Linear time --> If the input increases, the time will too. Because the function will need more time to get the result.
// - Constant time --> This is when the input incresases, but the time does not.
// - Quadratic time --> It is when the input increases, the grapich of time and input length will grow as a quadratci function.

// Types of time complexity represented in math
// n --> size of the input
// Linear time ---> T = an + b = O(n) ---> O(n)
// Constant time ---> O(1)
// Quadratic time ---> T = cn^2 + dn + e = O(n^2) ---> O(n^2)

// Ex ---> We have an array and our function will return the sum of each item of the array

//This function works under LINEAR TIME, becuase as the array gets bigger, the function will take more time to return the result
// O(n)
function sum_item_linear(array) { // T = O(1) + (n x O(1)) + O(1) --> we added n because of the for which loops the array
  let total = 0; // ---> O(1)
  for (let i = 0; i < array.length; i++) {
    total += array[i] // ---> O(1), rmeember this line is used the same times as array.length
  }
  return total; // ---> O(1)
}

sum_item_linear([1, 3, 5, 4])
sum_item_linear([1, 3])
sum_item_linear([1, 3, 5, 4, 855, 97, 44])

// This function works under CONSTANT TIME, because no matter how big the array is, it returns allways the same result, so it
// it takes the same time always --- In this case constant time is faster than linear time
// O(1)
function constant(array) { // T = O(1) + O(1)
  let total = 0; // ---> O(1)
  return total; // ---> O(1)
}

const array_2d =
  [
    [1, 4, 3],
    [3, 1, 9],
    [0, 5, 2]
  ]
// n = number of columns = number of rows ---> n^2

// Now we need a function that returns the result of the sum of every item inside our 2d array
function find_sum_2d(array_2d) { // ---> T = O(1) + (n^2 x O(1)) + O(1)
  let total = 0; // ---> O(1)
  for (let row = 0; row < array_2d.length; row++) { // n
    for (let item = 0; item < row.length; item++) { // n
      total += row[item] // ---> O(1)
    }
  }
  return total; // ---> O(1)
}

find_sum_2d(array_2d);