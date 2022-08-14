// Create a function that reverse a string:
// 'Hi My name in Andrei' should be:
// 'ierdnA ni eman yM iH'

function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log('reverse', reverse("Hi My name in Andrei"))