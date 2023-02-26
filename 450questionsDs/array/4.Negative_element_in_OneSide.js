function NegativeElemets(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.lenth; j++) {
//         if(arr[i]<arr[j])
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//     }
//   }
//   return arr;
  for(let i =0;i<arr.length;i++){  // Timecomplexity is O(n^2)
    for(let j= 0;j<arr.length;j++){
        if(arr[i]<arr[j])
            [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    
  }

  return arr

}

function NegativeElemets(arr) {

    const sortedarr = arr.sort((a,b)=>a-b)

    return sortedarr


}
   






console.log(NegativeElemets([-1, 2, -3, 4, 5, 6, -7, 8, 9 ]));
