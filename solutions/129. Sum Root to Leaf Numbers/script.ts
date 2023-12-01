import {TreeNode} from '../../common/TreeNode'

export {sumNumbers, TreeNode}

function sumNumbers(root: TreeNode): number {
    return collectPaths(root, "")
        .map((num: string) => Number(num))
        .reduce((num: number, sum: number) => num + sum, 0);
}

function collectPaths(node: TreeNode, parentPath: string): string [] {
    const paths: string[] = [];

    if (node.left) {
        paths.push(...collectPaths(node.left, parentPath + node.val));
    }

    if (node.right) {
        paths.push(...collectPaths(node.right, parentPath + node.val));
    }

    if (!node.left && !node.right) {
        paths.push(parentPath + node.val)
    }

    return paths;
}
