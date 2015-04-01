/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var NUM_DIGITS = 3;
largestPalindromeProductOfDigits(NUM_DIGITS);

function largestPalindromeProductOfDigits(digits){
	var largest = findPalindromes(digits);
	console.log('The largest palindrome product of two ' + digits + '-digit numbers is ' + largest);
}

function findPalindromes(digits){
	var largest = 0,
	    start = '1';
	for (var i = 0; i < digits - 1; i++){ start+='0'; }
	start = parseInt(start);
	
	for (var i = start; i.toString().length <= digits; i++){
		for (var j = start; j.toString().length <= digits; j++){
			var quantity = i*j;
			if (isPalindrome(quantity)){
				if (quantity > largest) largest = quantity;
			}
		}
	}
	return largest;
}

function isPalindrome(num){
	var str = num.toString();
	for (var i = 0; i < str.length/2; i++){
		if (str[i] != str[str.length-1-i]) return false;
	}
	return true;
}
