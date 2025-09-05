// Approach 1: Using Set to store unique elements

// 26. Remove Duplicates from Sorted Array
// Problem: Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Input: nums = [1, 1, 2]  
// Output: 2, nums = [1, 2]

var removeDuplicates = function (nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!(set.has(nums[i]))) {
            set.add(nums[i])
        }
    }

    return set.size;


};

const nums = [1, 1, 2];

console.log(removeDuplicates(nums));

//Approach 2: Check each element with the next one and remove duplicates

var removeDuplicatesmethodtwo = function (nums) {

    if (nums.length === 0) return 0;

    let tempArray = [];

    for(let i =0;i<nums.length;i++){
        if(i==0 || nums[i] !== nums[i-1]){
            tempArray.push(nums[i])
        }
    }

    return tempArray.length


}

console.log(removeDuplicatesmethodtwo(nums));


//Approach 3: Two Pointer Technique
// Input: nums = [1, 1, 2]  
// Output: 2, nums = [1, 2]     

var removeDuplicatesmethodthree = function (nums) {

    if (nums.length === 0) return 0;
    let start = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[start] !== nums[i]) {
            nums[start] = nums[i]
            start++;
        }
    }
    return start ;
}


console.log(removeDuplicatesmethodthree(nums));
