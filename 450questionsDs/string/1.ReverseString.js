
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]



function ReverseString(str){
   const reversestr = str.split("").reverse().join("")

    return reversestr
}


function ReverseStrwithoutInbuilt(str){
    let reverseStr = ""

    for(let i = str.length-1;i>=0;i++){
        reverseStr += str[i]
    }

    return reverseStr
}

console.log(ReverseString("hello"))
console.log(ReverseStrwithoutInbuilt("hello"))