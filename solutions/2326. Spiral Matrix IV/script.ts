import {ListNode} from "../../common/ListNode"
import {matrixOf} from "../../common/array-factories"

export {spiralMatrix}

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    const matrix: number[][] = matrixOf(-1, m, n)

    let top: number = 0
    let bottom: number = m - 1
    let left: number = 0
    let right: number = n - 1
    let current: ListNode | null = head

    while (top <= bottom && left <= right && current) {
        for (let i: number = left; i <= right && current; i++) {
            matrix[top][i] = current.val
            current = current.next
        }
        top++

        for (let i: number = top; i <= bottom && current; i++) {
            matrix[i][right] = current.val
            current = current.next
        }
        right--

        for (let i: number = right; i >= left && current; i--) {
            matrix[bottom][i] = current.val
            current = current.next
        }
        bottom--

        for (let i: number = bottom; i >= top && current; i--) {
            matrix[i][left] = current.val
            current = current.next
        }
        left++
    }

    return matrix
}
