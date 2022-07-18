const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'squirt', 'darla', 'hank', 'nemo']
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  // const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log('running')
    if (array[i] === 'nemo') {
      console.log('found NEMO!')
      break;
    }
  }
  // const t1 = performance.now()
  // console.log(`Call to find nemo took ${t1 - t0} milliseconds`)
}

// findNemo(nemo);
findNemo(everyone);
// findNemo(large);

const boxes = [0,1,2,3,4,5]

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0])
  console.log(boxes[1])
}

logFirstTwoBoxes(boxes)