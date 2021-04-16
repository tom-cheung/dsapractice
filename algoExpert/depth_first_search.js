class Node {
    constructor(name) {
        this.name = name; 
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name)); 
        return this; 
    }

    depthFirstSearch(array) {
        array.push(this.name); 

        if(this.children.length > 0) {
            for(let child of this.children) {
                child.depthFirstSearch(array)
            }
        }

        return array; 
    }
}