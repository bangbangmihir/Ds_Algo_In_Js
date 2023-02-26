// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}


// Method 1
function reversearray(arr){
    let newarr = []
    for(let i = arr.length-1;i>=0;i--){
        newarr.push(arr[i])
    }
    return newarr
}

console.log(reversearray([3,4,5]))

// Method 2
let newarr = [2,3,5,6]
console.log(newarr.reverse())






