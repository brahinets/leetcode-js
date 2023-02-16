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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    let leftDepth = 0;
    let rightDepth = 0;

    if (root.left) {
        leftDepth = 1 + maxDepth(root.left);
    } else {
        leftDepth += 1;
    }

    if (root.right) {
        rightDepth = 1 + maxDepth(root.right);
    } else {
        rightDepth += 1;
    }

    return Math.max(rightDepth, leftDepth);
};

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}