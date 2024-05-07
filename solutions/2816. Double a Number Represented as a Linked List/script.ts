import {ListNode} from "../../common/ListNode"
import {linkedListToArray} from "../../common/list-utils"
import {linkedListOf} from "../../common/list-factories"

export {doubleIt, ListNode}

function doubleIt(head: ListNode | null): ListNode | null {
    const digits: number[] = linkedListToArray(head)!

    let result: number[] = []
    let left: number = 0

    for (const digit of digits.reverse()) {
        left += digit * 2
        result.push(left % 10)

        left = left > 9 ? 1 : 0;
    }

    if (left > 0) {
        result.push(left)
    }

    return linkedListOf(...result.reverse())
}
