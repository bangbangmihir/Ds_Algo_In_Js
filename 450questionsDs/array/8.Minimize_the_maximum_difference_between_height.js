function getMinimizeHeights(arr, n) {
  arr.sort((a, b) => a - b);
  let ans = arr[arr.length - 1] - arr[0];

  let maxH, minH;

  for (let i = 0; i < arr.length; i++) {
    // since height of tower can't be -ve so taking only +ve heights
    if (arr[i] >= n) {
      minH = Math.min(arr[0] + n, arr[i] - n); //after sorting, arr[0] is minimum. so adding k pushes it towards maximum. We subtract k from arr[i] to get any other worse (smaller) minimum. worse means increasing the diff b/w mn and mx
      maxH = Math.max(arr[arr.length - 1] - n, arr[i - 1] + n);  //after sorting, arr[n-1] is maximum. so subtracting k pushes it towards minimum. We add k to arr[i] to get any other worse (bigger) maximum. worse means increasing the diff b/w mn and mx
      ans = Math.min(ans, maxH - minH);
    }
  }
  return ans;
}

console.log(getMinimizeHeights([7, 12, 3], 8));
