class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
    let data: number[] = [];
    while (head) {
        data.push(head.val);
        head = head.next;
    }

    return toNode(data);
}

function toNode(data: number[]): TreeNode | null {
    if (data.length === 0) {
        return null;
    } else {
        let left: number[] = [];
        let right: number[] = [];
        let val: number | null = null;

        let middle = Math.floor(data.length / 2);

        for (let i: number = 0; i < data.length; i++) {
            if (i < middle) {
                left.push(data[i]);
            } else if (i === middle) {
                val = data[i];
            } else {
                right.push(data[i]);
            }
        }

        if (val === null) {
            throw new Error("Val is not defined. Illegal state");
        }

        return new TreeNode(val, toNode(left), toNode(right));
    }
}