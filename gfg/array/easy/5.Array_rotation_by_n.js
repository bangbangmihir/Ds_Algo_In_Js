// Given an array arr[] of size N, the task is to rotate the array by d position to the left.

// Input:  arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3, 4, 5, 6, 7, 1, 2


function RotateArray(arr,n){
    let firstarr = []
    let secondarr = []
    for (let i=0;i<n;i++){
        firstarr.push(arr[i])
    }
    for(let j=n;j<arr.length;j++){
        secondarr.push(arr[j])
    }

    return [...secondarr,...firstarr]

  
}

console.log(RotateArray([1, 2, 3, 4, 5, 6, 7],2))