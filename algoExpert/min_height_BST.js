// solution using insert from BST class 

function minHeightBst(array) {
    // Write your code here.
      
      return constructMinHeightBST(array, null)
      
  }
  
  function constructMinHeightBST(array, bst=null) {
      if(array.length < 1) return; 
      
      let mid = Math.floor(array.length / 2); 
      
      bst === null ? bst = new BST(array[mid]) : bst.insert(array[mid])
      
      let left = constructMinHeightBST(array.slice(0, mid), bst); 
      let right = constructMinHeightBST(array.slice(mid + 1), bst); 
      
      return bst; 
  }


// solution without using insert from BST class 

function minHeightBst(array) {
    // Write your code here.
      
      return constructMinHeightBST(array, null)
      
  }
  
  function constructMinHeightBST(array, node=null) {
      if(array.length === 1) return new BST(array[0]); 
      
      if(array.length === 0) return; 
      
      let mid = Math.floor(array.length / 2); 
      
      let parentNode = new BST(array[mid]); 
      
      let left = constructMinHeightBST(array.slice(0, mid), parentNode); 
      let right = constructMinHeightBST(array.slice(mid + 1), parentNode); 
      
      left === undefined ? parentNode.left = null : parentNode.left = left; 
      right === undefined ? parentNode.right = null : parentNode.right = right; 
      
      return parentNode; 
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }


/**
 * input is array of integers, sorted, length > 0, DISTINCT  
 * 
 * construct a BST, with MINIMAL height 
 * 
 * return the root of the BST 
 * 
 * [1, 2, 5, 7, 10, 13, 14, 15, 22]            
 * 
 * iterate through this array until I hit a value that is greater than the value on the left, and less than the value on the right 
 * 
 * 10 => create the first BST using the class
 *  set the left of this bst to be another instance of the BST class, with the value of the element to the left 
 *  set the right of this bst to be another instance of the BST class, with the value of the element to the right 
 * 
 * 
 * 
 *                  10 
 *                 7  13
 *                5     14
 *               2       15
 *              1         22
 * 
 *                   10    => this has to be greater than every value to the left and smaller than every value to the right 
 *               5        14  => every node has to meet this critera 
 *             2  7     13  15
 *            1               22
 *              
 * [1, null, null, 7, null, null, 14, null, null, null]
 * 
 *                  13
 *                5    22
 *              2  10 15 25
 *             1 7    14
 * 10
 * 
 * [1, 2, 5, 7] [13, 14, 15, 22]
 * 
 * 2               14
 * 
 * [null] [null, 7]      [null] [null, 22]
 * 
 * 1    5         13    15
 * 
 * []    [7]        []    [22]
 * 
 * 7            22 
 * 
 *              10
 *             2  14
 *            1 5 13 15
 *               7    22
 * 
 *  at every iteration you are looking for a valid node which is a node that is greater than all values to the left and smaller or equal to all values on the right 
 * 
 * 
 * 
 *  [1] 
 * 
 *  1
 * 
 *   [1, 2, 3]
 * 
 *      2 
 *     1 3 
 * 
 *  if the el is greater than the value to the left or the left is undefined / if the el is less than or equal to the element on the right or the el is undefined 
 * 
 * 
 * 
 * recursively 
 * 
 * find the valid node 
 * 
 * create a instance of BST 
 * 
 * the array now can be split into two 
 * 
 * recursively call the function on the left side and the right side 
 * 
 * passing down the parent node 
 * 
 * set the parent node left to be the recursive return value of the left / similar with the right 
 * 
 * base case when the array is at 1 value, return that value 
 * 
 * function minHeightBst(array) {
 * 
 * }
 * 
 * [1]
 * [1, 2]
 * 
 * function constructMinHeightBST(array, node=null) {
 * 
 *              if(array.length === 1) {
 *                 return new BST(array[0]); 
 *              } 
 * 
 *              if(array.length === 0) return; 
 * 
 *              let mid = Math.floor(array.length / 2); 
 * 
 *              let parentNode = new BST(array[mid]); // node with value of 2 
 * 
 *              let left = constructMinHeightBST(array.slice(0, mid), parentNode);
 *              le right = constructMinHeightBST(array.slice(mid + 1), parentNode); 
 * 
 *              parentNode.left = left; 
 *              parentNode.right = right;
 * 
 *              return parentNode; 
 * }
 * 
 */
