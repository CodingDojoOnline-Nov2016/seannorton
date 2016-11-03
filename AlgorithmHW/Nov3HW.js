//Multiples of Three, but not all.
//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (var x = -300; x < -6; x++) {
  if (x%3===0) {
    console.log(x)
  }
}

//What Do You Know?
//Your function will be given an input parameter INCOMING.
//Please console.log this value.

function wdyk(incoming) {
  console.log(incoming)
}

//Leap Year
//Write a function that determines whether a given year is a leap year.
//If a year is divisible by 4, it is a leap year, unless it is divisible by 100.
//However, if it is divisible by 400, then it IS.

//THIS DOESNT WORK WITH 400
function isleapyr(year) {
  if (year%4===0) {
    console.log(year + " is a leap year!")
  }
  else if (year%100===0) {
    console.log(year + " is NOT a leap year.")
  }
}

//Attempt 2 - works with 400 and 300.
function isleapyr(year) {
  if (year%400===0) {
    console.log(year + " is a leap year!")
  }
  else if (year%100===0) {
    console.log(year + " is not a leap year.")
  }
  else if (year%4===0) {
    console.log(year + " is a leap year!")
  }
}

//Flexible Countdown
//given lowNum, highNum, mult, print multiples of mult from highNum down to
//lowNum using a FOR statement.

function flexCountD(lowNum,highNum,mult) {
  for (var x = highNum; x >= lowNum; x--) {
    if (x%mult===0) {
      console.log(x);
    }
  }
}
