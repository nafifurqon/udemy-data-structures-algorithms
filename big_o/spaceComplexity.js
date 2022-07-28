function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    // create and use one variable => O(1)
    console.log("booooo");
  }
}

boooo([1, 2, 3, 4, 5]); // space complexity = O(1)

function arrayOfHiNTimes(n) {
  let hiArray = []; // create new array / new data structure
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi"; // adding memory to our computer n times
  }
  return hiArray;
}

arrayOfHiNTimes(6); // space complexity = O(n)
