//Swap String for array Negative Values

function swapstringneg(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr
}

console.log(swapstringneg([-2,2,3,4,-5]));

function swapstringnegb(arr) {
  var i = 0;
  while (i < arr.legnth) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
      i++;
    }
  }
  return arr
}

console.log(swapstringnegb([-2,2,3,4,-5]));//Not working...
