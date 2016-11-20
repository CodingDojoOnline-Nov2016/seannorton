//Sweatshirt Pricing
//given a number of sweatshirts, returns the cost.
//9% discount for 2, 19% for three, 35% for four.
//Hoodies cost 20 dollars including tax.
//round UP to the nearest dollar.

function sweatShirtPricing(num) {
  var subtotal = num*20;
  var discount = 1;
  if (num===2) {
    discount = 1 - .09;
  }
  else if (num===3) {
    discount = 1 - .19;
  }
  else if (num >= 4) {
    discount = 1 - .35;
  }
  var total = subtotal * discount;
  // total = Math.ceil(total);
  total = total.toFixed(2);
  console.log(num+" sweatshirts costs "+total+" dollars.")
  // return   Math.ceil(total);
}

sweatShirtPricing(5)
sweatShirtPricing(1)
sweatShirtPricing(3)

//clockhandangles with days and AM/PM

function clockHandAngles(seconds) {
  //convert seconds to hours minutes seconds separately... then get the ratio times 360.
  var hrDeg = minDeg = secDeg = hrs = mins = days = daysDeg = daycounter = ampmcounter = 0;
  var amorpm = "AM"
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (seconds >= 86400) {//day counter... //Doesn't work fully. Re-do this later.
    days = seconds/86400; //how many days do we have with the seconds?
    daycounter = Math.floor(days/7);
    if (daycounter >= 14) { //in case it's greater than a week.
      daycounter = daycounter%7;//"remaining" days if greater than a week.
    }
    daysDeg = (days/7)*360;
    if (daysDeg > 360) {
      daysDeg = daysDeg%360;
    }
    seconds = seconds%86400;
  }
  if (seconds >= 3600) {
    hrs = seconds/3600;
    hrDeg = (hrs/12)*360;
    if (hrDeg > 360) {//We only do this for hours because any minutes greater than sixty will be a part of the hours.
      ampmcounter = Math.floor(hrDeg/360)//sees how many 12hour periods there have been.
      if (ampmcounter%2===0) {//if first cycle (0/2) or second cycle (2/2) then it's am.
        amorpm = "AM";
      }
      else {
        amorpm = "PM";
      }
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
  daysDeg = daysDeg.toFixed(3);
  hrDeg = hrDeg.toFixed(3);
  minDeg = minDeg.toFixed(3);
  secDeg = secDeg.toFixed(3);
  console.log("It is "+weekdays[daycounter]+" "+amorpm+". Day Hand: "+daysDeg+" Hour hand: "+hrDeg+" degs. Minute hand: "+minDeg+" degs. Second hand: "+secDeg+" degs.")
}

clockHandAngles(3600);
clockHandAngles(119730);
clockHandAngles(1000000);
clockHandAngles(30);

//ISPRIMEREDUX

function isPrime(x) {
  var i = 2; //We start here because it's not necessary to divide by one.
  console.log(x);
  if (x < 11) {
    while (i < x) {
      if (x%i===0) {
        return false
      }
      i++
    }
  }
  else {
    while (i <= 11) {
      if (x%i===0) {
        return false
      }
      i++
    }
  }
  return true
  // return true //because return breaks a function.
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(13));
console.log(isPrime(14));
console.log(isPrime(10000000));
console.log(isPrime(6700417));
