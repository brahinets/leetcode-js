import {ListNode} from "../../common/ListNode"
import {TreeNode} from "../../common/TreeNode"
import {first} from "../../common/array-utils"

export {smallestFromLeaf, ListNode, TreeNode}

const ALPHABET: string = 'abcdefghijklmnopqrstuvwxyz'

function smallestFromLeaf(root: TreeNode | null): string {
    if (!root) {
        return ""
    }

    const paths: Set<string> = new Set<string>()

    collectPaths("", root, paths)

    return first([...paths].sort())!
}

function collectPaths(prefix: string, node: TreeNode | null, paths: Set<string>): void {
    if (!node) {
        return
    }

    if (!node.left && !node.right) {
        paths.add(char(node.val) + prefix)
        return
    }

    collectPaths(char(node.val) + prefix, node.left, paths)
    collectPaths(char(node.val) + prefix, node.right, paths)
}


function char(id: number): string {
    return ALPHABET[id]
}

