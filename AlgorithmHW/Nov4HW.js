//Countdown
//Create a function that accepts a number as an input. Return a new array that counts down by one, from that number (as array's 'zero'th element) down to 0 (as the last element). How long is the array?

function countdown(num) {
  var array=[]
  for (var i = num; i >= 0; i--) {
    array.push(i);
  }
  console.log(array);
  console.log("The array has " + array.length + " nubmers in it.")
}

//Print and Return
//Your function will receive an array with two numbers. Print the first value, and return the second.

function pnr(a,b) {
  console.log(a);
  return(b)
}

//First Plus length
//Given an array, return the sum of the first value in the array, plus the array's length.
//What if the array's first value is not a number?

function fpl(arr) {
  if (isNaN(arr[0])===true) {
    console.log("This array's first value is not a number!")
    console.log("ERROR ERROR ERROR")
    console.log("ABORTING")
    console.log("F41l3d t0 4b0rt")
  }
  else {
    return (arr[0] + arr.length)
  }
}

//The above doesnt seem to work.

//Values greater than second
//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function vgt2(arr) {
  var values = 0
  for (var i = 0; i < arr.length; i++) {
    if (i <= 1) {
      continue
    }
    else if (i > 1) {
      console.log(arr[i])
      values = values + 1
    }
  }
  return values
}

vgt2([1,3,5,7,9,13])
