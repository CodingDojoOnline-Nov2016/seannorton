//NOV 8th Algorithm HW

//Reverse Array
//Given an array, write a function that reverse values, in place.

  var arr = [3,1,6,4,2];
  function revarr(arr) {
    for (var i = 0; i <= arr.length/2; i++){
      var temp = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = temp;
    }
    return arr
    console.log(arr)
  }
revarr(arr)

//Kinda powered my way through this one...

//Always Hungry
//Create a function that accepts an array, and
//prints yummy each time one of the values is equal to food.
//if no array elements are food, then print "I'm hungry" once.

function imhungry(arr) {
  var count = 0; //can do without this... you just need to see if it exists within the arr
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
      count = count + 1 //var full = true... and then "if !true" log I'm hungry.
    }
  }
  if (count === 0) {
    console.log("I'm hungry")
  }
}

imhungry([1,2,3,"food"])
imhungry([1,2,3])

function imhungry(arr) {
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
      var full = true //"hoists" it to the top and defines it right away within the function.
    }
  }
  if (!full) {
    console.log("I'm hungry")
  }
}

imhungry([1,2,3,"food"])
imhungry([1,2,3])


//In Lecture

//Swap Towards the Center
//Given an array, swap the first and last, third and third to last, etc.
//Every other one.
