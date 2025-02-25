import {ListNode} from "../../common/ListNode"

export {nodesBetweenCriticalPoints}

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    if (!head || !head.next || !head.next.next) {
        return [-1, -1]
    }

    let prev: ListNode = head
    let current: ListNode = head.next
    let next: null | ListNode = current.next
    let index: number = 1
    let criticalPoints: number[] = []

    while (next) {
        if ((current.val > prev.val && current.val > next.val) || (current.val < prev.val && current.val < next.val)) {
            criticalPoints.push(index)
        }

        prev = current
        current = next
        next = next.next
        index++
    }

    if (criticalPoints.length < 2) {
        return [-1, -1]
    }

    let minDistance = Infinity
    let maxDistance = criticalPoints[criticalPoints.length - 1] - criticalPoints[0]
    for (let i = 1; i < criticalPoints.length; i++) {
        minDistance = Math.min(minDistance, criticalPoints[i] - criticalPoints[i - 1])
    }

    return [minDistance, maxDistance]
}
