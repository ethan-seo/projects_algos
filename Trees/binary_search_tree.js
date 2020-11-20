class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // BST: Add
    // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.
    add(value) {
        var new_node = new Node(value);
        if (this.root == null) {
            this.root = new_node;
            return this;
        }
        var runner = this.root;
        while (runner != null) {
            if (runner.val > value) {
                if (runner.left == null) {
                    runner.left = new_node;
                    return this;
                }
                else {
                    runner = runner.left;
                }
            }
            else {
                if (runner.right == null) {
                    runner.right = new_node;
                    return this;
                }
                else {
                    runner = runner.right;
                }
            }
        }
    }

    // BST: Contains
    // Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
    contains(value) {
        if (this.root == null) {
            return false;
        }
        var runner = this.root;
        while (runner != null) {
            if (runner.val == value) {
                return true;
            }
            if (runner.val > value) {
                if (runner.left == null) {
                    return false;
                }
                else {
                    runner = runner.left;
                }
            }
            else {
                if (runner.right == null) {
                    return false;
                }
                else {
                    runner = runner.right;
                }
            }
        }
        return false;
    }

    // BST: Min
    // Create a min() method on the BST class that returns the smallest value found in the BST.
    min() {
        if (this.root == null) {
            return false;
        }
        var runner = this.root;
        var minvalue = this.root.val;
        while (runner != null) {
            minvalue = runner.val;
            runner = runner.left
        }
        return minvalue;
    }


    // BST: Max
    // Create a max() BST method that returns the largest value contained in the binary search tree.
    max() {
        if (this.root == null) {
            return false;
        }
        var runner = this.root;
        var maxvalue = this.root.val;
        while (runner != null) {
            maxvalue = runner.val;
            runner = runner.right
        }
        return maxvalue;
    }


    // BST: Size
    // Write a size() method that returns the number of nodes (values) contained in the tree.
    size(current_node) {
        if (current_node == null) {
            // console.log("null found")
            return 0;
        }
        // console.log("The current val is ", current_node.val)
        var leftSide = this.size(current_node.left);
        var rightSide = this.size(current_node.right);
        return 1 + leftSide + rightSide;
    }

    // BST: Is Empty
    // Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
    isEmpty() {
        if (this.root == null) {
            return true;
        }
        return false;
    }
}



var bst1 = new BST();
bst1.add(19).add(4).add(15).add(56).add(40).add(88).add(100);
// console.log(bst1);
console.log(bst1.contains(5));
console.log(bst1.min());
console.log(bst1.max());
console.log(bst1.size(bst1.root));
console.log(bst1.isEmpty());