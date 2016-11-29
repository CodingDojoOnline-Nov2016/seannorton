//Iterate through a given array, printing each value.

function iterarraya(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
}

iterarraya([1,2,3,4,5]);

function iterarrayb(arr) {
  var i = 0
  while (i < arr.length) {
    console.log(arr[i]);
    i++
  }
}

iterarrayb([1,2,3,4,5]);
