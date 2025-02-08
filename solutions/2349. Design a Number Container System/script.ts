import {PriorityQueue} from "../../common/PriorityQueue"

export {NumberContainers}

const ascendingNumbersSorting: (a: number, b: number) => number = (a: number, b: number): number => a - b

class NumberContainers {
    private readonly numberToIndices: Map<number, PriorityQueue<number>>
    private readonly indexToNumbers: Map<number, number>

    constructor() {
        this.numberToIndices = new Map<number, PriorityQueue<number>>()
        this.indexToNumbers = new Map<number, number>()
    }

    public change(index: number, number: number): void {
        this.indexToNumbers.set(index, number)

        const numberPriorityQueue: PriorityQueue<number> = this.numberToIndices.get(number) ?? new PriorityQueue<number>(ascendingNumbersSorting)
        numberPriorityQueue.enqueue(index)

        this.numberToIndices.set(number, numberPriorityQueue)
    }

    public find(number: number): number {
        if (!this.numberToIndices.has(number)) {
            return -1
        }

        const minHeap: PriorityQueue<number> = this.numberToIndices.get(number)!
        while (!minHeap.isEmpty()) {
            const index: number = minHeap.peek()!

            if (this.indexToNumbers.get(index) == number) {
                return index
            }

            minHeap.dequeue()
        }

        return -1
    }
}
