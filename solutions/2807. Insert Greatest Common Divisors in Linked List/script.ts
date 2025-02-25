import {ListNode} from "../../common/ListNode"

export {insertGreatestCommonDivisors}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null
    }

    let current: ListNode | null = head

    while (current && current.next) {
        const next: ListNode | null = current.next
        const gcdOf: number = gcd(current.val, next.val)

        const newNode: ListNode = new ListNode(gcdOf)
        newNode.next = next
        current.next = newNode

        current = newNode.next
    }

    return head
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a
    }

    return gcd(b, a % b)
}

