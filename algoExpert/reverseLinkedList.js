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