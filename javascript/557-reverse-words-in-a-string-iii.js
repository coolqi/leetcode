// * [557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/#/description)

// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = '';
    let arr = s.split(' ');
    for(let i=0;i<arr.length-1;i++) {
        let arr1 = arr[i].split('').reverse().join('');
        res += arr1 + ' ';
    }
    res+= arr[arr.length-1].split('').reverse().join('');
    return res;
};