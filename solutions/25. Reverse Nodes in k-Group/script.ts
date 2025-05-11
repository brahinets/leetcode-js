import {ListNode} from "../../common/ListNode"

export {reverseKGroup}

function reverseKGroup(head: ListNode | null, groupSize: number): ListNode | null {
    let currentNode: ListNode | null = head
    let groupStartNode: ListNode | null = head
    const groupValues: number[] = []

    while (currentNode) {
        groupValues.push(currentNode.val)

        if (groupValues.length == groupSize) {
            groupStartNode = reverseSublist(groupValues, groupStartNode!)
        }

        currentNode = currentNode.next
    }

    return head
}

function reverseSublist(values: number[], startNode: ListNode): ListNode {
    while (values.length > 0) {
        startNode.val = values.pop()!
        startNode = startNode.next!
    }

    return startNode
}
