class Node { // each node that makes up the list 
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    };

};

class linkedList { // the actual list
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  addHead(val) { // adds a new head to the linked list (which is this)
      let newNode = new Node(val); // using the node class above 

      if(!this.head) { // if there is no head, then set the head as the newNode, if there's no head then there's likely no tail either, so you set the tail as the head also 
          this.createList(newNode)
      };

      this.head.prev = newNode; // because it's a doubly linked list, this is if you're adding a new head. you want to set the old head to point back towards this new head
      newNode.next = this.head; // set the new head to point to the old head (as the next element in the list)
      this.head = newNode; // you then want to set the new head equal to the node // the new head doesnt point BACK towards anything 

      this.length++; 
      return this; // return an instance of the new doubly linked list. 
  }

  addTail(val) {
    let newNode = new Node(val);

    if(!this.head) { //when adding a new tail. If there is no head then there is no list. So the new node becomes the list in other words the head and the tail
      this.createList(newNode)
    };

    this.tail.next = newNode; // the old tail (or new if this is a new list) then has its next pointer set to the newNode  
    newNode.prev = this.tail; // the newNode then points back to the old tail 
    this.tail = newNode;  // the tail is finally officially set to the newNode, doesn't have to be done this way but can be 

    this.length++; // increment the length of the list 
    return this; // returns the list 

  }

  removeHead() {
    let removed = this.head;
    if(!this.head) return undefined; // if there isn't a head there isn't a list so return undefined 

    this.head = this.head.next; // if there is a list then set the head to what the old head was pointing at 
    this.head.prev = null; // sets the new head to point BACK to nothing 

    this.length--; // increment the 
    return removed; //
  }

  removeTail() {
    let removed = this.tail; 
    if (!this.tail) return undefined; // if there isn't a tail return undefined 
    
    if (this.length === 1) { // if the length is 1 then essentially delete the list 
      this.head = null; 
      this.tail = null; 
    }

    this.tail = removed.prev; // sets the new tail to what the old tail was previously pointing at 
    this.tail.next = null; // creates a new tails 

    this.length--; 
    return removed; 
  }

  find(index) {
    let current; 
    if(index < 0 || index >= this.length) return undefined; 

    if(index <= this.length / 2) { // if the index you're looking for is less than the length / 2 its on the first half so you want to start from the beginning, if not then you want to start from the end 
      current = this.head; 
      for (let i = 0; i < index; i++) current = current.next; // just using the for loop to keep moving along the list until you hit the index provided 
    } else {
      current = this.tail; 
      for (let i = 0; i < index; i--) current = current.prev; // using the loop to move backwards until we hit the index (not real index) we're looking for 
    }

    return current; // returns the node 
    // could change this up to find by value 
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return null; // if trying to insert somewhere that doesn't exist, return null; 
    if (index === this.length) return this.addTail(val); // if trying to insert at the end then you're adding a new tail; 
    if (index === 0) return this.addHead(val); // if trying to insert at the beginning you're adding a new head; 

    let prev = this.find(index - 1); // if none of the conditions above exist then you're inserting somewhere between beginning and end. It then makes sense to grab the element before where you want to insert (or after )
    let newNode = new Node(val); // create the new node to insert 
    let temp = prev.next; // storying the value of the 'after' node 

    temp.prev = newNode; 
    prev.next = newNode; // this is why you used temp, because you're overwriting what was originally there
    newNode.next = temp; // sets the newNode.next to point to temp (the next element)
    newNode.prev = prev;  // sets the newNode.prev to point to the prev element 

    this.length++; 
    return true; 
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null; 
    if (index === this.length) return this.removeTail();
    if (index === 0) return this.removeHead(); 

    let removed = this.find(index); 
  }

  update(val, index) {
    let node = this.find(index); 
    if(node) node.val = val; 
    return node 
  }

  createList(newNode) {
    this.head = newNode; 
    this.tail = this.head;  
  }
};


let newList = new linkedList();

newList.addHead('Peanut');
newList.addTail('uni');
newList.insert('molly', 1);
newList.insert('baby', newList.length); 
newList.insert('starr', 1); 


// i used the below to traverse the list and get an array of all the nodes... 

let nodes = []
let currentNode = newList.head; 
for(let i = 0; i < newList.length; i++) {
  nodes.push(currentNode); 
  currentNode = currentNode.next; 
}

console.log(nodes);

// it's like you're creating a version of an array. 
// with DS&A it seems like you're building a whole new object (a class) to implement a ADT (abstract data type)

