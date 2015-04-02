/*
Smallest multiple
Problem 5
Published on Friday, 30th November 2001, 06:00 pm; Solved by 256010
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple(a, b){
	var i = 0;
	var found = false;
	while (!found){
		i++
		for (var j = a; j <= b; j++){
			if (i%j != 0) break;
			else if (j==b && i%j == 0) found = true;
		}
	}
	return i;
}

var a = 1;
var b = 20;
var start = Date.now();
var multiple = smallestMultiple(a, b);
var end = Date.now();
console.log('Time taken:', (end - start)/1000, 'seconds');
console.log('The smallest positive number that is evenly divisible by all of the numbers from ' + a + ' to ' + b + ' is ' + multiple);
