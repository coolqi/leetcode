// * [539. Minimum Time Difference](https://leetcode.com/problems/minimum-time-difference/#/description)
// Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.

// Example 1:
// Input: ["23:59","00:00"]
// Output: 1
// Note:
// The number of time points in the given list is at least 2 and won't exceed 20000.
// The input time is legal and ranges from 00:00 to 23:59.
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let arr = [];
    for(let i=0;i<timePoints.length;i++){
        let str = timePoints[i].split(':');
        arr[i] = parseInt(str[0])*60+parseInt(str[1]);
    }
    function sortNumber(a,b)
    {
        return a - b
    }
    arr=arr.sort(sortNumber);
    let min = arr[0] - arr[arr.length-1]>0?arr[0]-arr[arr.length-1]:arr[0]-arr[arr.length-1]+1440;
    
    for(let i=0;i<arr.length-1;i++){
        let next = (i + 1);
        min = Math.min(min, Math.abs(arr[next] - arr[i]));
    }
    return min;
};