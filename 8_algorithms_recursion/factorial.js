/**
 * Write two functions that finds the factorial of any
 * number. One should use recursive, the other should just
 * use a for loop
 */

function findFactorialRecursive(number) {
	// code here
	if (number <= 1) {
		return 1
	}

	return number * findFactorialRecursive(number - 1);
}
console.log('findFactorialRecursive(5)', findFactorialRecursive(5))

function findFactorialIterative(number) {
	let answer = 1;

	for (let i = number;i >= 1;i--) {
		answer *= i;
	}

	return answer;
}

console.log('findFactorialIterative(1)', findFactorialIterative(1))