// counting each char in a string
// Time Complexity O(n)

function CheckAnagram(str1,str2) {
    const obj = {}
    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        obj[element] ? obj[element] += 1 : obj[element] = 1
    }
    // console.log(obj)
    for (let j = 0; j < str2.length; j++) {
        const element = str2[j];
        if(!obj[element]){
            return false
        }
        else{
            obj[element] -= 1
        }
    }
    return true
    
}

const result = CheckAnagram("zea","aze")
// const result = CheckAnagram([3,4,6,3],[3,3,6,4])
console.log(result)