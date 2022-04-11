//Method ===> 1
function CountChar(str) {
  var countspecificchar = {};
  for (let i = 0; i < str.length; i++) {
    // let char = str[i]
    //If i Want to only Treat small and capital Alphabet As same we can now convert it into lowercase or uppercase
    let char = str[i].toLowerCase();
    //Now Setting the value in the Objects
    if (countspecificchar[char] > 0) {
      countspecificchar[char]++; //Increasing the Value of Specific Char
    } else {
      if (char !== " ") { //Not Counting Space in THe objects
        countspecificchar[char] = 1;
      }
    }
  }
  return countspecificchar;
}


//Now Improving In Code 
//Method 2

function CountChar(str) {
    var obj = {};
    for(var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){ //The test() method returns true if it finds a match, otherwise false.
            obj[char] = ++obj[char] || 1
        }
    }
   

    return obj;
  }


const result = CountChar("I am Mihir Sharma");
console.log(result);


// Note : - charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
// value from 47 To 58 Represent {0-9} 
// value from 64 To 91 Represent {A-Z} 
// value from 96 To 123 Represent {a-z}

// The charAt() Method
// charAt() returns the character at a specified position in a string.
// let text = "HELLO WORLD";
// let letter = text.charAt(0);
// o/p => H