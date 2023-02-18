/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return null;
    }

    let newRight = null;
    if (root.left) {
        newRight = invertTree(root.left);
    }

    let newLeft = null;
    if (root.right) {
        newLeft = invertTree(root.right);
    }

    root.left = newLeft;
    root.right = newRight;

    return root;
};