//Print Integers from 0 to 255, and with each integer, print the sum so far.

function sum0255a() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    console.log(i);
    console.log(sum += i);
  }
}

sum0255a();

function sum0255b() {
  var sum = 0;
  var i = 0;
  while (i <= 255) {
    console.log(i);
    console.log(sum += i);
    i++;
  }
}

sum0255b();
