// 66. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

// This is one solution,  but for long numbers does not work
var plusOne1 = function (digits) {
    let num = '';
    for (let i = 0; i < digits.length; i++) {
        num += digits[i];
    }
    console.log(num);
    const new_num = parseInt(num);
    const new_array = (new_num + 1).toString().split('');
    console.log(new_array);
};

// plusOne1([1,2,3]);
// plusOne1([4,3,2,1]);
// plusOne1([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);



// Right solution using loops
var plusOne2 = function (digits) {
    // Loop array
    for (let i = digits.length - 1; i >= 0; i--) {
        // If it less than 9, we just sum it + 1
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            // And we break the proccess
            console.log(digits);
            return digits;
        } else {
            // it is a 9, so we set it to 0
            digits[i] = 0;
            // digits[i-1] = digits[i-1] + 1 
        }
    }
    // If we get here, it means the number is 9, so it means we need to add a 1 at the beggining
    // we can add this 1 unconditionally here, beacause in the case the first number is < 9, we return already the array
    // in line 60, so the code will not reach here
    digits.unshift(1);
    console.log(digits);
    return digits;
};

plusOne2([1, 2, 3]);
// plusOne2([4,3,2,1]);
plusOne2([9, 9]);
// plusOne2([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);