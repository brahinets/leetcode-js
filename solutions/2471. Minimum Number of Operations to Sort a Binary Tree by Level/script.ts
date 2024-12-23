import {TreeNode} from "../../common/TreeNode"

export {minimumOperations}

function minimumOperations(root: TreeNode | null): number {
    const queue: TreeNode[] = [root!]

    let totalSwaps = 0
    while (queue.length > 0) {
        const levelSize: number = queue.length
        const levelValues: number[] = [levelSize]

        for (let i: number = 0; i < levelSize; i++) {
            let node: TreeNode = queue.shift()!
            levelValues[i] = node.val

            if (node.left != null) {
                queue.push(node.left)
            }

            if (node.right != null) {
                queue.push(node.right)
            }
        }

        totalSwaps += getMinSwaps(levelValues)
    }

    return totalSwaps
}

function getMinSwaps(original: number[]): number {
    let target: number[] = [...original].sort((a: number, b: number): number => a - b)

    const position: Map<number, number> = new Map<number, number>()
    for (let i: number = 0; i < original.length; i++) {
        position.set(original[i], i)
    }

    let swaps: number = 0
    for (let i: number = 0; i < original.length; i++) {
        if (original[i] != target[i]) {
            swaps++

            const curPos: number = position.get(target[i])!;
            position.set(original[i], curPos)
            original[curPos] = original[i]
        }
    }

    return swaps
}
