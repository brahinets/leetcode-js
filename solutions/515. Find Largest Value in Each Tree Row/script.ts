import {TreeNode} from "../../common/TreeNode"

export {TreeNode, largestValues}

function largestValues(root: TreeNode | null): number[] {
    const result: number[] = []
    if (root === null) {
        return result
    }

    const queue: TreeNode[] = [root]
    while (queue.length > 0) {
        const size: number = queue.length
        let max: number = Number.MIN_SAFE_INTEGER

        for (let i: number = 0; i < size; i++) {
            const node: TreeNode = queue.shift()!

            max = Math.max(max, node.val)

            if (node.left !== null) {
                queue.push(node.left)
            }

            if (node.right !== null) {
                queue.push(node.right)
            }
        }

        result.push(max)
    }

    return result
}
