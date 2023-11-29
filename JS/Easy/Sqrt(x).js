// Sqrt(x)
// Given a non - negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non - negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


// Constraints:

// 0 <= x <= 231 - 1

// We are going to use the Babylonian method to calculate the root of a number
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  // Lets take a guess, it is recommended to start half of the input
  let guess = x / 2;

  // We use for to use while it is lower than something, and while while a condition is made
  // Lets iterate forever and break it inside
  while (true) {
    // This is the babylonian method, where we get a new gests based on the first guess
    let new_guess = (guess + x / guess) / 2;

    // The way to know if the guess number is the actual root of the input
    // is to rest the guess minus the new_guess and if the answer is pretty low, it means ge are getting close
    if (Math.abs(guess - new_guess) < 1e-7) {
      // Math.abs is a js function that returms the absolute value of a number. This ensures the difference is positive
      // 1e-7 is 0.0000001 ---> which it means if the difference is lower than this number, we have the root of the input
      // SO WE BREAK
      break;
    }

    // If is not pretty short, then we update the guess and continue iterating and validating
    // with the new value
    guess = new_guess
  }

  // At the end we return the result rounded down
  return Math.floor(guess);
};

mySqrt(4)

// BEST ANSWERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
var mySqrt2 = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  // Lets start the guess in 2
  let guess = 2
  // LEts iterate while guess is <= than x
  while (guess <= x) {
    // if guess * guess = x, it means we found the root of x, which is guess
    if (guess * guess === x) {
      return guess;
    }
    // The another case is, if the result is higher than x
    // We return the guess minus one, beacuese we have to rounded down
    // Ex: x=15, the root of 15 is 3.8729, 4 * 4 = 16, 16 > 15, so we return guess - 1 --> 4 - 1 --> 3
    if (guess * guess > x) {
      return guess - 1;
    }

    guess++;
  }
}

mySqrt2(4)
