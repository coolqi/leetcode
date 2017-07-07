// * [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/#/description)
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 !== 0) return false;
    // if(s[0]===('}' || ')' || ']')) return false;
    let arr = [];
    let index = 0;
    for(let i=0; i<s.length; i++) {
        switch(s[i]) {
            case '{':
            case '(':
            case '[':
                arr[index++] = s[i];
                break;
            case '}':
                if(arr[--index] !== '{') return false;
                break;
            case ')':
                if(arr[--index] !== '(') return false;
                break;
            case ']':
                if(arr[--index] !== '[') return false;
                break;
                
        }
    }
    return index===0;
};