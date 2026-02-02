export { minimumCost }

import { PriorityQueue } from '../../common/PriorityQueue'
import { arrayOf } from '../../common/array-factories'

type ValueWithIndex = [number, number]

function minimumCost(nums: number[], k: number, dist: number): number {
    const n: number = nums.length
    const elementsToSelect: number = k - 1

    const smallestMaxHeap: PriorityQueue<ValueWithIndex> = new PriorityQueue<ValueWithIndex>((a: ValueWithIndex, b: ValueWithIndex): number => b[0] - a[0] || b[1] - a[1])
    const remainingMinHeap: PriorityQueue<ValueWithIndex> = new PriorityQueue<ValueWithIndex>((a: ValueWithIndex, b: ValueWithIndex): number => a[0] - b[0] || a[1] - b[1])

    const inSmallest: boolean[] = arrayOf(false, n)
    const removed: boolean[] = arrayOf(false, n)
    let smallestSize: number = 0

    let smallestElementsSum: number = 0

    const initialWindowEnd: number = Math.min(1 + dist, n - 1)
    for (let i: number = 1; i <= initialWindowEnd; i++) {
        addElementToWindow(nums[i], i)
    }

    let minimumSubarrayCost: number = smallestElementsSum

    for (let windowRight: number = 2 + dist; windowRight < n; windowRight++) {
        const exitingIndex: number = windowRight - dist - 1

        removeElementFromWindow(nums[exitingIndex], exitingIndex)
        addElementToWindow(nums[windowRight], windowRight)

        if (smallestSize === elementsToSelect) {
            minimumSubarrayCost = Math.min(minimumSubarrayCost, smallestElementsSum)
        }
    }

    return nums[0] + minimumSubarrayCost

    function addElementToWindow(value: number, index: number): void {
        pruneSmallestHeap()

        if (smallestSize < elementsToSelect) {
            smallestMaxHeap.enqueue([value, index])
            inSmallest[index] = true
            smallestSize += 1
            smallestElementsSum += value
        } else {
            const largestOfSmallest: ValueWithIndex = smallestMaxHeap.peek()!

            if (value < largestOfSmallest[0]) {
                smallestMaxHeap.dequeue()
                if (inSmallest[largestOfSmallest[1]]) {
                    inSmallest[largestOfSmallest[1]] = false
                    smallestSize -= 1
                }
                smallestElementsSum -= largestOfSmallest[0]
                remainingMinHeap.enqueue(largestOfSmallest)

                smallestMaxHeap.enqueue([value, index])
                inSmallest[index] = true
                smallestSize += 1
                smallestElementsSum += value
            } else {
                remainingMinHeap.enqueue([value, index])
            }
        }
    }

    function removeElementFromWindow(value: number, index: number): void {
        removed[index] = true

        if (inSmallest[index]) {
            inSmallest[index] = false
            smallestSize -= 1
            smallestElementsSum -= value
        }

        rebalanceHeaps()
    }

    function rebalanceHeaps(): void {
        pruneSmallestHeap()
        pruneRemainingHeap()

        while (smallestSize < elementsToSelect && !remainingMinHeap.isEmpty()) {
            pruneRemainingHeap()

            if (remainingMinHeap.isEmpty()) {
                break
            }

            const promoted: ValueWithIndex = remainingMinHeap.dequeue()!

            smallestMaxHeap.enqueue(promoted)
            inSmallest[promoted[1]] = true
            smallestSize += 1
            smallestElementsSum += promoted[0]
        }
    }

    function pruneSmallestHeap(): void {
        while (!smallestMaxHeap.isEmpty()) {
            const top: ValueWithIndex = smallestMaxHeap.peek()!

            if (removed[top[1]]) {
                smallestMaxHeap.dequeue()
            } else {
                break
            }
        }
    }

    function pruneRemainingHeap(): void {
        while (!remainingMinHeap.isEmpty()) {
            const top: ValueWithIndex = remainingMinHeap.peek()!

            if (removed[top[1]]) {
                remainingMinHeap.dequeue()
            } else {
                break
            }
        }
    }
}
