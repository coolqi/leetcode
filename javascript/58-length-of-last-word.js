// * [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/#/description)
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// For example, 
// Given s = "Hello World",
// return 5.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim()
    let m = s.replace(/\s/g, '');
    if(m.length === 0) return 0;
    let arr = s.split(' ');
    for(let i=arr.length-1; i>=0; i--) {
        if(arr[i].length !== 0)
            return arr[i].length;
    }
};