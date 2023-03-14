import {TreeNode} from "../common/TreeNode";

const maxDepth = (root: TreeNode): number => {
    if (!root) {
        return 0;
    }

    let leftDepth: number = 0;
    let rightDepth: number = 0;

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