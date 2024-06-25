import {TreeNode} from "../../common/TreeNode"
import {bstToGst} from "../1038. Binary Search Tree to Greater Sum Tree/script";

export {TreeNode, convertBST}

function convertBST(root: TreeNode | null): TreeNode | null {
    return bstToGst(root)
}
