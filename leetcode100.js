
// Finished, took forever and is way too complicated. But it's efficient
// Made two solutions, rec and newRec
// 6/12/19

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p == null && q == null) { return true; }
    if (p == null || q == null) { return false; }
    return rec(p,q);
};

var rec = function(p,q) {
    if (p.val != q.val) { return false; }
    if (p.left == null) {
        if (q.left != null) { return false; }
        if (p.right == null) {
            if (q.right != null) { return false; }
            return true;
        }
        else { 
            if (q.right == null) { return false; }
            return rec(p.right, q.right);
        }
    }
    else if (p.right == null) {
        if (q.right != null || q.left == null) { return false; }
        return rec(p.left, q.left);
    }
    else {
        if (q.left == null || q.right == null) { return false; }
        return rec(p.left, q.left) && rec(p.right, q.right);
    }
}

var newRec = function(p,q) {
    if (p == null) {
        if (q == null) { return true; }
        return false;
    }
    if (q == null) { return false; }
    if (p.val != q.val) { return false; }
    if (p.left == null && p.right == null && q.left == null && q.right == null) { return true; }
    return rec(p.left, q.left) && rec(p.right, q.right);
}
