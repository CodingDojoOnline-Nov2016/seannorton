//Given an array, find and print its largest element.

function prntmax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

prntmax([1,2,3,4,5]);
prntmax([5,4,3,2,1]);

function prntmaxb(arr) {
  var max = arr[0];
  var i = 0;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  console.log(max);
}

prntmaxb([1,2,3,4,5]);
prntmaxb([5,4,3,2,1]);
