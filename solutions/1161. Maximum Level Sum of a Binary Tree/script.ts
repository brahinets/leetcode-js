import {TreeNode} from "../../common/TreeNode";

export {TreeNode, maxLevelSum};

function maxLevelSum(root: TreeNode | null): number {
    const map: Map<number, number> = new Map<number, number>();
    collect(root, 1, map);

    return findKeyWithMaxValue(map);
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

        collect(root.left, level + 1, sum);
        collect(root.right, level + 1, sum);
    }
}

function findKeyWithMaxValue(map: Map<number, number>) {
    let maxValue: number = Number.MIN_SAFE_INTEGER;
    let key: number = -1;

    for (const kv of map) {
        if (kv[1] > maxValue) {
            key = kv[0];
            maxValue = kv[1];
        }
    }

    return key;
}
