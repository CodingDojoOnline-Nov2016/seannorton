//Array with Odds
//Create an array with all the odd integers between 1 and 255 inclusive.

function oddarr1255() {
  var newarr = [];
  for (var i = 1; i <= 255; i++) {
    if (i%2!==0) {
      newarr.push(i);
    }
  }
  return newarr;
}

console.log(oddarr1255());

function oddarr1255b() {
  var newarr = [];
  for (var i = 1; i <= 255; i += 2) {
    newarr.push(i);
  }
  return newarr;
}

console.log(oddarr1255b());

function oddarr1255c(limit) {
  var newarr = [];
  var i = 1;
  while (i <= limit) {
    if (i%2!==0) {
      newarr.push(i);
      i += 1;
    }
    else {
      i += 1
    }
  }
  return newarr;
}

console.log(oddarr1255c(255));
