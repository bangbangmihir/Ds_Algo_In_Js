// =>  Most Primitive(boolean,numbers,undefined,null ) are constant space
// => String Require O(n) Space (where n is the length of String)

function spacecal(arr) {
    let total = 0;                  // => For Var Total Taking One Space And For Variable i Taking one Space
    for (let i = 0; i < arr.length; i++) {  //Space Complexity of This Algorithm is O(1)

        total += array[i];
    }
    
}

function double(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) { //Space Complexity Of the Algo is O(n) Beacuse It taking Space on the Basis Of Array Length  

        newArray.push[2*arr[i]]
    }
    return newArray
    
}

console.log(Math.min(12,10))

//=> Big O of Array Operations
// Push ==> O(1)
// Pop ==> O(1)
// Shift  ==> O(N)
// Concat  ==> O(N)
// Slice  ==> O(N)
// Splice  ==> O(N)
// Sort  ==> O(N*logN)
// ForEach/Map/Filter/Reduce  ==> O(N)


// <==========================================>//
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); //=> It Remove Last Elements From The Array
console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);


// <====================>//
// Filter => The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//Add it On Free Time

