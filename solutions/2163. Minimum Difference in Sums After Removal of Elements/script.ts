import {PriorityQueue} from '../../common/PriorityQueue'
import {arrayOfZeros} from "../../common/array-factories"

export {minimumDifference}

function minimumDifference(nums: number[]): number {
    const partitionSize = Math.floor(nums.length / 3)

    const leftSums = calculateLeftSums(nums, partitionSize)
    const rightSums = calculateRightSums(nums, partitionSize)

    let minDifference: number = Infinity
    for (let i: number = 0; i <= partitionSize; i++) {
        minDifference = Math.min(minDifference, leftSums[i] - rightSums[i])
    }

    return minDifference
}

function calculateLeftSums(nums: number[], partitionSize: number): number[] {
    const leftSums: number[] = arrayOfZeros(partitionSize + 1)

    let leftSum: number = 0
    const maxHeap = new PriorityQueue<number>((a: number, b: number): number => b - a)
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

    return leftSums
}

function calculateRightSums(nums: number[], partitionSize: number): number[] {
    const rightSums: number[] = arrayOfZeros(partitionSize + 1)

    let rightSum: number = 0
    const minHeap = new PriorityQueue<number>((a: number, b: number): number => a - b)
    for (let i = nums.length - 1; i >= partitionSize * 2; i--) {
        rightSum += nums[i]
        minHeap.enqueue(nums[i])
    }

    rightSums[partitionSize] = rightSum
    for (let i: number = partitionSize * 2 - 1; i >= partitionSize; i--) {
        rightSum += nums[i]
        minHeap.enqueue(nums[i])
        rightSum -= minHeap.dequeue()!
        rightSums[i - partitionSize] = rightSum
    }

    return rightSums
}
