

function ksmallest(arr,position){

  for(let i =0;i<arr.length;i++){  // Timecomplexity is O(n^2)
    for(let j= 0;j<arr.length;j++){
        // if(arr[i]<arr[j]){
        //     let temp;
        //     temp = arr[i];
        //     arr[i] =arr[j];
        //     arr[j] = temp;
        // }
        if(arr[i]<arr[j])
            [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    
  }

  return arr[position-1]

}


// Method:-2

// By Using Sorting

function ksmallest(arr,position){
    const sortedarr = arr.sort((a,b)=>a-b) // Time complexity of sort function in js is  o(nlogn)
   return sortedarr[position-1]
}







console.log(ksmallest([3,7,1,4,6],3));