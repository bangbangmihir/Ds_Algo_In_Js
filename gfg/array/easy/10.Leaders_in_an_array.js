// Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 
// Input: arr[] = {16, 17, 4, 3, 5, 2}, 
// Output: 17, 5, 2


function LeaderElemets(arr){

    let newarr = []

    for(let i=0;i<arr.length;i++){
        let j
        for(j=i+1;j<arr.length;j++){
            if(arr[i]<=arr[j]){
                break;
            }
        }
        if(j==arr.length){
            newarr.push(arr[i])
        }
    }

    return newarr

}
console.log(LeaderElemets([16, 17, 4, 3, 5, 2]))