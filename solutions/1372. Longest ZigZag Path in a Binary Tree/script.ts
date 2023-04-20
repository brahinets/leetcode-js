import {TreeNode} from "../../common/TreeNode";

export {TreeNode, longestZigZag};

const maxDepth = (root: TreeNode | null, toLeft: boolean, depth: number): number => {
    if (!root) {
        return depth;
    }

    let keep: number = depth;
    let start: number = 0;

    if (toLeft) {
        if (root.left) {
            keep = maxDepth(root.left, false, depth + 1);
        } else {
            start = maxDepth(root.right, false, 0);
        }
    } else {
        if (root.right) {
            keep = maxDepth(root.right, true, depth + 1);
        } else {
            start = maxDepth(root.left, true, 0);
        }
    }

    return Math.max(start, keep);
}

function longestZigZag(root: TreeNode | null): number {
    return Math.max(maxDepth(root, true, 0), maxDepth(root, false, 0));
}