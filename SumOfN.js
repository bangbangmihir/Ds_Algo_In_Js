// Better Code Def.  =>  Faster ,Less Memory Consumption , More Readable
// Big 0 => It allow us to talk Formally about how the runtime of algo grow as input grow

function sum_of_N(n) {
    let sum = n*(n+1)/2 // Always Three Opertaion So the Time Complexity is O(1),That Means If N grow it Doesn't Effect the Algo
    return sum
    
}

// function sum_of_N(n) {
//     let Total = 0  
//     for(let i=0;i<=n;i++){ //Time Comp. => O(n) => In tHis line n Number Of operations performed Of Addition And Assignment 
//         Total +=i
//     }
//     return Total

// }

var t1 = performance.now() //Checking Time Taken By the Code
const result = sum_of_N(500000000)
var t2 = performance.now()
console.log(`Time Taken ${(t2-t1)/1000} seconds`)
console.log(result)


// Note:- performance. now() method can be used to check the performance of your code. You can check the execution time of your code using this method. It returns the value of time (of type double) in milliseconds.