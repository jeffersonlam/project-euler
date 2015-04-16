/*
10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10,001st prime number?
*/

'use strict';

var curr = 2;
var primes = [];

while (primes.length < 10001){
  var prime = true;
  for (var k = 2; k < curr; k++){
    if ( curr%k === 0 && curr != k){
      prime = false;
      break;
    }
  }
  if (prime) primes.push(curr);
  curr++;
}

console.log('The 10,001st prime number is ' + primes[primes.length-1]);
