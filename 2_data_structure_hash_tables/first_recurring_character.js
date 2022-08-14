// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

function firstRecurringCharacter(array) {
  if (array.length < 2) {
    return undefined;
  }

  const hash = {};
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      return array[i]
    }
  }
  return undefined;
}

const array = [2,5,1,2,3,5,1,2,4]
// const array = [2,1,1,2,3,5,1,2,4]
// const array = [2,3,4,5]

console.log(firstRecurringCharacter(array))