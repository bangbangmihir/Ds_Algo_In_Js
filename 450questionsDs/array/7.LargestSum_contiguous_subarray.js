function getmaxsubsum(arr){
    let maxsum = 0;

    for(let i=0;i<arr.length;i++){
        let tempsum = 0;
        for(let j =i;j<arr.length;j++){
            tempsum += arr[j]
            maxsum = Math.max(maxsum,tempsum)
        }
    }
    return maxsum


}

// console.log(getmaxsubsum([-1, 2, 3, -9]))


//get sum by 3 contiguos element in an array
function getmaxcontiguossum(arr,num){

    let maxsum = 0;
    for(let i=0;i<arr.length;i++){
        let tempsum = 0;
        
        let arrlength = i+num 

        for(let j=i;j<Math.min(arrlength,arr.length);j++){  //loop go through only next n times
            tempsum += arr[j]
            maxsum = Math.max(tempsum,maxsum)
        }
    }

    return maxsum

}

console.log(getmaxcontiguossum([3,8,5,3,0,6,9],2))








