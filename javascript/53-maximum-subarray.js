// * [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/#/description)
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length===0) return 0;
    let num = nums[0];
    let sum = nums[0];
    let max = nums[0];
    for(let i=1;i<nums.length;i++) {
        if(num > 0){
            sum = num + nums[i];
        } else {
            sum = nums[i];
        }
        max = Math.max(max, sum);
        num = sum;
    }
    return max;
};