// Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence
// of needle in haystack, or - 1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English character

// SHORT ANSWER
var strStr = function (haystack, needle) {
  const index = haystack.indexOf(needle);
  console.log(index);
  return index;
};

strStr("sadbutsad", "sad")

// LONG ANSWER
var strStr2 = function (haystack, needle) {
  if (haystack === needle || needle === '') {
    return 0
  }

  for (let i = 0; i < haystack.length; i++) {
    // If one letter is the same as as the first letter of the needle
    if (haystack[i] === needle[0]) {
      // We are going to extract the same size of word as needle and compare it to needle
      // Ex ---> sadbutsad ---> sad
      //                       starting index AND the length of the character is going to be taken
      const subString = haystack.substr(i, needle.length);
      // EXAMPLE ---> main word = Hello world!
      // (2, 2) ---> it looks for the word in index 2 ---> l
      // now it adds up that index the next number which is 2 ---> 2+2= 4
      // and in index 4 there is ---> l
      // So the new owrd will be ll
      console.log('SUBS: ', subString);
      // SO if the extracted word is the same as needle, we return the index of the start of the word
      if (subString === needle) {
        console.log(i);
        return i;
      }
    }
  }
  console.log(-1);
  return -1
};

// strStr2("sbutad", "sad")
// strStr2("sadbutsad", "sad")
// strStr2("adbutsad", "sad")
strStr2("hello", "ll")