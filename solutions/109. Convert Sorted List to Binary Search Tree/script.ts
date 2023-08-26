import {ListNode} from "../../common/ListNode"
import {TreeNode} from "../../common/TreeNode"

export {sortedListToBST, ListNode, TreeNode}

function sortedListToBST(head: ListNode | null): TreeNode | null {
    const data: number[] = []
    while (head) {
        data.push(head.val)
        head = head.next
    }

    return toNode(data)
}

function toNode(data: number[]): TreeNode | null {
    if (data.length === 0) {
        return null
    } else {
        const left: number[] = []
        const right: number[] = []
        let val: number | null = null

        const middle: number = Math.floor(data.length / 2)

        for (let i: number = 0; i < data.length; i++) {
            if (i < middle) {
                left.push(data[i])
            } else if (i === middle) {
                val = data[i]
            } else {
                right.push(data[i])
            }
        }

        if (val === null) {
            throw new Error("Val is not defined. Illegal state")
        }

        return new TreeNode(val, toNode(left), toNode(right))
    }
}
