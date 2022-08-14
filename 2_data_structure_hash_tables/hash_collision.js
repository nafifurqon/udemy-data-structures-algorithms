let user = {
  age: 54,
  name: 'Kylie',
  magic: true, 
  scream: function() {
    console.log('ahhhhh!')
  }
}

console.log(user.age) // O(1)
console.log(user.spell)
user.spell = 'abra kadabra' // O(1)
console.log(user.spell)
user.scream() // O(1)

// hash collision = 1 lokasi memory menyimpan lebih dari data
// karena alokasi memory yang terbatas untuk hash table
