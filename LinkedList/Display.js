class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    display() {
        var runner = this.head;
        var myList = "";
        while (runner != null) {
            myList = myList + " " + runner.val; 
            runner = runner.next;
        }
        return myList;
    }
}

var sll1 = new SLL();
var node1 = new Node("Hi");
sll1.head = node1;
var node2 = new Node("You");
node1.next = node2;
console.log(sll1.display());