// Approach 0 : Bruteforce using Nested Loop
// Input: nums = [1, 1, 2]  
// Output: 2, nums = [1, 2]

var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));

// Approach 1: Using Set
// Input: nums = [1, 1, 2]  
// Output: 2, nums = [1, 2]     

var containsDuplicatemethodtwo = function (nums) {

    const set = new Set(nums);

    if (set.size === nums.length) {
        return false
    }
    return true;

};

//Approach 3 : Using Set


var containsDuplicatemethodthree = function (nums) {
    const set = new Set();

    for(nums of nums){
        if(set.has(nums)) return true;
        set.add(nums)
    }
    return false;
}
