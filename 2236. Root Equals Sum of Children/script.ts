import {TreeNode} from '../common/TreeNode'

function checkTree(root: TreeNode): boolean {
    if (root && root.left && root.right) {
        return root.val === (root.left.val + root.right.val);
    } else {
        throw new Error("Tree node is incomplete");
    }
}