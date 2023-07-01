export {TreeNode, isCompleteTree}
import {TreeNode} from "../../common/TreeNode";

function isCompleteTree(root: TreeNode | null): boolean {
    const nodesCount: number = countNodes(root);

    return hasValidIndex(root, 1, nodesCount);

}

function hasValidIndex(root: TreeNode | null, index: number, total: number): boolean {
    if (!root) {
        return true;
    }

    if (index > total) {
        return false;
    }

    return hasValidIndex(root?.left, index * 2, total)
        && hasValidIndex(root?.right, index * 2 + 1, total);
}


function countNodes(root: TreeNode | null): number {
    if (!root) {
        return 0;
    } else {
        return 1 + countNodes(root?.left) + countNodes(root?.right);
    }
}
