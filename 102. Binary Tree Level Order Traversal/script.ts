import {TreeNode} from '../common/TreeNode'

export {levelOrder, TreeNode}

function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];

    collect(root, 0, result);

    return result;
}

const collect = function (node: TreeNode | null | undefined, layer: number, result: number[][]): void {
    if (!node) {
        return;
    }

    result[layer] = [...(result[layer] || []), node.val]

    collect(node?.left, layer + 1, result);
    collect(node?.right, layer + 1, result);
}