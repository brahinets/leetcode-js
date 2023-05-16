import {ListNode} from "../../common/ListNode";

export {swapNodes};

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let count: number = 1;
    let firstNode: ListNode | null = head;
    while (count < k) {
        firstNode = firstNode?.next || null;
        count++;
    }

    let secondNode: ListNode | null = head;
    let secondIter: ListNode | null = firstNode;
    while (secondIter?.next) {
        secondNode = secondNode?.next || null;
        secondIter = secondIter.next;
    }

    if (!firstNode || !secondNode) {
        throw new Error("Element not found");
    }

    const tmp: number = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = tmp;

    return head;
}