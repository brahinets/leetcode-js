import {TreeNode} from "../../common/TreeNode"

export {levelOrderBottom}

function levelOrderBottom(root: TreeNode | null): number[][] {
    const result: number[][] = []

    if (!root) {
        return result
    }

    const queue: (TreeNode | null)[] = [root]

    while (queue.length > 0) {
        const levelSize: number = queue.length
        const currentLevel: number[] = []

        for (let i: number = 0; i < levelSize; i++) {
            const currentNode: TreeNode | null = queue.shift() || null

            if (currentNode) {
                currentLevel.push(currentNode.val)

                if (currentNode.left) {
                    queue.push(currentNode.left)
                }

                if (currentNode.right) {
                    queue.push(currentNode.right)
                }
            }
        }

        result.unshift(currentLevel)
    }

    return result
}
