import {TreeNode} from "../../common/TreeNode"

export {sortedArrayToBST}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null
    }

    const midIndex: number = Math.floor(nums.length / 2)
    const rootValue: number = nums[midIndex]

    const leftSubtree: TreeNode | null = sortedArrayToBST(nums.slice(0, midIndex))
    const rightSubtree: TreeNode | null = sortedArrayToBST(nums.slice(midIndex + 1))

    return new TreeNode(rootValue, leftSubtree, rightSubtree)
}
