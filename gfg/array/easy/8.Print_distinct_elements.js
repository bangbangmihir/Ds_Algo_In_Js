function Count_Distinct_elements(arr){

    const newarr =[]

    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) == i){
            newarr.push(arr[i])
        }
        
    }

    return newarr

}

console.log(Count_Distinct_elements([12, 10, 9, 45, 2, 10, 10, 45]))