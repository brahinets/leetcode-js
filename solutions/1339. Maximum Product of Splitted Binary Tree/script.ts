import {TreeNode} from "../../common/TreeNode"

export {maxProduct}

const MOD: number = 1e9 + 7

function maxProduct(root: TreeNode | null): number {
    const sums: number[] = []
    const totalSum: number = collectSubtreeSums(root, sums)
    let max: number = 0

    for (const s of sums) {
        max = Math.max(max, s * (totalSum - s))
    }

    return max % MOD
}

function collectSubtreeSums(node: TreeNode | null, sums: number[]): number {
    if (node === null) {
        return 0
    }

    const left: number = collectSubtreeSums(node.left, sums)
    const right: number = collectSubtreeSums(node.right, sums)
    const sum: number = node.val + left + right

    sums.push(sum)

    return sum
}
