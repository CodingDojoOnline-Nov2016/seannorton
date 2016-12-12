

//iterate through array
//nested for loop, backward through string, keep track of suffix
//go to last letter of each word, check equivalency, then next to last and so on until break case

function longestCommonSuffix(arr) {
	var newString = '';
	var minLength = arr[0].length;
	for(i = 1; i < arr.length; i++) {
		if(arr[i].length < minLength) {
			minLength = arr[i].length;
		}
	}

	// var letterIndex = minLength; //UNNECESSARY?!?!?!?!?!?
	var temp = arr[0][arr[0].length - 1];
	var count = 1;

	while(count < minLength) {
		// console.log('While loop', 'letterIndex', letterIndex, 'minLength', minLength, 'newString', newString, 'temp', temp)
		for(i = 1; i < arr.length; i++) {
			// console.log('i', i)
			if(arr[i][arr[i].length - count] !== temp){
				// console.log("this function is breaking early")
				return newString;
			}
		}
	newString = temp + newString;
	count++;
	temp = arr[0][arr[0].length - count];
	// console.log(temp)
	}
	// console.log("this function found a match for an entire word")
	return newString;
}

var array1 = ["action", 'faction', 'caution', 'ution'] //"tion"
var array2 = ['yes', 'nos'] //"s"

console.log(longestCommonSuffix(array1));
console.log(longestCommonSuffix(array2));
