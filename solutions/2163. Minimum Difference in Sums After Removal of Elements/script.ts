import {PriorityQueue} from '../../common/PriorityQueue'

export {minimumDifference}

function minimumDifference(nums: number[]): number {
    const totalLength: number = nums.length
    const partitionSize: number = Math.floor(totalLength / 3)

    const leftSums: number[] = new Array(partitionSize + 1).fill(0)
    let leftSum: number = 0

    const maxHeap: PriorityQueue<number> = new PriorityQueue<number>((a: number, b: number): number => b - a)
    for (let i: number = 0; i < partitionSize; i++) {
        leftSum += nums[i]
        maxHeap.enqueue(nums[i])
    }

    leftSums[0] = leftSum
    for (let i: number = partitionSize; i < partitionSize * 2; i++) {
        leftSum += nums[i]
        maxHeap.enqueue(nums[i])
        leftSum -= maxHeap.dequeue()!
        leftSums[i - (partitionSize - 1)] = leftSum
    }

    let rightSum: number = 0
    const minHeap: PriorityQueue<number> = new PriorityQueue<number>((a: number, b: number): number => a - b)
    for (let i: number = totalLength - 1; i >= partitionSize * 2; i--) {
        rightSum += nums[i]
        minHeap.enqueue(nums[i])
    }

    let minDifference: number = leftSums[partitionSize] - rightSum
    for (let i: number = partitionSize * 2 - 1; i >= partitionSize; i--) {
        rightSum += nums[i]
        minHeap.enqueue(nums[i])
        rightSum -= minHeap.dequeue()!
        minDifference = Math.min(minDifference, leftSums[i - partitionSize] - rightSum)
    }

    return minDifference
}
