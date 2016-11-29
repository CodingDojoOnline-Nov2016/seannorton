//Given any string.
//Give me all the characters that are used and all the times they're used.

//var to count how many times per letter...
//run through the string...
//dont use an object

function stringlettercounter(somestring) {
  //var for each number and a corresponding counter... but that's too many variables...
  var a = "a";
  var acounter= 0;
  var i = 0;
  while (i < somestring.length) {
    if (somestring[i] === a) {
      acounter += 1;
    }
    i++;
  }
  console.log(a+" appears "+acounter+" times.")
}
//
// if (somestring[i] === undefined) {
//   var somestring[i] = somestring[i];
//   var
// }

//match up the letter i hit with a corresponding counter.
// var a ="a";
// var b ="b";
//if somestring[i] === undefined
//var somestring[i]
//var somestring[i]counter += 1
//
//
//
//array for letters
//while (i < arr.length) {
// if (somestring[i] === a variable in the array...)
//   a variable in the array += 1
// }
//if ()
//
// log variable name + variable... value...
//
var blah = "apples and bananas."
stringlettercounter("apples and bananas.");
console.log(blah[0]);
var blah[0] = 0;
console.log(blah[0]);
//
//Pass all string indexes into an array... and add up the number of times found?
//
