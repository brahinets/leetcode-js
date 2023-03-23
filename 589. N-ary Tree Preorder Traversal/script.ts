import {Node} from '../common/Node'

export {preorder, Node}

function preorder(root: Node): number[] {
    const result: number[] = [root.val];

    for (let child of root.children) {
        result.push(...preorder(child));
    }

    return result;
}