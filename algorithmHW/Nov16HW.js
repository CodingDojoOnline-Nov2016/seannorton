//Twelve Bar Blues
//logs number 1 then boom chick boom chick... up till twelve.

function twelvebb() {
  var counter = 1;
  while (counter <= 12) {
    console.log(counter);
    console.log("chick")
    console.log("boom");
    console.log("chick");
    counter++
  }
}

twelvebb();

//Fibonacci
function nth_fib(x) {
  if (x === 0) {//0 is "given"
    return 0;
  }
  if (x === 1) {//1 is "given"
    return 1;
  }
  var a = 0;
  var b = 1;
  var temp = 0;
  while (x-2 >= 0) {//x is the index number... but we subtract 2 becuse the first two are "given" //x-2 reevaluates every time here. (can just do x -= 2 earlier.) //can also just do while (x) because 0 is false.
    temp = a + b;
    a = b;
    b = temp;
    x--;
  }
  return b;
}

console.log(nth_fib(0));
console.log(nth_fib(1));
console.log(nth_fib(2));
console.log(nth_fib(3));
console.log(nth_fib(4));
console.log(nth_fib(5));
console.log(nth_fib(7));

  // 0 1 1
  // a b c
  //   a b

  //do it recursively.

  function recurFib(n) {

  }
