import {TreeNode} from '../../common/TreeNode'

export {sumOfLeftLeaves, TreeNode}

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    return collect([], [root])
}

function collect(lefts: TreeNode[], rights: TreeNode[]): number {
    let sum: number = 0

    if (!lefts.length && !rights.length) {
        return sum
    }

    let nextLefts: TreeNode[] = []
    let nextRights: TreeNode[] = []

    for (const node of lefts) {
        if (node.left) {
            nextLefts.push(node.left)
        }
        if (node.right) {
            nextRights.push(node.right)
        }

        if (!node.left && !node.right) {
            sum += node.val
        }
    }

    for (const node of rights) {
        if (node.left) {
            nextLefts.push(node.left)
        }
        if (node.right) {
            nextRights.push(node.right)
        }
    }

    return sum + collect(nextLefts, nextRights)
}
