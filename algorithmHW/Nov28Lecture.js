//reverse string

function reversestr(str) {
  var newstring =''
  for (var i = str.length-1; i >= 0; i--) {
  newstring += str[i]
  }
  return newstring;
}

console.log(reversestr("abc"));

//remove blanks

function rmvblnks(str) {
  var newstring =''
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      newstring += str[i]
    }
  }
  return newstring
}

console.log(rmvblnks("a dog"));
