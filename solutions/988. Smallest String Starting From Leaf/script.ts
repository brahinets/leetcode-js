import {ListNode} from "../../common/ListNode"
import {TreeNode} from "../../common/TreeNode"

export {smallestFromLeaf, ListNode, TreeNode}

const ALPHABET: string = 'abcdefghijklmnopqrstuvwxyz'

function smallestFromLeaf(root: TreeNode | null): string {
    if (!root) {
        return ""
    }

    return traverse(root, "")
}

function traverse(node: TreeNode | null, suffix: string): string {
    if (!node) {
        return ""
    }

    const currentChar:string = char(node.val) + suffix
    if (!node.left && !node.right) {
        return currentChar
    }

    const leftPath:string = traverse(node.left, currentChar)
    const rightPath:string = traverse(node.right, currentChar)

    if (leftPath === "" || (rightPath !== "" && rightPath < leftPath)) {
        return rightPath
    } else {
        return leftPath
    }
}

function char(id: number): string {
    return ALPHABET[id]
}

