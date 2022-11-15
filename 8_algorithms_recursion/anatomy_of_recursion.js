let counter = 0;
function inception() {
	console.log(counter);
	if (counter > 3) {
		return 'done!';
	}
	counter++;
	return inception();
}

console.log(inception());

// 3 rules to build recursive
// 1. Identify the base case (example: line 4)
// 2. Identify the recursive case (examlpe; line 8)
// 3. Get closer and closer and return when needed. Usually have 2 returns.
