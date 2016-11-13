//Get the average of an array.

function getavgarr(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  console.log(avg);
}

getavgarr([1,2,3,4,5]);

function getavgarrb(arr) {
  var sum = 0
  var i = 0
  while (i < arr.length) {
    sum = sum + arr[i];
    i++;
  }
  var avg = sum / arr.length;
  console.log(avg)
}

getavgarrb([1,2,3,4,5]);
