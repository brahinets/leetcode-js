import {TreeNode} from "../../common/TreeNode"

export {buildTree}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder.length === 0 || postorder.length === 0) {
        return null
    }

    const rootValue: number = postorder[postorder.length - 1]
    const rootIndexInorder: number = inorder.indexOf(rootValue)

    const leftInorder: number[] = inorder.slice(0, rootIndexInorder)
    const rightInorder: number[] = inorder.slice(rootIndexInorder + 1)

    const leftPostorder: number[] = postorder.slice(0, leftInorder.length)
    const rightPostorder: number[] = postorder.slice(leftInorder.length, postorder.length - 1)

    const leftSubtree: TreeNode | null = buildTree(leftInorder, leftPostorder)
    const rightSubtree: TreeNode | null = buildTree(rightInorder, rightPostorder)

    return new TreeNode(rootValue, leftSubtree, rightSubtree)
}
