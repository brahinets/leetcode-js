import {TreeNode} from "../../common/TreeNode"

export {buildTree}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }

    const rootValue: number = preorder[0]
    const rootIndexInorder: number = inorder.indexOf(rootValue)

    const leftInorder: number[] = inorder.slice(0, rootIndexInorder)
    const rightInorder: number[] = inorder.slice(rootIndexInorder + 1)

    const leftPreorder: number[] = preorder.slice(1, 1 + leftInorder.length)
    const rightPreorder: number[] = preorder.slice(1 + leftInorder.length)

    const leftSubtree: TreeNode | null = buildTree(leftPreorder, leftInorder)
    const rightSubtree: TreeNode | null = buildTree(rightPreorder, rightInorder)

    return new TreeNode(rootValue, leftSubtree, rightSubtree)
}
