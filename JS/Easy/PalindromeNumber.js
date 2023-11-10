// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?

function isPalindrome(x) {
  // Handle negative numbers (they cannot be palindromes)
  if (x < 0) return false;

  let reversed = 0;
  let original = x;

  // Reverse the number ---> we are removing one humber by one of x, until is 0
  while (x > 0) {
    // reserved * 10 ---> Creates a space to add the new number
    // Ex ---> 3 * 10 = 30, where 0 will be the new number to be added

    // x % 10 ---> it always returns the last number
    // Ex ---> 12 % 10 ---> 2

    // Which we will add to the reversed number
    // Ex --->  30 + 2 = 32 ---> so now the number is being reversed
    reversed = reversed * 10 + x % 10;
    console.log('R: ', reversed);
    // Now we remove the last digit of the number, so we can add the next number to the reversed number
    // Ex ---> 123 ---> 12 ---> we continue with 2, returns only the integer value 12.95 ---> 12 
    x = Math.floor(x / 10);
    console.log('A_X: ', x);
  }

  // Check if the reversed number is equal to the original
  return reversed === original;
}

isPalindrome(123);
