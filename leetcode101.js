
// Finished, made two solutions. Both not too difficult, and are pretty fast
// 6/12/19

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return rec(root, root);
};

var rec = function(root, comp) {
    if (root == null) {
        if (comp == null) { return true; }
        return false;
    }
    if (comp == null) { return false; }
    if (root.val != comp.val) { return false; }
    return rec(root.left, comp.right) && rec(root.right, comp.left);
}

return (root == null && comp == null) 

// var rec = function(root, comp) {
//     if (root == null) {
//         if (comp == null) { return true; }
//         return false;
//     }
//     if (comp == null) { return false; }
//     if (root.left == null || comp.right == null) { if (root.left != comp.right) { return false; } } // Check if null
//     if (root.right == null || comp.left == null) { if (root.right != comp.left) { return false; } } // Check if null
//     if (root.left == comp.right || root.left.val == comp.right.val) {
//         if (root.right == comp.left || root.right.val == comp.left.val) {
//             return rec(root.left, comp.right) && rec(root.right, comp.left);
//         }
//     }
//     return false;
// }


// var rec = function(root, comp) {
//     if (root == null && comp == null) { return true; }
//     if (root == null || comp == null) { return false; }
//     return (root.val == comp.val) && rec(root.left, comp.right) && rec(root.right, comp.left);
// }
