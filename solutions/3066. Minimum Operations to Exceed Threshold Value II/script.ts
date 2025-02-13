import {PriorityQueue} from "../../common/PriorityQueue"

export {minOperations}

function minOperations(nums: number[], k: number): number {
    const minHeap: PriorityQueue<number> = new PriorityQueue<number>((a: number, b: number): number => a - b)
    nums.forEach((num: number): void => minHeap.enqueue(num))

    let numOperations: number = 0
    while (minHeap.peek()! < k) {
        const x: number = minHeap.dequeue()!
        const y: number = minHeap.dequeue()!

        minHeap.enqueue(Math.min(x, y) * 2 + Math.max(x, y))

        numOperations++
    }
    return numOperations
}
