import {TreeNode} from "../../common/TreeNode";
export {TreeNode, minDiffInBST};

const collectValues = function (root: TreeNode): number[] {
    const values: number[] = [root.val];

    if (root.left) {
        values.push(...collectValues(root.left));
    }
    if (root.right) {
        values.push(...collectValues(root.right));
    }

    return values;
};

const minDiffInBST = function (root: TreeNode): number {
    let values: number[] = collectValues(root);
    values = values.sort((a: number, b: number) => a - b);

    let minDiff: number = Number.MAX_VALUE;
    for (let i: number = 0; i < values.length - 1; i++) {
        const diff: number = values[i + 1] - values[i];

        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
};
