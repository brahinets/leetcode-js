import {ListNode} from "../../common/ListNode"

export {mergeInBetween, ListNode}

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let start: ListNode | null = null
    let end: ListNode | null = list1

    for (let i: number = 0; i < b; i++) {
        if (i === a - 1) {
            start = end
        }

        end = end?.next || null
    }

    if (start) {
        start.next = list2
    }

    while (list2?.next) {
        list2 = list2?.next || null
    }

    if (list2 && end) {
        list2.next = end.next
    }

    return list1
}
