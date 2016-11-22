//Date, on a deserted Island.


var weekdays = ["There is no 0 day of the week, fool.", "Sunday", "Monday", "Tuesday", "Wednesday", "Thrsday", "Friday", "Saturday"]
function weekdayName(weekdayNum) {
  console.log(weekdays[weekdayNum]);
}

weekdayName(1);

var weekdays2 = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thrsday", "Friday"]
function weekdayName2(dayNum) {
  dayNum = dayNum%7;
  console.log(weekdays2[dayNum]);
}

weekdayName2(14);

function someDays() {
  for (var i = 1; i <= 17; i++) {
    var someDCounter = Math.floor(Math.random()*364)+1
    var weekdayor = someDCounter%7
    if (weekdayor > 1) {
      console.log("Work hard because it's:")
    }
    else if (weekdayor <= 1) {
      console.log("Enjoy your day off because it's:")
    }
    weekdayName2(someDCounter);
  }
}

someDays();

var months = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "November"]
function monthName(monthNum) {//Sean, it's 1 to 12 so switch up your array later accordingly. Kthanks, Love, Sean.

}
