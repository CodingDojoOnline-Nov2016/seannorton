//Array Min to Front.
//Given an array of comparable values, move the lowest element to the array's front.
//Shift everything else back. Don't otherwise change the order.

function mintofront(arr) {
  var min = arr[0];
  var lowindex = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      lowindex = i;
    }
  }
  for (var i = lowindex; i > 0; i--) {
    arr[i] = arr[i-1];
  }
  arr[0] = min;
  return(arr)
}

console.log(mintofront([4,2,1,3,5]));
