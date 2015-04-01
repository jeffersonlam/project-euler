/*
Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function primeFactors(num, arr){
	for (var i = 2; i*i <= num; i++){
		if (num%i == 0){
			arr.push(i);
			return primeFactors(num/i,arr);
		}
	}
	arr.push(num);
	return arr;
}

var num = 600851475143;
var result = primeFactors(num, []);
var largest = result[result.length-1];
console.log('The largest prime factor of ' + num + ' is ' + largest);