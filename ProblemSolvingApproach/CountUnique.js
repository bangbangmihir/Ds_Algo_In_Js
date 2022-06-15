//Counting unique values from the Sorted Array
function CountUnique(arr) {

  // const uniqueele = new Set(arr).size
  // return uniqueele;

  let uniqueCount = 0;

  arr.forEach((element, index) => {
    if (arr.indexOf(element) === index) {  //The indexOf method returns the index of the first occurrence of a value in an array.
      uniqueCount += 1;
    }
  });
  return uniqueCount
}

// Method 2 => This MEthod Applicable when Array Are in sorted for We use Multiple pointer concept


function countuniquemethodTwo(arr) {
    if(arr.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j]
        }
        
    }
    return i+1
    
}

// const result = CountUnique([-3, -2, -2, 4, 4]);
const resultone = countuniquemethodTwo([]);
// console.log(result);
console.log(resultone);
