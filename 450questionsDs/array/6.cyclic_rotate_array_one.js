function rotate_arr(arr) {
  let lastelement = arr[arr.length - 1];
  let a = [lastelement];

  for (let i = 0; i < arr.length - 1; i++) {
    // a[a.length] = arr[i]; //Without using inbuilt function
    // a.push(arr[i]);
  }

  return a;
}

console.log(rotate_arr([3, 4, 2, 7]));
