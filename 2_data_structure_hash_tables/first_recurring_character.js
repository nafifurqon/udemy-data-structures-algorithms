// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// my solution
// function firstRecurringCharacter(array) {
//   if (array.length < 2) {
//     return undefined;
//   }

//   const hash = {};
//   for (let i = 0; i < array.length; i++) {
//     if (!hash[array[i]]) {
//       hash[array[i]] = 1;
//     } else {
//       return array[i]
//     }
//   }
//   return undefined;
// }

// const array = [2,5,1,2,3,5,1,2,4]
// const array = [2,1,1,2,3,5,1,2,4]
// const array = [2,3,4,5]

// console.log(firstRecurringCharacter(array))

// Andrei solution
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // time complexity = O(n^2), space complexity = O(1)

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} // time complexity = O(n), space complexisty = O(n)

const array = [2,5,1,2,3,5,1,2,4]
// const array = [2,1,1,2,3,5,1,2,4]
// const array = [2,3,4,5]

const array1 = [2,5,5,1,2,3,5,1,2,4]

console.log(firstRecurringCharacter(array))
console.log(firstRecurringCharacter(array1)) //  case array1, return 2 -> false
console.log(firstRecurringCharacter2(array))
console.log(firstRecurringCharacter2(array1)) //  case array1, return 5 -> true