import {TreeNode} from "../../common/TreeNode";

export {TreeNode, maxLevelSum};

function maxLevelSum(root: TreeNode | null): number {
    const map: Map<number, number> = new Map<number, number>();
    collect(root, 1, map);

    let maxSum: number = Number.MIN_SAFE_INTEGER;
    let maxLevel: number = -1;
    for (const kv of map) {
        if (kv[1] > maxSum) {
            maxLevel = kv[0];
            maxSum = kv[1];
        }
    }

    return maxLevel;
}

function merge(data: Map<number, number>, level: number, value: number): void {
    const levelSum: number | undefined = data.get(level);

    if (levelSum) {
        data.set(level, levelSum + value);
    } else {
        data.set(level, value);
    }
}

function collect(root: TreeNode | null, level: number, sum: Map<number, number>): void {
    if (root) {
        merge(sum, level, root.val);
    }

    if (root?.left) {
        collect(root.left, level + 1, sum);
    }

    if (root?.right) {
        collect(root.right, level + 1, sum);
    }
}
