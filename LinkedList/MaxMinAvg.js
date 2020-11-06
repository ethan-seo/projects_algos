class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

// Max/Min/AverageF
class SLL {
    constructor() {
        this.head = null;
    }
    
// SList: Max
// Create method max() to return list’s largest val.
    max() {
        // identify the largest value in the list
        var runner = this.head;
        var maxval = runner.val;
        while (runner != null) {
            if (runner.val > maxval){
                maxval = runner.val;
            } 
            runner = runner.next;
        }
        return maxval;
    }

    // SList: Min
    // Create min(node) to return list’s smallest val.
    min() {
        // identify the smallest value in the list
        var runner = this.head;
        var minval = runner.val;
        while (runner != null) {
            if (runner.val < minval){
                minval = runner.val;
            } 
            runner = runner.next;
        }
        return minval;
    }

// SList: Average
// Create average() to return average val.
    average() {
        // what is the average value in my list?
        var runner = this.head;
        var sum = 0;
        var count = 0;
        while (runner != null) {
            sum += runner.val;
            count++;
            runner = runner.next;
        }
        return sum/count;
    }
}

var sll1 = new SLL();
var node1 = new Node(1);
sll1.head = node1;
var node2 = new Node(2);
node1.next = node2;
var node3 = new Node(3);
node2.next = node3;
console.log(sll1.max());
console.log(sll1.min());
console.log(sll1.average());