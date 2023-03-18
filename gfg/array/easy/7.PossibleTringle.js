// Input: arr= {4, 6, 3, 7}
// Output: 3
// Explanation: There are three triangles 
// possible {3, 4, 6}, {4, 6, 7} and {3, 6, 7}. 
// Note that {3, 4, 7} is not a possible triangle.  

function PossibleTriangle(arr){

    let no_of_triangle =0

    for(let i =0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                if(arr[i]+arr[j]>arr[k] &&arr[i]+arr[k]>arr[j] && arr[k]+arr[j]>arr[i]){
                    no_of_triangle++ 
                }
            }
        }
    }

    return no_of_triangle



}


console.log(PossibleTriangle([4, 6, 3, 7]))