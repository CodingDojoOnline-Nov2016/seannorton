//Array Rotate
//Assumptions?
//[1,2,3,4], 1

function rotateArr(arr, shiftBy) {
  if (shift > arr.length) {
    shift = arr.length%shift;
  }
  // var last = arr[arr.length-1]
  while (shift) {
    var temp = arr[arr.length-1];
    for (var idx = arr.length-1; idx >= 0; idx--) {
      arr[idx] = arr[idx-1];
      }
      arr[0] = temp;
      shift--;
  }
  return arr
}

//add an...
//if (shift < 0) {
//shift = Math.abs(arr.length+shift)
//}
