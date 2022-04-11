var removeDuplicates = function(nums) {
    var arr = []
    nums.forEach((ele)=>{
        if(!arr.includes(ele)){
           arr.push(ele)
           }
    })
    return arr
};

const result = removeDuplicates([1,2,3,2])
console.log(result)