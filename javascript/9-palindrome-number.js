// * [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/#/description)
// Determine whether an integer is a palindrome. Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    let m = x;
    let n = 0;
    while(m >= 10){
        n = n*10;
        n += m%10;
        m =Math.floor(m/10);
    }
    if(n==Math.floor(x/10) && m==(x%10)) {
        return true;
    }
    return false;
};