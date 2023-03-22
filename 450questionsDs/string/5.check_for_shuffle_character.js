// Check if a string is a shuffle of two other given strings


// String first = "XY";
// String second = "12";
// String[] results = {"1XY2", "Y1X2", "Y21XX"};

function CheckShuffleString(str1, str2, str3) {
  let merge = str1 + str2;
  let sortedstr1 = merge.split("").sort().join("");
  let sortedstr2 = str3.split("").sort().join("");

  for (let i = 0; i < str3.length; i++) {
    if (sortedstr1[i] === sortedstr2[i]) {
      return true;
    }
  }
  return false;
}

console.log(CheckShuffleString("abc", "def", "yourdfabcename"));
