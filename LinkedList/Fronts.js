class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    // Front
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    constructor(){
        this.head = null;
    }

    front(){
        if(this.head == null){
            return null;
        }
        return this.head.val;
    }

    // Remove Front
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront(){
        if(this.head == null){
            return null
        }
        this.head = this.head.next
        return this.head
    }

    // Add Front
    // Write a method that accepts a value and create a new node, assigns it to the list head, and return a pointer to the new head node.

    addFront(val){
        var newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }
}

// sll1 = new SLL()
// console.log(sll.front())
var sll1 = new SLL();
var node1 = new Node(9);
sll1.head = node1;
var node2 = new Node(4);
node1.next = node2;
console.log(sll1.front());
console.log(sll1.removeFront());
console.log(sll1.addFront(5));