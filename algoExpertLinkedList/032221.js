// constructing a doubly linked list 

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

    setHead(node) {
        
    }
}


const testFunction = () => {
    let i = 0; 

    while(i < 10) {
        if(i === 5) {
            return; 
        }

        console.log(i);

        i++; 
    }

    return i; 
}

console.log(testFunction()); 