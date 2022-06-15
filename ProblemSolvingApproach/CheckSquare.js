// Function Accepts TWo Parameter and return true if every elements of the array having corresponding square on the secon array

function checkingArray(arr1,arr2) {
    if(arr1.length !== arr2.length){
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
            if(arr1[i]**2 !== arr2[i]){
                return false
            }
            
    }
    return true
   
}


// function checkingArray(arr1,arr2) {
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctpostion = arr2.indexOf(arr1[i] ** 2) //The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found.
//         if( correctpostion === -1){
//             return false
//         }
//         arr2.splice(correctpostion,1)
//     }
//     return true;
// }




//Count Frequency Of Elements in an array

function CountFrequency(arr1,arr2) {
    let obj1 = {}
    let obj2 = {}
    for(var i of arr1){
        obj1[i] = (obj1[i] || 0) + 1
    }
    for(var j of arr2){
        obj2[j] = (obj2[j] || 0) + 1
    }
    console.log(obj1)
    console.log(obj2)
    
}

const freresult = CountFrequency([1,6,3,3,6],[1,9,36])
const result = checkingArray([1,6,3],[1,9,36])
console.log(result)