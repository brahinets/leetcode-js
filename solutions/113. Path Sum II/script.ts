import {TreeNode} from "../../common/TreeNode"

export {pathSum}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    return dfs(root, [], 0, targetSum)
}

function dfs(node: TreeNode | null, currentPath: number[], currentSum: number, targetSum: number): number[][] {
    if (!node) {
        return []
    }

    currentPath.push(node.val)
    currentSum += node.val

    let result: number[][] = []

    if (!node.left && !node.right && currentSum === targetSum) {
        result.push([...currentPath])
    } else {
        result = result
            .concat(dfs(node.left, currentPath, currentSum, targetSum))
            .concat(dfs(node.right, currentPath, currentSum, targetSum))
    }

    currentPath.pop()
    return result
}

