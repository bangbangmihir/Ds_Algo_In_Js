function sumRange(num){
    if(num == 1) return 1;
    return num + sumRange(num-1)
}

const result = sumRange(5)
console.log(result)