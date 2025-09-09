//448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.


// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


// Approach 1 : Using Set

var findDisappearedNumbers = function(nums) {
    const set = new Set(nums);

    // for(let i =0;i<nums.length;i++){
    //     set.add(nums[i])
    // }
    let result = [];

    for(let i =1;i<=nums.length;i++){
        if(!set.has(i)){
            result.push(i)
        }
    }

    return result;
}


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));