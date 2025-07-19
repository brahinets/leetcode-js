import { ListNode } from "../../common/ListNode"

export { sortList }

function sortList(head: ListNode | null): ListNode | null {
    if (!isValidForSorting(head)) {
        return head
    }

    const { leftHalf, rightHalf } = splitListInHalf(head as ListNode)

    const sortedLeft: ListNode | null = sortList(leftHalf)
    const sortedRight: ListNode | null = sortList(rightHalf)

    return mergeSortedLists(sortedLeft, sortedRight)
}

function isValidForSorting(head: ListNode | null): boolean {
    return head !== null && head.next !== null
}

function splitListInHalf(head: ListNode): { leftHalf: ListNode, rightHalf: ListNode } {
    let slowPointer: ListNode = head
    let fastPointer: ListNode | null = head
    let previousToSlow: ListNode | null = null

    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next
        previousToSlow = slowPointer
        slowPointer = slowPointer.next!
    }

    if (previousToSlow) {
        previousToSlow.next = null
    }

    return {
        leftHalf: head,
        rightHalf: slowPointer
    }
}

function mergeSortedLists(firstList: ListNode | null, secondList: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0)
    let current: ListNode = dummyHead

    while (firstList && secondList) {
        if (firstList.val <= secondList.val) {
            current.next = firstList
            firstList = firstList.next
        } else {
            current.next = secondList
            secondList = secondList.next
        }

        current = current.next
    }

    current.next = firstList || secondList

    return dummyHead.next
}
