import {PriorityQueue} from "../../common/PriorityQueue"

export {maxRemoval}

function maxRemoval(nums: number[], queries: number[][]): number {
    queries.sort((a: number[], b: number[]): number => a[0] - b[0])

    const heap: PriorityQueue<number> = new PriorityQueue<number>((a: number, b: number): number => b - a)

    const deltaArray: number[] = new Array(nums.length + 1).fill(0)
    let operations: number = 0

    for (let i: number = 0, j = 0; i < nums.length; i++) {
        operations += deltaArray[i]

        while (j < queries.length && queries[j][0] === i) {
            heap.enqueue(queries[j][1])
            j++
        }

        while (operations < nums[i] && !heap.isEmpty() && heap.peek()! >= i) {
            operations += 1
            deltaArray[heap.dequeue()! + 1] -= 1
        }

        if (operations < nums[i]) {
            return -1
        }
    }

    return heap.size()
}
