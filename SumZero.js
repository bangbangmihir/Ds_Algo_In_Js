// Naive Solution
//Method 1
function SumZero(arr) {
    for(var i of arr){
        for(var j of arr){
            if(i+j == 0){    //Time Complexity = O(n^2) & Space Complexity = O(1)
                return [i,j]
            }
        }
    }
}

//Method 2
function SumZero(arr) {
    for (let i = 0; i < arr.length; i++) {  //Time Complexity = O(n^2) & Space Complexity = O(1)
       for (let j = i+1; j < arr.length; j++) {
           if(arr[i]+arr[j] === 0){
               return [arr[i],arr[j]]
           }
           
       }
        
    }
    
}

//Method 3 => Multiple Pointer Concept O(n)
function SumZero(arr) {
    let left = 0;
    let right = arr.length -1;
    while(left<right){ //array Should in the order of Sorted Like this [-3,-2,0,1,3]
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left],arr[right]]
        }else if(sum >0){
            right--
        }else{
            left++
        }
    }

    } 




const result = SumZero([-3,-2,0,1,3])
console.log(result)