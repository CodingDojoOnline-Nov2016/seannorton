//Nov29th Lecture
//isPalindrome

var p1 = "racecar"
var p2 = "todd"
var p3 = "adiwakar"

function isPalindrome(str) {
  var firsthalf = "";
  var secondhalf = "";
  for (var i = 0; i < Math.floor(str.length/2); i++) {
    firsthalf += str[i]
  }
  for (var i = str.length-1; i >= Math.ceil(str.length/2); i--) {
    secondhalf += str[i]
  }
  if (firsthalf == secondhalf) {
    return true
  }
  else {
    return false
  }
}

console.log(isPalindrome(p1));
console.log(isPalindrome(p2));
console.log(isPalindrome(p3));

//getdigits
//

var digistr = "I am 10067 years old."

//str.CharCodeAt(i)

function getdigits(str) {
  var digitsonly = ""
  for (var i = 0; i <= str.length-1; i++) {
    if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
      //if (str[1] >= '0' || str[i] <= '9')
      digitsonly += str[i];
    }
  }
  digitsonly = parseInt(digitsonly);
  console.log(typeof(digitsonly))
  return digitsonly
}

console.log(getdigits(digistr));

//ASII codes for numbers?
//a-z 0-25, A-Z 26-51, digits are 0-9
// are you less than string 0 or are you greater than string 9?
