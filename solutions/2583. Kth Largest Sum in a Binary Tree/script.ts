import {TreeNode} from "../../common/TreeNode"

export {kthLargestLevelSum}

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    const sums: number[] = []

    dfs(root, 0, sums)

    sums.sort((a: number, b: number): number => b - a)

    return sums[k - 1] ?? -1
}

function dfs(root: TreeNode | null, number: number, sums: number[]):void {
    if (!root) {
        return
    }

    if (sums[number] === undefined) {
        sums[number] = 0
    }

    sums[number] += root.val

    dfs(root.left, number + 1, sums)
    dfs(root.right, number + 1, sums)
}
