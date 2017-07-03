// 1. [Two Sum](https://leetcode.com/problems/two-sum/#/description)

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


var twoSum = function(nums, target) {
    let arr = [];
    let map = new Map();
    for (let i=0; i<nums.length; i++) {
        let res = target - nums[i];
        if(map[res]) {
            arr.push(map.get(res));
            arr.push(i);
        }
        map.put(nums[i], i);
    }
    return arr;
};