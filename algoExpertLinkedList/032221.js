// constructing a doubly linked list 
// required functionalities or a linked list 
// setting the head or the tail
// searching function
// removal of nodes 
// insertion before 
// insertion after 

class Node {
    constructor(value) {
        this.value = value; 
        this.prev = null; 
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
    }; 

    containsNodeWithValue(value) {
        // traverse through the linked list either starting from the head or the tail 
        // can use a while loop to traverse through the list (condition being if the current node you're on isn't equal to the search value and isn't equal to null)
        // if it is null then it means you've reach the end of the list 
        // if it isnt null and if the value isn't the value being search for then you want to move onto the next node, i.e. set the current node to the next node 

        // setting the currentNode to the head, this will hold the current node as you iterate through the list
        let currentNode = this.head;
        
        // this while loop is how you will iterate through the list, the conditions check that you're not at the end of the list or that the node isn't the value you're
        // looking for. If either conditions are met then it means that you've reached the end of the list or you've found the value  
        while(currentNode !== null || node.value != value ) {

            // sets the currentNode to the next node
            currentNode = currentNode.next
        }; 

        // returns either a node or null, null if you've reached the end of the list and havent found the value 
        return currentNode; 
    }

    removeNode(node) {
        // remove the pointers on the node being removed 
        // remove the .next and .prev of the adjacent nodes 
        // given the node 

        if(node === this.head)

    }

    removeNodeWithValue(value) {
        // you have to search through the linkedlist, but you cant stop once you find a node with the specific value, you have to find ALL nodes with that value 
    }

    insertBefore(node, nodeToInsert) {

    }

    insertAfter(node, nodeToInsert) {

    }

    setHead(node) {

    }

    setTail(node) {

    }

    insertAtPosition(position, nodetoInsert) {

    }
}



