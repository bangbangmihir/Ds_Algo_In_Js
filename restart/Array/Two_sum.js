// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Approach 1 : Brute Force

function targetSum(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
    return [];

}


console.log(targetSum([2, 7, 11, 15], 9));


// Approach 2 : Using HashMap

function targetSumTwo(arr, target) {
    const map = new Map();
    for(let i =0;i<arr.length;i++){
        let resultantNumber = target - arr[i];
        if(map.has(resultantNumber)){
            return [map.get(resultantNumber),i]
        }
        map.set(arr[i],i)
    }
}


console.log(targetSumTwo([3,2,4],6))








