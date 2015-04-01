/*
Even Fibonacci numbers
Problem 2
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function fibonacci(seq){
	if (seq[seq.length-1]>4000000) return seq;
	if (seq.length == 0){
		seq.push(1);
	} else if (seq[seq.length-1] == 1){
		seq.push(2);
	} else {
		seq.push(seq[seq.length-2] + seq[seq.length-1]);
	}
	return fibonacci(seq);
}

var sequence = fibonacci([]);
var evenSequence = sequence.filter(function(x){ 
	return x%2==0 
});
var sum = evenSequence.reduce(function(a, b){
	return a + b;
});
console.log('The even numbers in the sequence: ', evenSequence);
console.log('The sum of all the even numbers: ', sum);