// Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// SHORT ANSWER
var lengthOfLastWord1 = function (s) {
  // Remove external spaces
  const wrd_trim = s.trim();
  console.log(wrd_trim);
  // Separate only owrds into an array
  const wrd = wrd_trim.split(' ');
  console.log(wrd);
  // Get las word
  const lst_wrd = wrd[wrd.length - 1];
  console.log(lst_wrd.length);
  return lst_wrd;
};

// lengthOfLastWord1('Hello World');
// lengthOfLastWord1("   fly me   to   the moon  ")
// lengthOfLastWord1("luffy is still joyboy")

var lengthOfLastWord2 = function (s) {
  // Removing external spaces from string
  s = s.trim();
  let wrd = '';
  // Loop the string
  for (let i = 0; i < s.length; i++) {
    // If there is NOT space, it means we add a new word
    if (s[i] !== ' ') {
      // We add the current letter to the new word
      wrd += s[i];
      // If there is a space, it means the word is not the last one
    } else {
      wrd = '';
    }
  }
  console.log(wrd);
  console.log(wrd.length);
  return wrd.length;
};

lengthOfLastWord2('Hello World')
lengthOfLastWord2("   fly me   to   the moon  ")
lengthOfLastWord2("luffy is still joyboy")