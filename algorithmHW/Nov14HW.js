

//Stuff with Nick
function sum(limit) { //computes sum of set of [1 -> lim] inclusive on both sides.
	return Array.apply(null, {length: limit}).map( function(ele, index) {
		return index + 1;

	} ).reduce( function(a, b) {
		return a + b;
		}, 0

	)
}

console.log(sum(3));

//Binary
//read right to left as 1s and 0s.
//each slot is 2^of the position you're at from the right side.
//3 = 11
//9 = 1001
//take number and make it into binary.

function binarynum(x) {
	//2^i... i pushes a 0 into string... if not full...
	var binstring = ""
	if ((x-1)%2===false) {
		binstring += "1"
	}
}

// 9 "1"
// 8 % 2 === true +0
// 4 % 2 === true +0
// 2 % 2 === true +1

function pwrs2(x) {
	var i = 1;
	while (i <= x) {
		if (Math.pow(2,i)===x) {
			return i
		}
		i++;
	}
}

console.log(pwrs2(8));
