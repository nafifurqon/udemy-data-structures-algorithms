class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
		const newNode = new Node(value);

    if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					// Left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					// Right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
  }

  lookup(value){
    if (!this.root) {
			return false;
		}

		let currentNode = this.root;
		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value){
				currentNode = currentNode.right;
			} else if (currentNode.value === currentNode.value) {
				return currentNode;
			}
		}

		return false;
  }

  remove(value) {
		if (!this.root) {
			return false;
		}
		
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (value === currentNode.value) {
				// We have a match, get to work

				// Option 1: No right child
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {

						// if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;
						
						// if parent < current value, make left child a right child of a parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}
				
				// Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						currentNode.right.left = currentNode.left;

						// if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

						// if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

				// Option 3: Right child that has a left child
				} else {

					// find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					// Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
	}
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(15))
console.log(tree.lookup(16))
console.log(JSON.stringify(traverse(tree.root), null, 4))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// tree.insert(74)
// tree.insert(68)
// tree.insert(86)
// tree.insert(46)
// tree.insert(70)
// tree.insert(36)
// tree.insert(61)
// tree.insert(71)
// tree.insert(1)
// tree.remove(36)
// console.log(JSON.stringify(traverse(tree.root), null, 4))

// tree.insert(60)
// tree.insert(30)
// tree.insert(14)
// tree.insert(54)
// tree.insert(1)
// tree.insert(55)
// tree.insert(38)
// tree.insert(44)
// tree.insert(35)
// tree.insert(33)
// tree.insert(31)
// tree.remove(30)
// console.log(JSON.stringify(traverse(tree.root), null, 4))