function evenGreaterThanOdd(arr) {
  arr.sort((a, b) => a - b);

  let start = 0,
    end = arr.length - 1,
    newarr = [];


  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 == 0) {
      newarr[i] = arr[end];
      end--;
    } else {
      newarr[i] = arr[start];
      start++;
    }
  }

  return newarr;
}

console.log(evenGreaterThanOdd([1, 2, 2, 1]));
