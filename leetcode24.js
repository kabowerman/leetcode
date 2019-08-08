
// FINISHED, FIRST TRY


function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var temp = head;
    var numNodes = countNodes(temp);
    if (numNodes < 2) {
        return head;
    }
    temp = head; // temp = 1-2-3-4
    var curr = new ListNode(temp.next.val); // curr = 2, head = temp = 1-2-3-4
    curr.next = new ListNode(temp.val); // curr = 2-1, temp = head = 1-2-3-4
    var ret = curr; // ret = curr = 2-1, temp = head = 1-2-3-4
    curr = curr.next; // ret = 2-1, curr = 1, temp = head = 1-2-3-4
    temp = temp.next; // ret = 2-1, curr = 1, temp = 2-3-4, head = 1-2-3-4
    if (temp.next == null) { return ret; }
    temp = temp.next; // temp = 3-4
    numNodes -= 2;
    while (numNodes >= 2) {
        curr.next = new ListNode(temp.next.val); // curr = 1-4
        curr = curr.next; // curr = 4
        curr.next = new ListNode(temp.val); // curr = 4-3
        curr = curr.next; // curr = 3
        temp = temp.next; // temp = 4-5-6
        temp = temp.next; // temp = 5-6
        numNodes -= 2;
    }
    if (numNodes = 1) {
        curr.next = temp;
    }
    return ret;
};



// Given the head, counts the number of nodes (including head)
var countNodes = function(head) {
    if (head == null) { return 0; }
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
var ans = swapPairs(node);
nodePrinter(ans);