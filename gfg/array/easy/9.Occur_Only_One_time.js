function Occur_only_one_time_in_arr(arr) {

    
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (count == 1) {
      return arr[i];
    }
  }

  return -1;
}

console.log(Occur_only_one_time_in_arr([8, 4, 5, 4, 5, 8, 9]));
