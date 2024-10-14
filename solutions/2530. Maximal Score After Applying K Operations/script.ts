export {maxKelements}

function maxKelements(nums: number[], k: number): number {
    let ans: number = 0
    const pq: MaxHeap = new MaxHeap()
    for (const num of nums) {
        pq.add(num)
    }

    while (k-- > 0) {
        const maxElement = pq.poll()

        if (maxElement === undefined) {
            break
        }

        ans += maxElement
        pq.add(Math.ceil(maxElement / 3))
    }

    return ans
}

class MaxHeap {
    private readonly heap: number[]

    constructor() {
        this.heap = []
    }

    private parent(i: number): number {
        return Math.floor((i - 1) / 2)
    }

    private leftChild(i: number): number {
        return 2 * i + 1
    }

    private rightChild(i: number): number {
        return 2 * i + 2
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    add(value: number): void {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    poll(): number | undefined {
        if (this.heap.length === 0) {
            return undefined
        }

        if (this.heap.length === 1) {
            return this.heap.pop()
        }

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()!
        this.heapifyDown(0)

        return max
    }

    private heapifyUp(i: number): void {
        while (i > 0 && this.heap[i] > this.heap[this.parent(i)]) {
            this.swap(i, this.parent(i))

            i = this.parent(i)
        }
    }

    private heapifyDown(i: number): void {
        const size = this.heap.length
        let maxIndex = i

        while (true) {
            const leftChild = this.leftChild(i)
            if (leftChild < size && this.heap[leftChild] > this.heap[maxIndex]) {
                maxIndex = leftChild
            }

            const rightChild = this.rightChild(i)
            if (rightChild < size && this.heap[rightChild] > this.heap[maxIndex]) {
                maxIndex = rightChild
            }

            if (maxIndex === i) {
                break
            }

            this.swap(i, maxIndex)
            i = maxIndex
        }
    }
}
