import {TreeNode} from "../../common/TreeNode";

export {TreeNode, maxLevelSum};

function maxLevelSum(root: TreeNode | null): number {
    const levelsSum: Map<number, number> = collect(root, 1);

    return findKeyWithMaxValue(levelsSum);
}

function merge(data: Map<number, number>, level: number, value: number): void {
    const levelSum: number | undefined = data.get(level);

    if (levelSum) {
        data.set(level, levelSum + value);
    } else {
        data.set(level, value);
    }
}

function collect(root: TreeNode | null, level: number): Map<number, number> {
    let map: Map<number, number> = new Map<number, number>();

    if (root) {
        merge(map, level, root.val);

        map = sumMaps(map, collect(root.left, level + 1));
        map = sumMaps(map, collect(root.right, level + 1));
    }

    return map;
}

function sumMaps(first: Map<number, number>, second: Map<number, number>): Map<number, number> {
    const map: Map<number, number> = new Map<number, number>();

    for (const kv of first) {
        map.set(kv[0], (map.get(kv[0]) ?? 0) + kv[1]);
    }

    for (const kv of second) {
        map.set(kv[0], (map.get(kv[0]) ?? 0) + kv[1]);
    }

    return map;
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
