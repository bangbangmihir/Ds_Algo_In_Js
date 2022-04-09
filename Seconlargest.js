
function secondlargest(arr){
    for(let i =0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(arr[i]<arr[j])
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    return arr[1]
}

const result = secondlargest([3,9,4,6,8])
console.log(result)