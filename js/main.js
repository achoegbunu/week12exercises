// #4 Create an array of 5 numbers each with 2 decimal places
var numArray = [9.69, 15.82, 30.67, 14.99, 80.65];
var newNumArray = [];
// #5 Loop through the array
for (var i = 0; i < numArray.length; i++) {
// round all numbers to the nearest whole integer
var x = Math.round(numArray[i]);
// Add each rounded number to a new array
newNumArray.push(x);
}
console.log(newNumArray);
// #6 Create a function that produces 10 random numbers between 1 and 100
var newNumArray2 = [];
function randomNum() {
	var z = Math.floor( Math.random() * 100);
	// Add each number to an array of numbers.
		newNumArray2.push(z);
};
for (var i = 0; i < 10; i++) {
	randomNum();
};
console.log(newNumArray2);
// Write out a function that creates a variable which stores the whole date, the current hour, the current minute, and the current second.
function newDay() {
	var sunday = new Date();
	var hour = sunday.getHours();
	var minute = sunday.getMinutes();

}
