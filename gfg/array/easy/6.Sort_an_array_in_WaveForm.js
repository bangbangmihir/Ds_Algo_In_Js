// function swap(arr,x,y){
//     let temp = arr[x];
//     arr[x] = arr[y]
//     arr[y] = temp
// }


function SortByWave(arr){
    arr.sort((a,b)=>a-b)

    for(let i=0;i<arr.length;i+=2){  //Increment by 2 so that element swap occur after two
        [arr[i],arr[i+1]] =   [arr[i+1],arr[i]]
    }

    return arr

}

console.log(SortByWave([10, 5, 6, 3, 2, 20, 100, 80]))