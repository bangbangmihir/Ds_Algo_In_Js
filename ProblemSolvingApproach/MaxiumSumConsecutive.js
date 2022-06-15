function maxsubArray(arr,num) {
    //Method one => Naive Solution
    // if(num>arr.length) return null;
    // var max = -1
    // for (let i = 0; i < arr.length - num+1; i++) {
    //     temp = 0
    //     for (let j = 0; j < num; j++) {
    //         temp = temp + arr[i+j];
    //     }
    //     if(temp>max){
    //         max=temp;
    //     }
    // }
    // return max;
    //method :- 2
    let maxsum = 0;
    let tempsum= 0;
    if(arr.length <num) return null;
    for (let i =0;i<num;i++){
        maxsum += arr[i];
    }
    tempsum = maxsum
    for(let i=num;i<arr.length;i++){
        tempsum = tempsum - arr[i-num] + arr[i];
        maxsum = Math.max(maxsum,tempsum)
    }
    return maxsum;

}

const result = maxsubArray([3,8,5,3,0,6,7],3)
console.log(result)