//Nov 11th
//DONT EVER USE A FOR LOOP AGAIN
//everything can be written with just while and ifs... so there's no real reason to use a for loop...
//it helps to control your logic and such...

function subtract(a,b) {
  var sum = a - b;
  return sum;
}

function add(a,b) {
  var sum = a + b;
  return sum;
}

function multiply(a,b) {
  var sum = 0;
  for (var i = 0; i < b; i = add(i,1)) {
      sum = add(sum,a);
  }
  console.log(sum);
}

// multiply(3,2)
// multiply(10,5)


//How many times can b fit into a?
//subtract b from a, and move up the counter each time.
//if a - b becomes less than 0, it stops, and gives the leftover value of a into the remainder function.
function divide(a,b) {
  var divisible = 0; //counts how many times you can subtract b from a
  var remainder = 0; //will be the leftover
  var newarr=[];//push answers into this array
  while(a - b >= 0) {
    a = subtract(a,b);
    divisible = add(divisible,1);
  }
  remainder = a;
  newarr.push(divisible);
  newarr.push(remainder);
  console.log(newarr)
}
//
// divide(9,3);
// divide(10,3);

//THIS DOESNT WORK BECAUSE STRINGS IMMUTABLE
// function reversestr(astring) {//dont use str
//   var astringlen = astring.length;//stores astring length
//   var count = 0;
//   var temp = ""
//   while (count < astringlen / 2) {//goes halfway through the string
//     temp = astring[astringlen - 1 - count];
//     astring[astringlen - 1 - count] = astring[count];
//     astring[count] = temp;
//     count = count + 1
//   }
//   console.log(astring);
// }

// reversestr("hello")

function reversestr(astring) {
  var astringlen = astring.length - 1;
  var newstring = ""
  while (astringlen >= 0) {
    newstring = newstring + astring[astringlen];
    astringlen = astringlen - 1;
  }
  return newstring
}

// console.log(reversestr("hello"));

//fibonnacci sequence
//0 1 1 2 3 5 8 13 21 34

function fibonnacci(num) {
  var a = 0;
  var b = 1;
  var temp = 0;
  var count = 2; //because we're starting with the first two numbers of the sequence.
  while(count <= num) { //going until we hit that limit
    temp = a
    a = add(a,b);
    b = temp
    count = add(count,1);
  }
  return a;
}

// console.log(fibonnacci(10));

//For "HW"
//Find me the sum of all the primes from 1-1 million inclusive.
//1 and 0 are not prime numbers.
//

function ismodtrue(x,y) {
  if (x%y===0) {
    return true
  }
  else {
    return false
  }
}

function superPrimeSumZ(limit) {//This doesnt work.
  var i = 2; //Because 1 doesn't count as a prime number.
  var sum = 0; //Need to add 2 3 5 7 11 before getting into the next part...
  while (i <= limit) {
    if (i === 2 || 3 || 5 || 7 || 11) { //is this "cheating"?
      sum = add(sum,i);
      i = add(i,1);
    }
    else if (i > 11 && ismodtrue(i,2) === false && ismodtrue(i,3) === false && ismodtrue(i,5) === false && ismodtrue(i,7) === false && ismodtrue(i,11) === false ) {
      //if i CANNOT be divided evelyn by all of these numbers, add it to sum. but what about 2 3 5 7 11?
      sum = add(sum,i);
      i = add(i,1);
    }
  }
  return sum;
}

// console.log(superPrimeSumZ(11)) //Should return/log 28
// console.log(superPrimeSumZ(25))//(2 3 5 7 11 13 17 19 23) should be 100?
// console.log(superPrimeSumZ(1000000));

function primechecker(x) {//This does not work.
  if (x === 2 || 3 || 5 || 7 || 11) {
    console.log(x + " is prime!");
  }
  if (x > 11 && ismodtrue(x,2) === true || ismodtrue(x,3) === true || ismodtrue(x,5) === true || ismodtrue(x,7) === true || ismodtrue(x,11) === false ) {
    console.log(x + " is not prime!")
  }
  else {
    console.log(x + " is prime!")
  }
}

function primecheckerb(x) { //divide UP to X. This sucks for very huge numbers.
  var i = 2; //we start here because it's not necessary to divide by one.
  while (i < x) {//if it's two, it'll automatically drop down to line 150. we also do less than and not less than and equal to because here we're seeing if it's divisible by anything.
    if (x%i===0) {
      return false;
    }
    i++
  }
  return true; //remember, return breaks a function.
}

console.log(primecheckerb(2));
console.log(primecheckerb(3));
console.log(primecheckerb(5));
console.log(primecheckerb(23));
console.log(primecheckerb(24));

//is there a way to see if it's dvisible by every other number?
//check if the numbers leading up to i are divisible or not...
//
// console.log(255%5);
// console.log(ismodtrue(255,5));

// console.log(primecheckerb(5));
// console.log(primecheckerb(19));
// console.log(primecheckerb(255));

function primesum(limit) {
  var i = 2;
  var sum = 0;
  while (i <= limit) {
    if (primecheckerb(i)===true) {
        sum = add(sum,i);
    }
    i++;
  }
  return sum;
}

// console.log(primesum(11));
// console.log(primesum(25));
// console.log(primesum(1000000));
