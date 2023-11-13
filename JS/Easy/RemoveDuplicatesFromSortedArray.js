// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.



// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

// ONE WAY
var removeDuplicates = function (nums) {
  // new Set takes the array and creates an object with the given values, if there are repeated, he deletes them.
  // The Set object lets you store unique values of any type, whether primitive values or object references.
  // Ex ---> [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] ---> { 0, 1, 2, 3, 4 }
  // Array.from() converts the set obj into an array.
  // Ex ---> { 0, 1, 2, 3, 4 } ---> [ 0, 1, 2, 3, 4 ]
  const newArr = Array.from(new Set(nums));
  return newArr.length;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// SHORTESTS WAY
var removeDuplicates2 = function (nums) {
  return new Set(nums).size;
};

removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);


// MANUAL WAY - AND LEETCODE RIGHT ANSWER
var removeDuplicates3 = function (nums) {
  // We need to use a new index, because only if the number and the next are different we will remove the repeated number
  // putting the different number on the repeated number
  let index = 1;
  // We need to stop one element before the last number, beacuse we are comparing the actual number iwth the next one
  for (let i = 0; i < nums.length - 1; i++) {
    console.log(nums[i], nums[i + 1]);

    if (nums[i] !== nums[i + 1]) {
      // i keeps going even if the validation is not accepted, so we cannot use it to access the position we want
      // as new number
      // That is why we need a different index, to update the array
      // This index only will move if we already verified that the new number is different
      nums[index] = nums[i + 1];
      index++;
    }
    console.log(nums);
  }
  console.log(nums);
  console.log(index);
  return index
};

removeDuplicates3([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// The has() method of Set instances returns a boolean indicating whether an element
// with the specified value exists in this set or not.

// const set1 = new Set([1, 2, 3, 4, 5]);

// console.log(set1.has(1));
// // Expected output: true

// console.log(set1.has(5));
// // Expected output: true

// console.log(set1.has(6));
// // Expected output: false