//  Longest Common Prefix
// 	It's an array of strings wich I take the 1st one and start to compare it with the rest of the strings in the array.
// 	The way to solve it is using indexOf. We establish the index (the first string), with a FOR we travel the array, and we use a while the indexOf is anything but no 0 means it hasn't found it.
// 	If it's equal to 0, our similitud has been found. The way to erase the last letter of the string is using this code line:
	
prefix = prefix.substring(0, prefix.length - 1);