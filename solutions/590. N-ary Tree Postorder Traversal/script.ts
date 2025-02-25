import {Node} from '../../common/Node'

export {postorder, Node}

function postorder(root: Node | null): number[] {
    if (!root) {
        return []
    }

    const result: number[] = []
    for (const child of root.children) {
        result.push(...postorder(child))
    }
    result.push(root.val)

    return result
}
