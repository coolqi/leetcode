// * [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/#/description)

// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

var longestPalindrome = function(s) {
    let arr = s.split('');
    let arr1 = {};
    let sum = 0;
    
    for( let i=0; i<arr.length;i++ ) {
        if(arr1[arr[i]] !== undefined) {
            arr1[arr[i]] += 1;            
            if(arr1[arr[i]] === 2) {                
                sum += 1;
                arr1[arr[i]] = 0;
            }
        } else arr1[arr[i]] = 1;
    } 
    if((sum * 2 + 1) <= arr.length) return (sum*2+1);
    return arr.length;
};