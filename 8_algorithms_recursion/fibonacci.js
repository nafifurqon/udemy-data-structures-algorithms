// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let answer = 0;
  let pointer1 = 0;
  let pointer2 = 1;

  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      answer = i;
    } else {
      answer = pointer1 + pointer2;
      pointer1 = pointer2;
      pointer2 = answer;
    }
  }

  return answer;
}
console.log('fibonacciIterative(8)', fibonacciIterative(8));

function fibonacciRecursive(n) {
  //code here;
}

fibonacciRecursive(3);
