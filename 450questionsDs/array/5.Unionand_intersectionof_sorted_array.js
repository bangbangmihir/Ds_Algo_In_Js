function findUnionIntersection(arr1,arr2){

    let intersectionarr = [];
    let unionarr = []

    for(let i=0;i<arr1.length;i++){
        if(arr1.includes(arr2[i])){
            intersectionarr.push(arr2[i])
        }
    }

    const newarr = [...arr1,...arr2]
    unionarr = [...new Set(newarr)]



    return [intersectionarr,unionarr]



}


console.log(findUnionIntersection([2,5,6],[4,6,8,10]));
