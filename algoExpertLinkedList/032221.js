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

        // would this potentially make it more efficient by proactively checking the head and tail? 
        // if(this.head.value === value) return this.head; 
        // if(this.tail.value === value) return this.tail; 

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

        // if the node you're removing is the head, then you simply set the head as the node following the previous head, this works even if there is only one node
        // because you would be essentially be destroying the list by setting the head as null 
        if(node === this.head) {
            this.head = this.head.next; 
        }

        // same logic as the head, basically destroying the list 
        if(node === this.tail) {
            this.tail = this.tail.prev; 
        }

        // the below methods can be placed in a helper method to make this cleaner 

        // if their are nodes around node that you're removing then you want to connect them with each other. This 
        if(node.prev !== null) {
            node.prev.next = node.next
        };

        if(node.next !== null) {
            node.next.prev = node.prev
        };

        node.prev = null; 
        node.next = null; 


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



