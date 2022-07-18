const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'squirt', 'darla', 'hank', 'nemo']
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running')
    if (array[i] === 'nemo') {
      console.log('found NEMO!')
      break;
    }
  }
}

// findNemo(nemo);
findNemo(everyone);
// findNemo(large);