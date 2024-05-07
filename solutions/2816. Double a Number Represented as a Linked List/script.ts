import {ListNode} from "../../common/ListNode"
import {linkedListToArray} from "../../common/list-utils"
import {linkedListOf} from "../../common/list-factories"

export {doubleIt, ListNode}

function doubleIt(head: ListNode | null): ListNode | null {
    const digits: number[] = linkedListToArray(head)!.reverse()

    let result: number = 0
    let order: number = 1

    for (const digit of digits) {
        result += (order * digit)
        order *= 10
    }

    result *= 2

    return linkedListOf(...String(result).split("").map((n: string): number => Number(n)))
}
