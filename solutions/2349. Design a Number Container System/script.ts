export {NumberContainers}

class NumberContainers {
    private indexToNumber: Map<number, number>
    private numberToIndices: Map<number, MinHeap>

    constructor() {
        this.indexToNumber = new Map<number, number>()
        this.numberToIndices = new Map<number, MinHeap>()
    }

    change(index: number, number: number): void {
        if (this.indexToNumber.has(index)) {
            const oldNumber: number = this.indexToNumber.get(index)!

            if (this.numberToIndices.has(oldNumber)) {
                this.numberToIndices.get(oldNumber)!.remove(index)
            }
        }

        this.indexToNumber.set(index, number)
        if (!this.numberToIndices.has(number)) {
            this.numberToIndices.set(number, new MinHeap())
        }
        this.numberToIndices.get(number)!.insert(index)
    }

    find(number: number): number {
        if (!this.numberToIndices.has(number) || this.numberToIndices.get(number)!.isEmpty()) {
            return -1
        }

        return this.numberToIndices.get(number)!.top()
    }
}

class MinHeap {
    private heap: number[]
    private indexSet: Set<number>

    constructor() {
        this.heap = []
        this.indexSet = new Set<number>()
    }

    insert(value: number): void {
        if (!this.indexSet.has(value)) {
            this.indexSet.add(value)
            this.heap.push(value)
            this.heapifyUp()
        }
    }

    remove(value: number): void {
        if (this.indexSet.has(value)) {
            this.indexSet.delete(value)
            this.heap = this.heap.filter((v: number): boolean => this.indexSet.has(v))
            this.heapifyDown()
        }
    }

    top(): number {
        while (this.heap.length > 0 && !this.indexSet.has(this.heap[0])) {
            this.heap.shift()
        }
        return this.heap.length > 0 ? this.heap[0] : -1
    }

    isEmpty(): boolean {
        return this.heap.length === 0 || this.indexSet.size === 0
    }

    private heapifyUp(): void {
        this.heap.sort((a: number, b: number): number => a - b)
    }

    private heapifyDown(): void {
        this.heap.sort((a: number, b: number): number => a - b)
    }
}

