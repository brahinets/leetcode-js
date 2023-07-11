import {TreeNode} from "../../common/TreeNode";

export {distanceK, TreeNode};

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    const result: number[] = [];

    if (!root || !target) {
        return result;
    }

    const startNode: TreeNode | null = findNode(root, target);
    if (!startNode) {
        return result;
    }

    return result;
}

function findNode(root: TreeNode, target: TreeNode): TreeNode | null {
    if (root.val === target.val) {
        return root;
    }

    if (root.left) {
        const lefty: TreeNode | null = findNode(root.left, target);
        if (lefty) {
            return lefty;
        }
    }

    if (root.right) {
        const righty: TreeNode | null = findNode(root.right, target);
        if (righty) {
            return righty;
        }
    }

    return null;
}
