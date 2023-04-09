export {isSymmetric, TreeNode}
import {TreeNode} from '../../common/TreeNode'

const isSymmetric = (root: TreeNode | null): boolean => {
    if (!root) {
        return true;
    }

    return isSymmetricNode(root.left, root.right);
}

const isSymmetricNode = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) {
        return true;
    }

    if (!left || !right || left.val != right.val) {
        return false;
    }

    return isSymmetricNode(left.left, right.right) && isSymmetricNode(left.right, right.left);
}