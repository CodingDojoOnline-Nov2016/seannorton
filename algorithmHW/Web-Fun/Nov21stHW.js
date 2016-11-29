function clockHandAngles(seconds) {
  //convert seconds to hours minutes seconds separately... then get the ratio times 360.
  var hrDeg = minDeg = secDeg = hrs = mins = days = daysDeg = daycounter = ampmcounter = 0;
  var amorpm = "AM"
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    days = seconds/86400; //how many days do we have with the seconds?
    daycounter = Math.floor(days/7);
    if (daycounter >= 14) { //in case it's greater than a week.
      daycounter = daycounter%7;//"remaining" days if greater than a week.
    }
    daysDeg = (days/7)*360;
    if (daysDeg >= 360) {
      daysDeg = daysDeg%360;
    }
    hrs = seconds/3600;
    hrDeg = (hrs/12)*360;
    if (hrDeg >= 360) {
      ampmcounter = Math.floor(hrDeg/360)
      if (ampmcounter%2===0) {
        amorpm = "AM";
      }
      else {
        amorpm = "PM";
    }
    hrDeg = hrDeg%360;
  }
  mins = seconds/60;
  minDeg = (mins/60)*360;
  if (minDeg>=360) {
    minDeg = minDeg%360;
  }
  secDeg = (seconds/60)*360;
  if (secDeg >= 360) {
    secDeg = secDeg%360;
  }
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

//Statistics until doubles
//Roll 20 sided die...

function stattilldouble() {
  var sum = rollnum = 0;
  var max = 1;
  var min = 20;
  var a = 25;//this can be arbitrary.
  var b = 23;
  while (a!==b) {//so ONCE they equal the same... it'll stop the while.
    var roll = Math.floor(Math.random()*19)+1;
    console.log(roll);
    if (roll>max) {//gets max.
      max = roll;
    }
    if (roll < min) {//gets min.
      min = roll;
    }
    a = b;
    b = roll;
    sum += roll;//adds up sum.
    rollnum++;//increases roll number.
  }
  avg = sum/rollnum;
  avg = avg.toFixed(2);
  console.log("Number of Rolls:", rollnum,"Max:", max,"Min:", min,"Avg:", avg)
}

stattilldouble();

//Claire is where?
//four functions... reset moveby xlocation ylocation.

var x = 0;
var y = 0;
function reset() {
  x = 0;
  y = 0;
  console.log("Claire is at:", x, y);
}

function moveBy(a,b) {
  x += a;
  y += b;
}

function xLocation() {
  console.log(x);
}

function yLocation() {
  console.log(y);
}

reset();
moveBy(1,-2);
moveBy(3,1);
xLocation();
yLocation();

function distFromHome() {
  var dist = Math.sqrt(Math.pow((x - 0),2) + Math.pow((y - 0),2))
  dist = dist.toFixed(2)
  console.log("Claire is this far away from home:", dist)
}

reset();
moveBy(4,4);
distFromHome();
