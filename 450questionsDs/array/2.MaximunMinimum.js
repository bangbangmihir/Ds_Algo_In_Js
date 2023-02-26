// Method 1:- By using Sorting
function maxmin(arr) {
  let maxm, min;

  const sortedarr = arr.sort((a, b) => a - b);

  return [sortedarr[0], sortedarr[sortedarr.length - 1]];
}

function onlyminmax(arr) {
    
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}

console.log(maxmin([3, 2, 5, 7, 3]));
console.log(onlyminmax([3, 2, 5, 7, 3]));
