//greater than Y. w/arr + y

function gty(arr,y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count += 1;
    }
  }
  return count
}

console.log(gty([1,2,3,4,5], 2));

function gtyb(arr,y) {
  var count = 0;
  var i = 0;
  while (i < arr.length) {
    if (arr[i] > y) {
      count++;
      i++;
    }
    else {
      i++;
    }
  }
  return count
}

console.log(gtyb([1,2,3,4,5],2))
