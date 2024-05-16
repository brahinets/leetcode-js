import {TreeNode} from "../../common/TreeNode"

export {TreeNode, evaluateTree}

const TRUE: number = 1
const FALSE: number = 0

const AND: number = 3
const OR: number = 2

const OPERANDS:number[] = [TRUE, FALSE, AND, OR]

function evaluateTree(root: TreeNode | null): boolean {
    if (!root) {
        return false
    }

    if(!OPERANDS.includes(root.val)) {
        throw new Error("Illegal operand")
    }

    if (root.left && root.right) {
        if (root.val === AND) {
            return evaluateTree(root.left) && evaluateTree(root.right)
        } else {
            return evaluateTree(root.left) || evaluateTree(root.right)
        }
    } else {
        return root.val === TRUE
    }
}
