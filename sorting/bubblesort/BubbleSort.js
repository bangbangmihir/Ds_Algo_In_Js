// Bubble Sort :- Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. 
// Time Complexity: O(N2)
// Auxiliary Space: O(1)

function bubblesort(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {

            if(arr[j] >arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
        
    }
    return arr

}



//Optimisation of bubble Sort

function bubblesort(arr){

    let noswaps

    for (let i = 0; i < arr.length; i++) {
        noswaps = true
        for (let j = 0; j < arr.length - i; j++) {

            if(arr[j] >arr[j+1]){

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noswaps = false

            }
        }

        if(noswaps) break;
        
    }
    return arr

}




console.log(bubblesort([34,23,13,53,12]))
