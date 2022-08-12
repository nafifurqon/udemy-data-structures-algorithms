const strings = 
['a', 'b', 'c', 'd'];
//0    1    2    3
// 4*4 = 16 bytes of storage

console.log(strings[2]); // O(1)

// push
strings.push('e'); // O(1)
console.log('strings', strings)

// pop
strings.pop();
strings.pop(); // O(1)
console.log('strings', strings)

// unshift
strings.unshift('x'); // O(n)
console.log('strings', strings)

// splice
strings.splice(2, 0, 'alien') // O(n)
console.log('strings', strings)