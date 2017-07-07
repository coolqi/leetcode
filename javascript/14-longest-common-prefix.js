// * [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/#/description)

// Write a function to find the longest common prefix string amongst an array of strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0 || strs === null) return '';
    if(strs.length === 1) return strs[0];   
    let pre = strs[0];
    let i = 1;
    while(i < strs.length) {
        while(strs[i].indexOf(pre) !== 0) {
            pre = pre.substring(0, pre.length-1);
        }
        i++;
    }
    return pre;
};