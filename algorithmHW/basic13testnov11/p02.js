//Print all odd integers from 1 to 255

function odds1255a() {
  for (var i = 1; i <= 255; i++) {
    if (i%2!==0) {
      console.log(i)
    }
  }
}

odds1255a();

function odds1255b() {
  var i = 1;
  while(i <= 255) {
    if (i%2!==0) {
      console.log(i);
    }
    i += 1
  }
}

odds1255b();
