
// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Input: nums = [3,0,1]

// Output: 2


// Approach 1 : By using Total Sum Formula

var missingNumber = function(nums) {

    let n = nums.length;
    
    let total_sum = n*(n+1)/2;
    let array_sum = 0;

    for(num of nums){
        array_sum = array_sum+num;
    }

    return total_sum - array_sum;

};

console.log(missingNumber([0,1,3]));


// Approach 2 : First sort then itreate through indexes if num missing then return the number

let missingNumberTwo = (nums)=>{

    nums.sort((a,b)=>a-b) // Assending sort;

    for(let i = 0;i<nums.length ;i++){
        if(nums[i]=== i){
            return i;
        }
    }

}



