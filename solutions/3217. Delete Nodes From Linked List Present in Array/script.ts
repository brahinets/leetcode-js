import {ListNode} from "../../common/ListNode"

export {modifiedList}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const valuesToRemove: Set<number> = new Set<number>(nums)
    const dummy: ListNode = new ListNode(0, head)
    let current: ListNode = dummy

    while (current.next) {
        if (valuesToRemove.has(current.next.val)) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return dummy.next
}
