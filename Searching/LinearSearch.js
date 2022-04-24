//Different method in js for searching
// indexOf,includes,find,findIndex

function Linearsearch(arr,val){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == val){
            return i;
        }
        
    }
    return -1
}

const result = Linearsearch([2,7,5,79,8],5)
console.log(result)