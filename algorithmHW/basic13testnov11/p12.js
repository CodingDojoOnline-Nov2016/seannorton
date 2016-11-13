//Shift Array Values to the left... drop the first and leave a 0 at the end

function shiftarr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i===arr.length-1) {
      arr[i] = 0
    }
    else {
      arr[i] = arr[i+1]
    }
  }
  return arr
}

console.log(shiftarr([1,2,3,4,5]));

function shiftarrb(arr) {
  var i = 0;
  while (i < arr.length) {
    if (i===arr.length-1) {
      arr[i] = 0;
      i++;
    }
    else {
      arr[i] = arr[i+1];
      i++
    }
  }
  return arr;
}

console.log(shiftarrb([1,2,3,4,5]));
