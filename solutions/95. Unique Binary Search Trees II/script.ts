import {TreeNode} from "../../common/TreeNode"

export {generateTrees}

function generateTrees(n: number): Array<TreeNode | null> {
    if (n === 0) {
        return []
    }

    return generateTreesInRange(1, n)
}

function generateTreesInRange(start: number, end: number): Array<TreeNode | null> {
    const allTrees: Array<TreeNode | null> = []

    if (start > end) {
        allTrees.push(null)
        return allTrees
    }

    for (let i: number = start; i <= end; i++) {
        const leftSubtrees: Array<TreeNode | null> = generateTreesInRange(start, i - 1)
        const rightSubtrees: Array<TreeNode | null> = generateTreesInRange(i + 1, end)

        for (const leftSubtree of leftSubtrees) {
            for (const rightSubtree of rightSubtrees) {
                const currentTree: TreeNode = new TreeNode(i)
                currentTree.left = leftSubtree
                currentTree.right = rightSubtree
                allTrees.push(currentTree)
            }
        }
    }

    return allTrees
}
