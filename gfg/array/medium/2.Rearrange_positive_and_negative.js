// An array contains both positive and negative numbers in random order. Rearrange the array elements so that positive and negative numbers are placed alternatively.

function RearrangeArray(arr){
    for(let i=0;i<arr.length;i+=2){

        if(arr[i] < arr[i+1])
  
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        







        // for(let j=i+1;j<arr.length;j++){
        //     if(arr[i]>arr[j]){

        //     }
        // }
    }

    return arr

}

console.log(RearrangeArray([-1, 2, -3, 4, 5, 6, -7, 8, 9]))