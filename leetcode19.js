
// FINISHED, SUPER INEFFICIENT

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n == 0) { return head; }
    if (head.next == null) {
        return null;
    }
    var numNodes = countNodes(head); // the number of connected nodes (including head)
    var currNode = new ListNode(head.val);
    var tempNode = head;
    var ret = currNode;
    var i = 1;
    while (i < numNodes) {
        console.log("i: " + i + " currNode: " + currNode.val + " tempNode: " + tempNode.val);
        if (i == numNodes - n + 1) {
            tempNode = tempNode.next;
        }
        currNode.next = new ListNode(tempNode.val);
        currNode = currNode.next;
        tempNode = tempNode.next;
        i++;
    }
    return ret.next;
};

// Given the head, counts the number of nodes (including head)
var countNodes = function(head) {
    var ret = 1;
    var currNode = head;
    while (currNode.next != null) {
        // console.log("value: " + currNode.val);
        ret++;
        currNode = currNode.next;
    }
    return ret;
}


// Given an Array, returns a node with those values
var nodeBuilder = function(arr) {
    if (arr.length == 0) {
        return null;
    }
    var ret = new ListNode(arr[0]);
    var head = ret; 
    for (var i = 1; i < arr.length; i++) {
        var tempNode = new ListNode(arr[i]);
        ret.next = tempNode;
        ret = ret.next;
    }
    return head;
}

// Given a node, prints the node in order
var nodePrinter = function(node) {
    if (node == null) { return false; }
    while (node.next != null) {
        console.log(node.val);
        node = node.next;
    }
    console.log(node.val);
    return true;
}

var node = nodeBuilder([1,2,3,4,5]);

var ans = removeNthFromEnd(node, 2);

nodePrinter(ans);