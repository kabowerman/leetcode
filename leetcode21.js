
// FINISHED NON-RECURSIVELY
// RECURSIVE SOLUTION NAMED "mergeTwoListsNOTMINE"

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    var l1Curr = l1;
    var l2Curr = l2;
    var head = new ListNode(l1Curr.val);
    if (l1Curr.val > l2Curr.val) { // if l2 is smaller
        head = new ListNode(l2Curr.val);
        if (l2Curr.next == null) {
            head.next = l1Curr;
            return head;
        }
        l2Curr = l2Curr.next;
    }
    else {
        if (l1Curr.next == null) {
            head.next = l2Curr;
            return head;
        }
        l1Curr = l1Curr.next;
    }
    var end = false;
    var curr = head;
    while (!end) {
        if (l1Curr.val < l2Curr.val) { // if l1 is smaller
            curr.next = new ListNode(l1Curr.val);
            curr = curr.next;
            if (l1Curr.next == null) {
                curr.next = l2Curr;
                return head;
            }
            l1Curr = l1Curr.next;
        }
        else { // if l2 is smaller
            curr.next = new ListNode(l2Curr.val);
            curr = curr.next;
            if (l2Curr.next == null) {
                curr.next = l1Curr;
                return head;
            }
            l2Curr = l2Curr.next;
        }
    }
    return head;
};

var mergeTwoListsNOTMINE = function(l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

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

