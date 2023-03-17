// Segregate even and odd numbers

// Input: arr[] = 1 3 2 4 7 6 9 10


function segregate(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newarr.push(newarr.unshift(arr[i])); //unshift method arr elements at the begning of the array
    }
  }
  return newarr;
}

function segregateByusingMultiplepointer(arr) {
  let newarr = [];
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newarr[start] = arr[i];
      start++;
    } else {
      newarr[end] = arr[i];
      end--;
    }
  }
  return newarr;
}

console.log(segregate([1, 3, 2, 4, 7, 6, 9, 10]));
console.log(segregateByusingMultiplepointer([1, 3, 2, 4, 7, 6, 9, 10]));
