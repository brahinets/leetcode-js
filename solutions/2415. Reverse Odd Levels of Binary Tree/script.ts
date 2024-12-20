import {TreeNode} from "../../common/TreeNode"

export {reverseOddLevels}

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null
    }

    traverseDFS(root.left, root.right, 0)

    return root
}

function traverseDFS(leftChild: TreeNode | null, rightChild: TreeNode | null, level: number): void {
    if (!leftChild || !rightChild) {
        return
    }

    if (level % 2 == 0) {
        const temp: number = leftChild.val
        leftChild.val = rightChild.val
        rightChild.val = temp
    }

    traverseDFS(leftChild.left, rightChild.right, level + 1)
    traverseDFS(leftChild.right, rightChild.left, level + 1)
}
