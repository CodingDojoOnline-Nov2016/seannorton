//MinMaxAvg

function minmaxavg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var newarr = []
  var avg = sum / arr.length;
  newarr.push(max);
  newarr.push(min);
  newarr.push(avg);
  return newarr;
}

console.log(minmaxavg([1,2,3,4,5]));

function minmaxavgb(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  var i = 0;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
      sum += arr[i];
      i++;
    }
    if (arr[i] < min) {
      min = arr[i];
      sum += arr[i];
      i++;
    }
    else {
      sum += arr[i];
      i++;
    }
  }
  var newarr = [];
  var avg = sum / arr.length;
  newarr.push(max);
  newarr.push(min);
  newarr.push(avg);
  return newarr;
}

console.log(minmaxavgb([1,2,3,4,5])); // not working
