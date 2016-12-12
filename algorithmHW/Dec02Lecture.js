//Dec2Lecture

//ParensValid

var str1 = "abc(def)" //true
var str2 = "(())" //true
var str3 = "(()(" //false
var str4 = "))((" //false

//open and close amt must equal.
//open parens must happen before closed parens

function parensValid(str) {
  var parensnum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      parensnum++;
    }
    else if (str[i] == ")") {
      parensnum--;
    }
    if (parensnum < 0) {
      return false;
    }
  }
  return !parensnum; //this is already comparing... and wants to return a true or false anyway.
}//!parensnum is checking to see if it's true or false... it's tryna flip the truthy value of it.
//if parensnum is 0, we need to put a ! in front of it to make the 0 truthy.

// console.log(parensValid(str1));
// console.log(parensValid(str2));
// console.log(parensValid(str3));
// console.log(parensValid(str4));

//bracesvalid

//"({[]})" = true
//"({[)]}" = false
//"()[]{}" = true
//(hello){its me [whatever]} = true
//false

var s1 = "({[]})"
var s2 = "({[)]}"
var s3 = "()[]{}"
var s4 = "(hello){its me [whatever]}"
var s5 = "(hello){its me [whatever]}("

function bracesValid(str) {
  var braces = {
      ')':'(',
      ']':'[',
      '}':'{'
    };
  var opens = [];
  var parensnum = bracesnum = bracketsnum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '{' || str[i] =='[') {
      opens.push(str[i]);
    }
    else if (str[i] == ')' || str[i] == '}' || str[i] ==']') {
      if (opens.pop() != braces[str[i]]) {
        return false;
      }
    }
  }
  return !opens.length;
}

console.log(bracesValid(s1));
console.log(bracesValid(s2));
console.log(bracesValid(s3));
console.log(bracesValid(s4));
console.log(bracesValid(s5));
