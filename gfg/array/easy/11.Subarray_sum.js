// Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33

function Subarray_sum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let currentsum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      currentsum += arr[j];
      if (currentsum == sum) {
        return [i, j];
      }
    }
  }
  return -1
}

console.log(Subarray_sum([1, 4, 20, 3, 10, 5], 33));
