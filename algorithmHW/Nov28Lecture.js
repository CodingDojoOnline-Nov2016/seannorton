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

//remove blanks with other thingies

var khaled = "Lorem Khaled Ipsum is a major key to success. \nThey don’t want us to eat. I’m up to something. \nYou do know, you do know that they don’t want you to have lunch. \n\tI’m keeping it real with you, so what you going do is have lunch. Eliptical talk. \n\tEliptical talk. The key to more success is to have a lot of pillows. Every chance I get, I water the plants, Lion! The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile."

function rmvblnks2(str) {
  var newstring= ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ' || str[i] == '\n' || str[i] == '\t') {
      continue;
    }
    else {
      newstring += str[i];
    }
  }
  return newstring;
}

console.log(khaled);
console.log(rmvblnks2(khaled));
