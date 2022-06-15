// Concept For Binary Code
// step (1) :- This function always Accept sorted Value
//step (2) :- Create Left Pointer At start of the Array and right pointer at the end of the array
//step (3) :- When Left Pointer comes before the right pointer
//       ==> Create a Pointer in the middle
//      ==> if you want value then return index
//      ==> if the value is tooo small then move the left pointer up
//      ==> if the value is too large,move the right pinter down
//      ==> If Value not found then return -1


function binarysearch(arr,ele) {
    var start = 0;
    var end = arr.length -1;
    var midddle = Math.floor((start + end)/2);
    while (ele !== arr[midddle]) { //Time comp :- Worst And Average Case O(logn) and O(1) in best case
        if(ele<arr[midddle]){
            end = midddle -1
        }
        else{
            start = midddle + 1
        }
        midddle = Math.floor((start + end)/2);
        if(start>end){
            return -1
        }
    }
    return midddle
    
}

const result = binarysearch([2,5,7,45,67],45)
console.log(result)


