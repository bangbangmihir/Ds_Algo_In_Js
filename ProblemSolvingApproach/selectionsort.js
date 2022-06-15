function selectionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp;
        //swapping done by Normal Method
        // temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;

        //Swapping Done By Object  Destructuring
        [arr[i], arr[j]] = [arr[j], arr[i]];

        //Swapping Done by using Arthmetic operator
        // arr[i] = arr[i] + arr[j];
        // arr[j] = arr[i] - arr[j];
        // arr[i] = arr[i] - arr[j];

        //By using XOR Operator => Bitwise XOR operator evaluates to true if both operands are different
        // Bitwise XOR ^ returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same.

        // arr[i] = arr[i] ^ arr[j]
        // arr[j] = arr[i] ^ arr[j]
        // arr[i] = arr[i] ^ arr[j]


      }
    }
  }
  return arr;
}
const result = selectionsort([7, 8, 9, 2]);
console.log(result);
