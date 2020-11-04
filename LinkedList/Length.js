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

    length() {
        var runner = this.head;
        var count = 0;
        while (runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }
}

var sll1 = new SLL();
var node1 = new Node(3);
sll1.head = node1;
var node2 = new Node(7);
node1.next = node2;
console.log(sll1.length());