//Nov 7th Algorithm HW Sean Norton Coding Dojo October 31st Cohort

//This Length, That Value
//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" If they are both the same.

var arr = []
function tltv(a,b) {
  if (a===b) {
    return("Jinx!");
  }
  else {
    for (var i = 0; i < a; i++) { //need to have < a or start at i = 1 to get the length of arr = a
      arr.push(b);
    }
    return arr
  }
}

var answer = tltv(2,3);
console.log(answer);

//Fit the First value
//Your function should accept an array. If value at [0] is greater than array's length, print "Too big!"
//If value at [0] is less than array's length, print "Too small!"; otherwise print "Just right!"

function ftfv(arr) {
  if (arr[0] > arr.length) {
    console.log("Too Big!");
  }
  if (arr[0] < arr.length) {
    console.log("Too Small!");
  }
  else if (arr[0] === arr.length) {
    console.log("Just right!");
  }
}

//if vs. else if vs. else?

ftfv([1,2,3])
ftfv([4,2])
ftfv([2,2])

//Farenheit to Celsius
//Kevin wants to convert between temperature scales. Create ftC(fDegrees) that accepts a number of degrees in Farenheit,
//and returns the equivalent temperature as expressed in celsius....
//F = (9/5 * C) + 32

function ftC(fDegrees) {
  return ((fDegrees - 32) * (5/9));
}

var cel = ftC(32);
console.log(cel);
var cel2 = ftC(100);
console.log(cel2);

//Celsius to Fahrenheit
//create the opposite.

function ctF(cDegrees) {
  return ((9/5 * cDegrees) + 32);
}

var far = ctF(25);
console.log(far);
var far2 = ctF(0);
console.log(far2);

//Optional Assignment
//Do F and C values equate at a certain number? Do a series of Celsius integer values starting at 200,
//checking to see if it is equal to the corresponding Farenheit value.
function ctF(cDegrees) {
  return ((9/5 * cDegrees) + 32);
}

function cfcheck() {
  for (var i = 200; i >= 0; i--) {
    if (ctF(i) === i) {
      console.log( i + " C is equal to " + i + "F");
    }
    console.log(ctF(i));
  }
}

cfcheck();

//Seems to work?
