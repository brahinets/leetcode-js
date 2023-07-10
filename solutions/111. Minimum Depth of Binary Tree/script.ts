import {TreeNode} from "../../common/TreeNode";

export {minDepth, TreeNode};

function minDepth(node: TreeNode | null): number {
    if (!node) {
        return 0;
    }

    if (!node.left) {
        return 1 + minDepth(node.right);
    }

    if (!node.right) {
        return 1 + minDepth(node.left);
    }

    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}
