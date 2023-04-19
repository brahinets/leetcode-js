import {TreeNode} from "../../common/TreeNode";

export {TreeNode, longestZigZag};

const maxDepth = (root: TreeNode | null, toLeft:boolean): number => {
    if (!root) {
        return 0;
    }

    let leftDepth: number = 0;
    let rightDepth: number = 0;

    if (toLeft && root.left) {
        leftDepth = 1 + maxDepth(root.left, !toLeft);
    }

    if (!toLeft && root.right) {
        rightDepth = 1 + maxDepth(root.right, toLeft);
    }

    return Math.max(rightDepth, leftDepth, maxDepth(root.left, toLeft), maxDepth(root.right, !toLeft));
}

function longestZigZag(root: TreeNode | null): number {
    return Math.max(maxDepth(root, true), maxDepth(root, false));
}