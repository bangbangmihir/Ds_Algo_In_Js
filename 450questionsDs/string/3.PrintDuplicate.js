// Print all character frequency in the input string

function printduplicate(str){

    let obj ={}

    for(let i=0;i<str.length;i++){
        let char = str[i].toLowerCase()
        if(obj[char]>0){
            obj[char]++
        }else{
            if(char !== " "){
                obj[char] = 1
            }
        }
    }


    return obj

}

//Print only duplicate value



function printOnlyduplicate(str){

    let obj ={}

    for(let i=0;i<str.length;i++){
        let char = str[i].toLowerCase()
        if(obj[char]>0){
            obj[char]++
        }else{
            if(char !== " "){
                obj[char] = 1
            }
        }
    }

    // for(let i in obj){
    //     if(obj[i] >1){
    //         console.log(i+" is "+obj[i] + "times")
    //     }
    // }

    let newobj = Object.keys(obj).filter((key)=>obj[key] > 1)

    return newobj

}

// console.log(printduplicate("Mihir is a good boy"))
console.log(printOnlyduplicate("Mihir is a good boy"))