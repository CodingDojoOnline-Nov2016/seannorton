//Zero out negatives.

function zeroneg(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr
}

console.log(zeroneg([-2,2,3,-4,5]));

function zeronegb(arr) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] < 0) {
      arr[i] = 0;
      i++;
    }
    else {
      i++;
    }
  }
  return arr;
}

console.log(zeronegb([-2,2,3,-4,5]));
