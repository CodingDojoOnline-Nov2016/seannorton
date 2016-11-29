//SumToOne
//keep adding the digits in a number to get a single number.

// function sumToOne(num) {
//   if (num.length===1) {
//     return num
//   }
//   var i = 0;
//   var sum = 0;
//   while (i < num.length) {
//     sum += num[i];//Doesn't work because you can't index a number?
//     i++;
//   }
//   sumToOne(sum)
// }

// console.log(sumToOne(928));

// function digitsadd(num) {
//   var i = 0;
//   var sum = 0;
//   while (i < num.length) {
//     sum += num[i];
//     i++;
//   }
//   return sum;
// }
//
// console.log(digitsadd(1000));

// var num = 928;
// console.log(num[1]);//I can't get the index of a number?

function sumToOne2(num) {
  if (num.length === 1) {
    return num;
  }
  var numstring = num.toString(10); //This doesn't work?
  var i = 0;
  var sum = 0;
  for (var i = 0; i < numstring.length; i++) {
    sum += parseInt(numstring[i]);
  }
  sumToOne2(sum);
}

// console.log(sumToOne2(928));

function sumDigits(num) {
  var numstring = num.toString(10);
  var sum = 0;
  for (var i = 0; i < numstring.length; i++) {
    sum += parseInt(numstring[i]);
  }
  return sum;
}

console.log("sumDigits(928) = "+sumDigits(928));

function sumDigitsWhile(num) {
  var numstring = num.toString(10);
  var sum = 0;
  var i = 0;
  while (i < numstring.length) {
    sum += parseInt(numstring[i]);
    i++;
  }
  return sum
}

console.log("sumDigitsWhile(928) = "+sumDigitsWhile(928));//IT WORKS NOW MAKE IT RECURSIVE. GIVES BACK 19

function sumToOne3(num) {
  if (num.length === 1) {
    return num;
  }
  var numstring = num.toString(10);
  var sum = 0;
  var i = 0;
  while (i < numstring.length) {
    sum += parseInt(numstring[i]);
    i++;
  }
  return sum
}

//console.log(sumToOne3(1));//GIVES BACK 1
//console.log(sumToOne3(928));//THIS WORKS TOO! NOW I NEED TO MAKE IT LOOP. GIVES BACK 19

function sumToOne4(num) {
  if (num.toString().length === 1) {
    return num;
  }
  var numstring = num.toString(10);
  var sum = 0;
  var i = 0;
  while (i < numstring.length) {
    sum += parseInt(numstring[i]);
    i++
  }
  if (sum.toString().length > 1) {
    return sumToOne4(sum);
  }
  else {
    return sum;
  }
}

console.log("sumToOne4(928) = "+sumToOne4(928));
console.log("sumToOne4(25) = "+sumToOne4(25));

//********************************************************************//

//Clock Hand Angles
//given a time input of xxxxxx (hours, minutes, seconds), print the angles as such:
//Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs.

function clockHandAngles(seconds) {
  //convert seconds to hours minutes seconds separately... then get the ratio times 360.
  var hrDeg = minDeg = secDeg = hrs = mins = 0;
  if (seconds >= 3600) {
    hrs = seconds/3600;
    hrDeg = (hrs/12)*360;
    if (hrDeg > 360) {//We only do this for hours because any minutes greater than sixty will be a part of the hours.
      hrDeg = hrDeg%360;//This helps deal with angles greater than 360.
    }
    seconds = seconds%3600
  }
  if (seconds >= 60) {
    mins = seconds/60;
    minDeg = (mins/60)*360;
    seconds = seconds%60;
  }
  secDeg = (seconds/60)*360;//This cant be an else statement otherwise if there are minutes... this wouldn't run.
  hrDeg = hrDeg.toFixed(3)
  minDeg = minDeg.toFixed(3)
  secDeg = secDeg.toFixed(3)
  console.log("Hour hand: "+hrDeg+" degs. Minute hand: "+minDeg+" degs. Second hand: "+secDeg+" degs.")
}

clockHandAngles(3600);
clockHandAngles(119730);
clockHandAngles(30);

//ADD DAYS AND AM/PM (SINCE MIDNIGHT) Also, week hand?
