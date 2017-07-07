// * [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/#/description)
// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// click to show spoilers.

// Note:
// The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let code = x<0? '-':'';
    let str = x<0? x.toString().substring(1) : x.toString();
    let res = '';
    for(let i = str.length-1; i>=0; i--) {
        res += str[i];
    }
    res = parseInt(code+res);
    if(res>Math.pow(2, 31) - 1||res<-Math.pow(2, 31)) return 0
    return res;
};