class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
		let currentNode = this; 
		
		while(true) {
			if(value < currentNode.value) {
				if(currentNode.left !== null) {
					currentNode = currentNode.left; 
				} else {
					currentNode.left = new BST(value);
					break;
				}
			} else {
				if(currentNode.right !== null) {
					currentNode = currentNode.right; 
				} else {
					currentNode.right = new BST(value); 
					break;
				}
			}
		}
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    // Write your code here.
		let currentNode = this; 
		while(currentNode !== null) {
			if(value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right; 
			} else {
				return true; 
			}
		}
		return false; 
  }

  remove(value, parentNode = null) {
    // Write your code here.
		
		let currentNode = this; // starting off at the root node 
		
		// find the node to remove and track the parent 
		while(currentNode !== null) {
			if(value < currentNode.value) {
				parentNode = currentNode; 
				currentNode = currentNode.left; 
			} else if(value > currentNode.value) {
				parentNode = currentNode; 
				currentNode = currentNode.right; 
			} else {
				// if the currentNode's value is the target value, break because you have found it 
				break; 
			}
		}
		
		// if the currentNode === null, meaning a value was supplied which no nodes in the tree has
		if(currentNode === null) return this; 
		
		// if the node to be removed has two children node / includes the root node 
		if(currentNode.left !== null && currentNode.right !== null) {
			currentNode.value = currentNode.right.minValue(); 
			// the below method call is to remove the smallest of node from the right side of the tree, which was 
			// moved to the root 
			currentNode.right.remove(currentNode.value, currentNode)
		// if the node to be removed is the head node/root node but does not have two children 
		} else if(parentNode === null) {
			// effectively replacing currentNode.left by having this currentNode point to all the pointers 
			if(currentNode.left !== null) {
				currentNode.value = currentNode.left.value; 
				// this has to come before line 81, otherwise you lose access to the pointer
				currentNode.right = currentNode.left.right; 
				currentNode.left = currentNode.left.left; 
			} else if(currentNode.right !== null) {
				currentNode.value = currentNode.right.value; 
				currentNode.left = currentNode.right.left; 
				currentNode.right = currentNode.right.right; 
			} else {
				// do nothing because this condition would indicate a single node tree  
			}
		// if the node to be removed is not the root node
		// can safely assume there are no two children 	
		// the ternary logic is to correctly assign any children - 1 or none - to the parents pointers 
		// to do that you need to check whether the current node is to the left or right of the parent 
		} else if(parentNode.left === currentNode) {
			parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right; 
		} else if(parentNode.right === currentNode) {
			parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right; 
		}
		
    // Do not edit the return statement of this method.
    return this;
  }
	
	minValue() {
		let currentNode = this; 
		while(currentNode.left !== null) {
			currentNode = currentNode.left; 
		}
		return currentNode.value; 
	}
}