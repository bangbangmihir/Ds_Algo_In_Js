// 1365. How Many Numbers Are Smaller Than the Current Number

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).


// Approach 1 : BruteForce Approach

var smallerNumbersThanCurrent = function(nums) {

    let resultant_Array = [];

    for(let i =0 ;i<nums.length ;i++){
        let count = 0;
        for(j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count = count + 1;
            }

        }
        resultant_Array.push(count);
        
    }
    return resultant_Array;
    
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));


// Time Complexity : O(n^2)
// Space Complexity : O(1)


var smallerNumbersThanCurrentTwo = function(nums) {

    const sortedArray = [...nums].sort((a,b)=>a-b);

    let map = new Map();

    let resultant_Array = [];

    for(let i=0;i<sortedArray.length;i++){
        if(!map.has(sortedArray[i])){
            map.set(sortedArray[i],i)
        }
    }

    for(let i = 0; i<nums.length;i++){
        if(map.has(nums[i])){
            resultant_Array.push(map.get(nums[i]))
        }
    }

    return resultant_Array

    
};


console.log(smallerNumbersThanCurrentTwo([8,1,2,2,3]));


