

function bookindex(arr) {
  var newstring = ''
  var temp = ''
  var findend = true
  var i = 0;
  while (i < arr.length) {
    if (arr[i]+1 != arr[i+1]) { //if the next one is not equal to the current one plus 1
      newstring = newstring + arr[i] + ", ";
      i++;
    }
    else if (arr[i]+1 == arr[i+1]) {
      var start = arr[i] + "-";
      findend = false;
      while (!findend) {//while find end is false... you're finna find the end.
          if (arr[i]+1 != arr[i+1]) {//the next one isn't 1 greater than the current so it stops it.
          var end = arr[i] + ", "
          newstring = newstring + start + end;//once we find the "end" we want to print this value with the rest of the string.
          i++;
          findend = true;
        }
        i++
      }
    }
  }
  return newstring
}

console.log(bookindex([1,3,4,5,6,7,10]));
