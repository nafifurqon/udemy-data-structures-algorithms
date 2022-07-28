// Find 1st, Nth....
const array = ["hi", "my", "teddy"];
array[0]; // first tweet // O(1)
array[array.length - 1]; // last tweet // O(1)

const array2 = [
  { tweet: "hi", date: 2012 },
  { tweet: "my", date: 2014 },
  { tweet: "teddy", date: 2018 },
];
// O(n^2)
