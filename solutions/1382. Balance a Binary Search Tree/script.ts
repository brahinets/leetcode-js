import {TreeNode} from "../../common/TreeNode"

export {balanceBST}

function balanceBST(root: TreeNode | null): TreeNode | null {
    const sorted: number[] = inorderTraversal(root)

    return buildBalancedBST(sorted, 0, sorted.length - 1)
}

function inorderTraversal(node: TreeNode | null): number[] {
    if (node === null) {
        return [];
    }

    return [
        ...inorderTraversal(node.left),
        node.val,
        ...inorderTraversal(node.right)
    ];
}

function buildBalancedBST(nums: number[], start: number, end: number): TreeNode | null {
    if (start > end) {
        return null
    }

    const mid: number = Math.floor((start + end) / 2)
    const node: TreeNode = new TreeNode(nums[mid])

    node.left = buildBalancedBST(nums, start, mid - 1)
    node.right = buildBalancedBST(nums, mid + 1, end)

    return node
}
