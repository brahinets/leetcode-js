import {ListNode} from "../../common/ListNode"

export {getDecimalValue}

function getDecimalValue(head: ListNode | null): number {
    let result: number = 0;

    while (head !== null) {
        result = (result << 1) | head.val;

        head = head.next;
    }

    return result;
}
