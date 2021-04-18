// recursive solution 

function reverseLinkedList(node, prevNode=null) {
    // your base case, once you hit a node that's null you're at the end
    // since the goal of this function is to return the new head, the last node (prevNode) will be the new head 
    if(node === null) return prevNode;  
    
    // you have to save a reference to node.next before you change it on the next line
    let nextNode = node.next; 

    // set node.next to prevNode which starts off as null, changing the head node to a tail 
    node.next = prevNode; 

    // recursive call which passes in the next node (to iterate through the list), and the current node so that it can be set as the next of nextNode
    return reverseLinkedList(nextNode, node)
}

// iterative solution

function revLinkedList(node) {

    // traverse the list
    // set each node to point to it's previous node
    // need to save a reference to the previous node 
    // once you reach the end, stop, the end being a null node 
    prevNode = null; 
    currentNode = node;
    
    // this is an interesting way to iterate through the linkedlist, using a single reference 
    // it is important to save the references before you change them 
    while(currentNode !== null) {
        let nextNode = currentNode.next; 
        currentNode.next = prevNode;
        prevNode = currentNode; 
        currentNode = nextNode; 
    }

    return prevNode; 
}