import {ListNode} from "../../common/ListNode"
import {linkedListToArray} from "../../common/list-utils"

export {pairSum, ListNode}

function pairSum(head: ListNode | null): number {
    const data: number[] | null = linkedListToArray(head)

    if (!data) {
        return 0
    }

    let max: number | undefined = undefined
    for (let i: number = 0; i < data.length / 2; i++) {
        const sum: number = data[i] + data[data.length - 1 - i]
        if (max === undefined || sum > max) {
            max = sum
        }
    }

    if (max === undefined) {
        throw new Error("Not enough data to define max")
    }

    return max
}
