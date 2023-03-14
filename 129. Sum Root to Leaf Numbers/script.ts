import {TreeNode} from '../common/TreeNode'

function collectPaths(node: TreeNode | null, parentPath: string): string [] {
    if (node === null) {
        return [parentPath];
    }

    let paths: string[] = [];

    if (node.left) {
        paths.push(...collectPaths(node?.left, parentPath + node?.val));
    }

    if (node.right) {
        paths.push(...collectPaths(node?.right, parentPath + node?.val));
    }

    if (!node.left && !node.right) {
        paths.push(parentPath + node.val)
    }

    return paths;
}

const sumNumbers = (root: TreeNode | null): number => {
    return collectPaths(root, "")
        .map((num: string) => Number(num))
        .reduce((num: number, sum: number) => num + sum, 0);
}