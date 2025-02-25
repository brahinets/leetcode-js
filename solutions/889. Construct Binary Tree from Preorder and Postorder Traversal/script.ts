import {TreeNode} from "../../common/TreeNode"

export {constructFromPrePost}

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    let numOfNodes: number = preorder.length

    const indexInPostOrder: number[] = []
    for (let index: number = 0; index < numOfNodes; index++) {
        indexInPostOrder[postorder[index]] = index
    }

    return constructTree(0, numOfNodes - 1, 0, preorder, indexInPostOrder)
}

function constructTree(
    preStart: number,
    preEnd: number,
    postStart: number,
    preorder: number[],
    indexInPostOrder: number[]
): TreeNode | null {
    if (preStart > preEnd) {
        return null
    }

    if (preStart == preEnd) {
        return new TreeNode(preorder[preStart])
    }

    let leftRoot: number = preorder[preStart + 1]
    let numOfNodesInLeft: number = indexInPostOrder[leftRoot] - postStart + 1
    const root: TreeNode = new TreeNode(preorder[preStart])

    root.left = constructTree(
        preStart + 1,
        preStart + numOfNodesInLeft,
        postStart,
        preorder,
        indexInPostOrder
    )

    root.right = constructTree(
        preStart + numOfNodesInLeft + 1,
        preEnd,
        postStart + numOfNodesInLeft,
        preorder,
        indexInPostOrder
    )

    return root
}
