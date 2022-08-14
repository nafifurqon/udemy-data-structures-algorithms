// Create a function that reverse a string:
// 'Hi My name in Andrei' should be:
// 'ierdnA ni eman yM iH'

// my solution
// function reverse(str) {
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

// console.log('reverse', reverse("Hi My name in Andrei"))

// Andrei solution
function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmmm that is not good';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join('');
}

console.log(reverse('Hi My name in Andrei'))

function reverse2(str) {
  return str.split('').reverse().join('');
}

console.log(reverse2('Hi My name in Andrei'))

const reverse3 = (str) => str.split('').reverse().join('');

console.log(reverse3('Hi My name in Andrei'))

const reverse4 = (str) => [...str].reverse().join('');

console.log(reverse4('Hi My name in Andrei'))