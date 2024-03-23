import {Node} from '../../common/Node'

export {preorder, Node}

function preorder(root: Node | null): number[] {
    if (!root) {
        return []
    }

    const result: number[] = [root.val]

    for (const child of root.children) {
        result.push(...preorder(child))
    }

    return result
}
