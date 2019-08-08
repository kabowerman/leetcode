/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null) { return null; }
    if (head.next == null) { return head; }
    
    var ret = new ListNode(head.val);
    var currRet = ret;

    var curr = head.next;
    while (curr.next != null) {
        if (curr.val != curr.next.val) {
            
        }
    }
    return ret;
};