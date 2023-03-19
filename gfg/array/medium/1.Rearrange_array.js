// Given an array of elements of length N, ranging from 0 to N – 1. All elements may not be present in the array. If the element is not present then there will be -1 present in the array. Rearrange the array such that A[i] = i and if i is not present, display -1 at that place.


// Input : arr = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1}
// Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]


function RearrangeArray(arr){

    for(let i =0 ;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j] == i){
                [arr[j],arr[i]] = [arr[i],arr[j]]
                break;
            }
        }
    }

    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== i){
            arr[i] = -1
        }
    }

    return arr

}

console.log(RearrangeArray([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]))