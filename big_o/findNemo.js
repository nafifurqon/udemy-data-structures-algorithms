const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'squirt', 'darla', 'hank']
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('found NEMO!')
    }
  }
  const t1 = performance.now()
  console.log(`Call to find nemo took ${t1 - t0} milliseconds`)
}

// findNemo(nemo);
// findNemo(everyone);
// findNemo(large);

const boxes = [0,1,2,3,4,5]

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0])
  console.log(boxes[1])
}

// logFirstTwoBoxes(boxes)

const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === "nemo") {
      console.log("found NEMO!");
    }
  });
};

const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("found NEMO!");
    }
  }
};

findNemo(everyone);
findNemo2(everyone);
findNemo3(everyone);