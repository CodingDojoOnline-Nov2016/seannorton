//Nov 10th Algorithm HW Sean Norton

//Only keep the last few
//Given array and number x, remove all except the LAST x elements, and return arr (Changed and shorter)
//Given [2,4,6,8,10],3 change the array to 6,8,10 and return it.

var arr = [1,2,3,4,5]
var arr2 = [1,2,3,4,5,6,7,8,9,10]
var x = 0

function keeplast(arr, x) {
  var idx = 0
  var lastnum = arr.length - x;
  for (var i = lastnum; i < arr.length; i++) {
    arr[idx] = arr[i];
    idx += 1
  }
  for (var y = lastnum; y > 0; y--) { //Not needed.
    arr.pop(); //array.length - lastnum-1
  }
  console.log(arr)
}

keeplast(arr, 3)
keeplast(arr2, 5)

//Poor Kenny
//Kenny tries to stay safe, but somehow EVERYDAY something happens.
//If there is a 10% chance of volcano
//15% chance of a tsunami,
//20% of earthquake,
//25% chance of blizzard, and
//30% chance of meteor strike...
//WRite function whatHappensToday() to print the outcome.

// math.random() * 100

// function whatHappensToday() {
//   var chance = Math.random() * 100
//   console.log("Today, Kenny will run into...")
//   if (chance < 15) {
//     console.log("A Tsunami!")
//   }
//   else if (chance < 35) {
//     console.log("Earthquake!")
//   }
//   else if (chance < 60) {
//     console.log("Blizzard!")
//   }
//   else if (chance < 90) {
//     console.log("Meteor Strike!")
//   }
//   else if (chance < 100) {
//     console.log("Volcano!")
//   }
//   console.log(chance)
// }
//
// whatHappensToday()
// whatHappensToday()
// whatHappensToday()

//What REALLY happened?
//Kyle (smarter than Kenny) notes that the chance of one disaster is totally unrelated to the chance of another.
//Change what happens today to create what REALLY happens today.
//Test of each disaster independently.

// function whatREALLYHappensToday() {
//   console.log("Today there will be...")
//   var count = 0
//   if ((Math.random() * 100) < 15) {
//     console.log("A Tsunami!")
//     count += 1;
//   }
//   if ((Math.random() * 100) < 20) {
//     console.log("An earthquake!")
//     count += 1;
//   }
//   if ((Math.random() * 100) < 25) {
//     console.log("A blizzard!")
//     count += 1;
//   }
//   if ((Math.random() * 100) < 30) {
//     console.log("A meteor strike!")
//     count += 1;
//   }
//   if (count === 0) {
//     console.log("...nothing?")
//     count += 1;
//   }
// }
//
// whatREALLYHappensToday()
// whatREALLYHappensToday()
// whatREALLYHappensToday()


//Nov10th Lecture

//Soaring IQ
//My answer
function soarIQ() {
  var day = 1
  var iq = 101
  while (day <= 98) {
    iq += .01 * day;
    day += 1;
  }
  console.log(iq)
}

soarIQ()
