/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * @param {TreeNode} root
 * @return Array<number> nodes values
 */
const collectValues = function (root) {
    let values = [root.val];

    if (root.left) {
        values.push(...collectValues(root.left));
    }
    if (root.right) {
        values.push(...collectValues(root.right));
    }

    return values;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = function (root) {
    let values = collectValues(root);
    values = values.sort((a, b) => a - b);

    let minDiff = Number.MAX_VALUE;
    for (let i = 0; i < values.length - 1; i++) {
        let diff = values[i + 1] - values[i];

        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
};
