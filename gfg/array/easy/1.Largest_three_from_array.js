function largestthree(arr){
    arr.sort((a,b)=>b-a)

    console.log(arr)

    return [arr[0],arr[1],arr[2]]

}

console.log(largestthree([4,3,6,8,9,2]))
