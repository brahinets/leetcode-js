import {TreeNode} from "../../common/TreeNode"
import {DisjointSetUnion} from "../1579. Remove Max Number of Edges to Keep Graph Fully Traversable/script"
import {arrayOfZeros} from "../../common/array-factories"

export {TreeNode, validateBinaryTreeNodes}

function validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]): boolean {
    const disjointSetUnion: DisjointSetUnion = new DisjointSetUnion(n)
    const inDegree: number[] = arrayOfZeros(n)

    for (let i: number = 0; i < n; i++) {
        if (leftChild[i] !== -1) {
            if (!disjointSetUnion.union(i, leftChild[i]) || ++inDegree[leftChild[i]] > 1) {
                return false
            }
        }

        if (rightChild[i] !== -1) {
            if (!disjointSetUnion.union(i, rightChild[i]) || ++inDegree[rightChild[i]] > 1) {
                return false
            }
        }
    }

    let rootCount: number = 0
    for (let i: number = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            rootCount++
        }
    }

    return rootCount === 1
}
