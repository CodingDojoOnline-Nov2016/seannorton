//Filter Range
//given arr min and max, take out values from array between min and max.
//INCLUSIVE OR EXCLUSIVE?
//work in place, and keep values in the original order.

function filterrange(arr,min,max) {
  var idx = 0;
  while (idx<arr.length) {
    if (arr[idx] > min && arr[idx] < max) {
      for(var idx2 = idx; idx2 < arr.length; idx2++) {
        arr[idx2] = arr[idx2+1];
      }
      console.log(arr);
      arr.length-=1;
    }
    else {
      idx++;
    }
  }
  return arr;
}

console.log(filterrange([1,2,3,4,5,6,7],3,5));

//
