import {ListNode} from "../../common/ListNode"
import {linkedListToArray} from "../../common/list-utils"
import {arraysAreEqual} from "../../common/array-utils"

export {isPalindrome, ListNode}

function isPalindrome(head: ListNode | null): boolean {
    const array: number[] = linkedListToArray(head)!

    return arraysAreEqual(array, [...array].reverse())
}
