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
    contains(value) {
        var runner = this.head;
        while (runner != null) {
            if (runner.val == value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

var sll1 = new SLL();
var node1 = new Node(9);
sll1.head = node1;
var node2 = new Node(4);
node1.next = node2;
console.log(sll1.contains(4));