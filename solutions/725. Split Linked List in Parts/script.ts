import {ListNode} from "../../common/ListNode"

export {splitListToParts, ListNode}

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let length: number = 0
    let current: ListNode | null = head
    while (current) {
        length++
        current = current.next
    }

    const partLength: number = Math.floor(length / k)
    const longerParts: number = length % k

    const result: Array<ListNode | null> = []
    current = head
    for (let i: number = 0; i < k; i++) {
        result.push(current)
        const partSize: number = partLength + (i < longerParts ? 1 : 0)
        for (let j: number = 0; j < partSize - 1; j++) {
            if (current) {
                current = current.next
            }
        }

        if (current) {
            const next: ListNode | null = current.next
            current.next = null
            current = next
        }
    }

    return result
}
