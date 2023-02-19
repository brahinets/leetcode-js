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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let result = [];

    collect(root, 0, result);

    return result;
}

var collect = function (node, level, result) {
    if (!node) {
        return;
    }

    if (result.length <= level) {
        result.push([]);
    }

    if (level % 2 === 0) {
        result[level].push(node.val);
    } else {
        result[level].unshift(node.val);
    }

    collect(node.left, level + 1, result);
    collect(node.right, level + 1, result);
}