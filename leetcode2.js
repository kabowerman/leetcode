
// FINISHED, pretty efficient

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 == null) { return l2; }
    if (l2 == null) { return l1; }
    var ret = new ListNode(l1.val + l2.val);
    var currNode = new ListNode(0);
    if (ret.val > 9) { currNode.val = 1; ret.val -= 10; }
    if (l1.next == null && l2.next == null && currNode.val == 0) {
        return ret;
    }
    ret.next = currNode;

    // l1: 1-2-3
    // l2: 1-2-3-4-5-6
    // ret = 1+1 = 2
    // currNode = 0
    while (l1.next != null || l2.next != null) {
        if (l1.next == null) {
            l2 = l2.next;
            currNode.val += l2.val;
            if (currNode.val > 9) {
                currNode.next = new ListNode(1);
                currNode.val -= 10;
                currNode = currNode.next;
            }
            else { 
                if (l2.next != null) {
                    l2 = l2.next;
                    currNode.next = l2;
                    return ret;
                }
            }
        }
        else if (l2.next == null) {
            l1 = l1.next;
            currNode.val += l1.val;
            if (currNode.val > 9) {
                currNode.next = new ListNode(1);
                currNode.val -= 10;
                currNode = currNode.next;
            }
            else { 
                if (l1.next != null) {
                    l1 = l1.next;
                    currNode.next = l1;
                    return ret;
                }
            }
        }
        else {
            l1 = l1.next;
            l2 = l2.next;
            currNode.val += l1.val + l2.val;
            var newNode = new ListNode(0);
            if (currNode.val > 9) {
                newNode = new ListNode(1);
                currNode.val -= 10;
            }
            if (l1.next == null && l2.next == null && newNode.val == 0) {
                return ret;
            }
            else {
                currNode.next = newNode;
                currNode = currNode.next;
            }
        }
    }
    return ret;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
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
