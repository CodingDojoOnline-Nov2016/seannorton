//you have a text field 75 characters long.
//you put in stars from left/right/Center

function drawLeftStars(num) {
  var starstring = ""
  while (starstring.length<=75) {
    if (num>0) {
      starstring += "*";
      num--;
    }
    else {
      starstring += "-";
    }
  }
  return starstring;
}

console.log(drawLeftStars(25));
console.log(drawLeftStars(50));

function drawRightStars(num) {
  var starstring = "";
  var spaces = 75 - num;
  while (starstring.length <= 75) {
    if (spaces > 0) {
      starstring += "-";
      spaces--;
    }
    else {
      starstring += "*";
    }
  }
  return starstring;
}

console.log(drawRightStars(50));
console.log(drawRightStars(25));

function drawCenterStars(num) {
  var starstring="";
  var leftspaces = (75 - num) /2; //but what if it's odd? or something?
  while (starstring.length <= 75) {
    if (leftspaces > 0) {
      starstring += "-";
      leftspaces--
    }
    else if (num > 0) {
      starstring += "*";
      num--;
    }
    else {
      starstring += "-";
    }
  }
  return starstring;
}

console.log(drawCenterStars(23));
console.log(drawCenterStars(50));

//same as above but now pass through a character you can use instead of stars.

function drawLeftChars(num, char) {
  var starstring = ""
  while (starstring.length<=75) {
    if (num>0) {
      starstring += char;
      num--;
    }
    else {
      starstring += "-";
    }
  }
  return starstring;
}

console.log(drawLeftChars(25,"&"));
console.log(drawLeftChars(50,"%"));

function drawRightChars(num, char) {
  var starstring = "";
  var spaces = 75 - num;
  while (starstring.length <= 75) {
    if (spaces > 0) {
      starstring += "-";
      spaces--;
    }
    else {
      starstring += char;
    }
  }
  return starstring;
}

console.log(drawRightChars(50,"#"));
console.log(drawRightChars(25,"@"));

function drawCenterChars(num, char) {
  var starstring="";
  var leftspaces = (75 - num) /2; //but what if it's odd? or something?
  while (starstring.length <= 75) {
    if (leftspaces > 0) {
      starstring += "-";
      leftspaces--
    }
    else if (num > 0) {
      starstring += char;
      num--;
    }
    else {
      starstring += "-";
    }
  }
  return starstring;
}

console.log(drawCenterChars(23,"^"));
console.log(drawCenterChars(50,"!"));

//Threes and Fives...
//create threesFives that adds values from 100 and 4000000 (inclusive)
//if the value is divisible by 3 or 5.

function only3or5(num) {
  if (num%3===0 && num%5===0) {
    return false;
  }
  else if (num%3===0 || num%5===0) {
    return true;
  }
  else {
    return false
  }
}

console.log(only3or5(25));
console.log(only3or5(9));
console.log(only3or5(15));

function threesFives(lowerlimit, upperlimit) {
  var count = lowerlimit;
  var sum = 0;
  while (lowerlimit <= upperlimit) {
    if (only3or5(lowerlimit)===true) {
      sum += lowerlimit
    }
    lowerlimit++;
  }
  return sum;
}

console.log(threesFives(100,4000000));
