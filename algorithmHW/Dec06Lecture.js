//Integer to string of roman numerals.

//I II III IV VI VII VIII IX XI
//I V X L C D M
//1 5 10 50 100 500 1000
//No number bigger than 4-Thousand

//See what the remainder is when the integer divided by x is.
//Divide it evenly... that many times and then divide the remainder by the value below it.
//Do it all the way down to one.

var result = {
  'M':0,
  'D':0,
  'C':0,
  'L':0,
  'X':0,
  'V':0,
  'I':0,
}

var romannumkey = {
  'M':1000,
  'D':500,
  'C':100,
  'L':50,
  'X':10,
  'V':5,
  'I':1,
}

var rkey = ['M', 'D', 'C', 'L', 'X', 'V', 'I']

function intToRoman(int) {
  for (var i = 0; i < rkey.length-1; i++) {
    result[rkey[i]] = Math.floor(int/romannumkey[rkey[i]]);
    int = int%romannumkey[rkey[i]];
  }
  result.I = int;
  var newstring =''
  var tempstring =''
  for (var i = 0; i < rkey.length; i++) {
    if (result[rkey[i]] > 3) {
      tempstring += rkey[i] + rkey[i-1];
    }
    else {
      for (var x = 0; x < result[rkey[i]]; x++) {
        tempstring += rkey[i];
      }
    }
    newstring += tempstring;
    tempstring ='';
  }
  //if results of rkey[i] > 3, print one of rkey[i] before rkey[i-1];
  console.log(result);
  return newstring;
}

console.log(intToRoman(2545));
console.log(intToRoman(2549));//BUT THIS IS BROKEN STILL SO FIX IT FOR HOMEWORK BRUH.
console.log(intToRoman(2544));

//FOR HOMEWORK DO EDGE CASES FOR 9 4

//GIVEN A ROMAN NUMERAL STRING, GIVE BACK THE INTEGERS

str1 = 'LIV'; //54 - IF I is NOT directly before another I, it's subtracted instead of added.
str2 = 'IX';
str3 = 'VII';
str4 = 'XLIX'; //If value of index i is less than index i+1, subtract instead of add.

function romanToInt(str) {
  var intresult = 0;
  for (var i = 0; i < str.length; i++) {
    if (romannumkey[str[i]] < romannumkey[str[i+1]]) {
      intresult -= romannumkey[str[i]];
    }
    else {
      intresult += romannumkey[str[i]];
    }
  }
  return intresult;
}

// console.log(romanToInt(str1));
// console.log(romanToInt(str2));
// console.log(romanToInt(str3));
// console.log(romanToInt(str4));
