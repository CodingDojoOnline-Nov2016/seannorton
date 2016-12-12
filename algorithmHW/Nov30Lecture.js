//Nov 30th Lecture
//splits and joins

var str = "This is our split sentence."

//str.split() - returns same string in an array

function pushstringarray(str,x) {
  var emptyarray = []
  emptyarray.push(str);
  return emptyarray;
}

// console.log(pushstringarray(str));

function individualcharacters(str,x,limit) {
  var emptyarray = [];
  if (x == '') {
    for (var i = 0; i < str.length; i++) {
      emptyarray.push(str[i]);
    }
  }
  else if (!x) { //YOU CAN DO THIS. weird.
    emptyarray.push(str);
  }
  else {
    var tempstring = ""
    // var limitcounter = 0
    for (var i = 0; i <str.length; i++) {
      // if (limitcounter == limit) {//not NECESSARY cuz you can set the .length
      //   break;
      // }
      if (str[i] == x) {
        emptyarray.push(tempstring);
        tempstring = "";
        // limitcounter++
      }
      else {
        tempstring += str[i];
      }
    }
  }
  if (limit != undefined) {
    emptyarray.length = limit;
  }
  return emptyarray;
}

//limit parameter? only do y amount of splits.

console.log(individualcharacters(str,'s',2))

//JOIN

function joinThisArray(arr,x) {
  var emptystring = ""
    for (var i = 0; i < arr.length; i++) {
      emptystring += arr[i];
      if (!x) {
        emptystring += ','
      }
      else {
        emptystring += x;
      }
    }
  return emptystring
}

console.log(joinThisArray(individualcharacters(str,'s'), 'ARGH'))
