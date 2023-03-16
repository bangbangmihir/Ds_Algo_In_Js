// Given a sorted array of positive integers, rearrange the array alternately i.e first element should be a maximum value, at second position minimum value, at third position second max, at fourth position second min, and so on.

// Examples:

// Input: arr[] = {1, 2, 3, 4, 5, 6, 7}
// Output: arr[] = {7, 1, 6, 2, 5, 3, 4}


function rearrangeArray(arr){
    let start = 0, end = arr.length-1
    let newarr = [];
    let flag = true

    for(let i=0;i<arr.length;i++){
        if(flag){
            newarr[i] = arr[end]
            end--
        }
        else{
            newarr[i] = arr[start]
            start++
        }

        flag = !flag

    }

    return newarr


}

console.log(rearrangeArray([1, 2, 3, 4, 5, 6, 7]));
