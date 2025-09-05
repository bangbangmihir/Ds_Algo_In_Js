// 1. Pair Sum in Sorted Array

// Input: nums = [1, 2, 3, 4, 6], target = 6  
// Output: [1, 3]  # (2 + 4 = 6) 


function targetSum(arr,target) {


    //Naive Solution

    for (let index = 0; index < arr.length; index++) {
        const firstelement = arr[index];
        for (let j = 0; j < arr.length; j++) {
            const secondelement = arr[j];

            if(firstelement + secondelement == target){
                return [index,j]
            }
            
        }
       
        
    }

   


    // Two pointer technique

    let start = 0;
    let end = arr.length - 1;

    while(start<end){
        if(arr[start] + arr[end] == target){
            return [start,end];
        }

        // We move only one pointer at a time based on the current sum relative to the target because:
        // The array is sorted.
        // Increasing start gives a larger sum (when sum is too small).
        // Decreasing end gives a smaller sum (when sum is too large).
        else if(arr[start] + arr[end] < target){
            start ++;

        }
        else{
            end --
        }

        return [];  
        
    }

    
}



console.log(targetSum([1, 2, 3, 4, 6],6))


// ####################################################################################

// 2. Check if a String is a Palindrome
// Problem: Given a string, check if it is a palindrome using two pointers.

// Input: "madam"  
// Output: True

function palindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while(start<end){
        if(str[start] !== str[end]){
            return false
        }
        start ++;
        end --;
    }
    return true
    
}

console.log(palindrome("madam"))




// ####################################################################################

// 3. Remove Duplicates from a Sorted Array
// Problem: Given a sorted array, remove duplicates in-place and return the new length.
// Input: nums = [1, 1, 2, 2, 3]  
// Output: [1, 2, 3]


function removeDuplicates(arr) {

    if (arr.length === 0) return 0;  

    let start = 0;

    for (let i = 1; i < arr.length; i++) {

        if(arr[start] !== arr[i]){
            start++;
            arr[start] = arr[i]
        }
        
    }

    return start+1;
    
}

let nums = [1, 1, 2, 2, 3];
let newLength = removeDuplicates(nums);
console.log(nums.slice(0, newLength)); 



//#######################################################################################

// 4.Merge Two Sorted Arrays
// Problem: Merge two sorted arrays into one sorted array using two-pointer approach.
// Input: nums1 = [1, 3, 5], nums2 = [2, 4, 6]  
// Output: [1, 2, 3, 4, 5, 6]


// Approach 1 : Copy the elemets from the second array to the first array and sort the merged array.

function mergeSortedArrays(nums1, nums2) {
    let i = 0, j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }

    // Add remaining elements from nums1 
    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }

    // Add remaining elements from nums2 
    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }

    return result;
}


let nums1 = [1, 3, 10,12];
let nums2 = [2, 4, 6,8,10];
console.log(mergeSortedArrays(nums1, nums2));  // Output: [1, 2, 3, 4, 5, 6]


// 5. Move Zeroes to End
// Problem: Given an array, move all zeroes to the end while maintaining the relative order of the non-zero elements.
// Input: nums = [0, 1, 0, 3, 12]  
// Output: [1, 3, 12, 0, 0]


function moveZeroes(arr) {
    let i = 0;

    for (let j = 0; j < arr.length; j++) {
        if(arr[j] !== 0){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
        }
        
    }
}


let arraywithZeros =[0, 1, 0, 3, 12]
moveZeroes(arraywithZeros );
console.log(arraywithZeros);  





















