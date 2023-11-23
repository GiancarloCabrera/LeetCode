// 67. Add Binary
// Companies
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.


// LETS FIRST STABLISH SOME RULES --->

// 0 + 0 = 0
// 1 + 0 = 1
// 0 + 1 = 1
// 1 + 1 = 10

// EXAMPLE --->

//  11
//   1
// ____
// 100

// PROCESS

// FIRST STEP:
//  1 ---> CARRY HERE
//  11 ---> 1+1=10 --> SO CARRY 1
//   1
// ____
//   0

// SECOND STEP:
//  1 ---> 1+1=10 --> SO WE PUT IT DOWN
//  11
//   1
// ____
// 100

var addBinary = function (a, b) {
  // The carry number in case 1 + 1
  let carry = 0;
  let result = ''
  // WE ARE GOING TO LOOP BOTH AT THE SAME TIME
  // FROM RIGHT TO LEFT
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    console.log(a[i], b[j]);
    // Convert each string to number, and if it doesnot exist it will be 0
    // Most of the time the result has to be 1, if it is higher, it means we have a carry
    // WE HAVE TO ALSO SUM THE CARRY, IF ITS 0, IT WILL BE THE SAME, BUT IF NOT, THEN WE SUM IT AND ON LINE
    // 51 CODE WILL KNOW THAT THERE IS A CARRY WHICH WE HAVE TO KEEP SUMMING UNTIL WE FINISH
    let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
    console.log(sum);
    // Ex --->  sum = 2 % 2 = 0
    // Now that we have the sum, we will get the residuo which we will add to the result
    // Beacuse we need to conver it to binary, and binary is base 2
    result = (sum % 2) + result
    console.log(result);

    // We have to validate if we have a carry or we dont
    // so if sum result is > 1, it means we have a carry, if not then carry will be 0
    carry = sum > 1 ? 1 : 0;
    console.log(carry);
  }

  // So if there is a carry, we just have to add a 1 at the beggining of the result
  if (carry) result = '1' + result
  console.log(result);
  return result
};

addBinary("11", "1");
// addBinary("1010", "1011");