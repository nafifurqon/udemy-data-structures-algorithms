// reference type
console.log([] === []) // return false -> berbeda address memory karena sama dengan membuat array baru
console.log([1] === [1]) // return false

let object1 = { value: 10 }
let object2 = object1 // ->  reference to object1, get from same address memory
let object3 = { value: 10 } // -> create new address memory 

console.log(object1 === object2) // true
console.log(object1 === object3) // false

object1.value = 15
console.log('object2.value', object2.value) // 15
console.log('object3.value', object3.value) // 10

// context vs scope
function b() {
  let a = 4;
}
b()
// console.log('a', a) // -> error a is not defined, karna di luar scope

// instantiation
class Player{
  constructor(name, type) {
    console.log('player', this)
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    // console.log('wizard', this) // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(name, type)
    console.log('wizard', this)
  }

  play() {
    console.log(`WEEEEEE I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard("Shelly", "Healer")
const wizard2 = new Wizard("Shawn", "Dark Magic")

wizard1.play()
wizard1.introduce()
wizard2.introduce()

// Classic Inheritance
// var Player = function(name, type) {
//   this.name = name;
//   this.type = type;
// }

// Player.prototype.introduce = function() {
//   console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
// }

// var wizard1 = new Player("Shelly", "Healer")
// var wizard2 = new Player("Shawn", "Dark Magic")

// wizard1.play = function() {
//   console.log(`WEEEEEE I'm a ${this.type}`)
// }

// wizard2.play = function() {
//   console.log(`WEEEEEE I'm a ${this.type}`)
// }
