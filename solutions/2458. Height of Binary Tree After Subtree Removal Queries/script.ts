import {TreeNode} from "../../common/TreeNode"
import {arrayOfZeros} from "../../common/array-factories"

export {treeQueries}

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
    const maxHeightAfterRemoval: number[] = arrayOfZeros(100001)

    traverseLeftToRight(root, 0, maxHeightAfterRemoval, {currentMaxHeight: 0})
    traverseRightToLeft(root, 0, maxHeightAfterRemoval, {currentMaxHeight: 0})

    return queries.map(query => maxHeightAfterRemoval[query])
}

function traverseLeftToRight(
    node: TreeNode | null,
    currentHeight: number,
    maxHeightAfterRemoval: number[],
    state: { currentMaxHeight: number }
): void {
    if (!node) {
        return
    }

    maxHeightAfterRemoval[node.val] = state.currentMaxHeight

    state.currentMaxHeight = Math.max(state.currentMaxHeight, currentHeight)

    traverseLeftToRight(node.left, currentHeight + 1, maxHeightAfterRemoval, state)
    traverseLeftToRight(node.right, currentHeight + 1, maxHeightAfterRemoval, state)
}

function traverseRightToLeft(
    node: TreeNode | null,
    currentHeight: number,
    maxHeightAfterRemoval: number[],
    state: { currentMaxHeight: number }
): void {
    if (!node) {
        return
    }

    maxHeightAfterRemoval[node.val] = Math.max(
        maxHeightAfterRemoval[node.val],
        state.currentMaxHeight
    )

    state.currentMaxHeight = Math.max(currentHeight, state.currentMaxHeight)

    traverseRightToLeft(node.right, currentHeight + 1, maxHeightAfterRemoval, state)
    traverseRightToLeft(node.left, currentHeight + 1, maxHeightAfterRemoval, state)
}

