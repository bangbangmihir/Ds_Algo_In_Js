

function palindromStr(str){

    let strarr = str === str.split("").reverse().join("")

    return strarr

}

function withoutInbuiltFunction(str) {

    for(let i =0 ;i<str.length/2;i++){
        if(str[i] !== str[str.length-1-i]){
            return false
        }
    }

    return true
    
}

console.log(palindromStr("abba"))
console.log(withoutInbuiltFunction("abb"))