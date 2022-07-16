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
findNemo(large);