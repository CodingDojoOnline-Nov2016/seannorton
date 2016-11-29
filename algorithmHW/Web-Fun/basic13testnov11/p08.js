//Square each value in a given array.

function sqarr(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr
}

console.log(sqarr([1,2,3,4,5]));

function sqarrb(arr) {
  var i = 0;
  while (i < arr.length) {
    arr[i] = arr[i]*arr[i];
    i++;
  }
   return arr
}

console.log(sqarrb([1,2,3,4,5]));
