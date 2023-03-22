// Input: S1 = ABCD, S2 = CDAB
// Output: Strings are rotations of each other

// Input: S1 = ABCD, S2 = ACBD
// Output: Strings are not rotations of each other

// logic:-If two strings are a rotation of each other, one string exists in the other string which is repeated twice continuous!
function RotationString(str1,str2){
    let str = str1 + str1;
    if(str.includes(str2)) return true;
    return false
}

console.log(RotationString("ABCD","CDAB"))
console.log(RotationString("abcde", "cdeab"))
console.log(RotationString("abcd", "acdb"))