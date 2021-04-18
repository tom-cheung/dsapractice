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
        // notice the order of this while condition matters. It also MUST be && with javascript.
            // if you put the node.value !== value first, if currentNode is null it WILL break
            // likewise the way || works is, the check for currentNode.value !== value is run even if currentNode.value is null, so it also breaks 
            // with && the logic goes, if currentNode is NOT null then check the value, once it IS null the expression evaluates to false
                // this part is very important... good to know   
        while(currentNode !== null && currentNode.value !== value ) {

            // sets the currentNode to the next node
            currentNode = currentNode.next
        }; 

        // returns either a node or null, null if you've reached the end of the list and havent found the value 
        // just realized that this only returns the first node with the given value, because it stops iterating after it finds a node with the supplied value
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

        // if their are nodes around node that you're removing then you want to connect them with each other.
        // this logic also works with a 2 node list, which essentially will convert it to a proper 1 node list 
        
        if(node.prev !== null) {
            node.prev.next = node.next
        };

        if(node.next !== null) {
            node.next.prev = node.prev
        };

        // important that you do this step last because the above functons require these pointers. 
        node.prev = null; 
        node.next = null; 


    }

    removeNodeWithValue(value) {
        // you have to search through the linkedlist, but you cant stop once you find a node with the specific value, you have to find ALL nodes with that value 

        // the goal here is to find and remove all nodes with the given value 
        // this would require that I iterate through the entire length of the linkedlist and check each node to see if it's value matches the given value 
        // when I find a node with the given value I should disconnect/remove it from the list, I can make use of the previous remove method 
        // it is important that before removing the node I do not break the link, otherwise I cannot continue traversing the list 
        
        // cant use the previously defined value search method because that only returns one node, and multiple nodes could have the same value 

        let currentNode = this.head; 

        // notice the difference in logic is than in the other search function. Here you do NOT want to stop iterating when you find a node with the value
        // supplied, because you want to find ALL nodes with that value. You only stop iterating when the currentNode is null meaning you've hit the end of the list 
        while(currentNode !== null) {
            let nodeToRemove = currentNode;
            currentNode = currentNode.next; 

            // remove the node from the list by using the remove function previously defined 
            // logic for removing a single node, double node, is already handled by the remove function 
            if(nodeToRemove.value === value) {
                this.removeNode(nodeToRemove)
            }
        }
    }

    insertBefore(node, nodeToInsert) {
        // the goal here is to insert a node before another given node. 
        // some questions I have here would be, can the nodeToInsert be in the linkedlist already or is it a new node? 
        
        // the logic here is that if the nodeToInsert is the head AND tail then you dont have to do anything because it exists in the list, and is the only node
        // so you can't insert it before itself 
        if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
        
        // assuming the nodeToInsert IS within the linked list then you first should remove it. Removing it will modify the pointers within it and it's surrounded nodes 
        this.removeNode(nodeToInsert); 

        // do we need to address a case where you're asked to insert the same node before itself? it's silly but could this be an edge case? 

        // updating the pointers for the nodeToInsert
        nodeToInsert.next = node; 
        nodeToInsert.prev = node.prev; 

        // now its time to insert it before the given node
        // the first check is to see if the node you're inserting before is the head, if so then you just set the nodeToInsert as the head  
        // else if it is NOT the head then it means that there is another node before it, and you have to update that nodes pointer
        if(this.head === node) {
            this.head = nodeToInsert;
        } else { 
            node.prev.next = nodetoInsert;
        }
        
        // lastly you want to update the node you're inserting before to point back towards to the new node. The reason for doing this last is it contains
        // the pointer which is needed to access any nodes before it. Changing too early would break your ability to traverse the list properly  
        node.prev = nodeToInsert
    }

    insertAfter(node, nodeToInsert) {
        // the logic here is that if the nodeToInsert is the head AND tail then you dont have to do anything because it exists in the list, and is the only node
        // so you can't insert it before itself 
        if(nodeToInsert === this.head && nodeToInsert === this.tail) return; 

        // remove the node and update the pointers within the node to be inserted 
        this.removeNode(nodeToInsert); 
        nodeToInsert.prev = node; 
        nodeToInsert.next = node.next; // important to set this before you change node.next 

        // if the node you're inserting after is the tail then you're setting a new tail, else you have to also account for setting the subsequent nodes prev pointer
        if(this.tail === node) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert; 
        }
        node.next = nodeToInsert;
    }

    setHead(node) {
        if(this.head === null) {
            this.head = node;
            this.tail = node; 
        } else {
            // this assumes there is a head, in which case you can use insert before 
            // this.head.prev = node; 
            // node.next = this.head; 
            // this.head = node;
            this.insertBefore(this.head, node) 
        }


    }

    setTail(node) {
        // if the tail is null there is no list and you're creating one 
        if(this.tail === null) {
            // can just call setHead before the same logic there applies 
            this.setHead(node)
        } else {
            this.insertAfter(this.tail, node)
        }
    }

    insertAtPosition(position, nodetoInsert) {
        if(position === 1) {
            this.setHead(nodetoInsert)
            return 
        } 

        let currentNode = this.head.next; 
        let currentPositon = 2; 

        while(currentPositon != position && currentNode !== null) {
            currentNode = currentNode.next; 
            currentPositon++; 
        }

        if(currentNode !== null) {
            this.insertBefore(currentNode, nodetoInsert)
        } else {
            this.setTail(nodetoInsert)
        }
    }
}



