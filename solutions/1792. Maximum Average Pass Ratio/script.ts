export {maxAverageRatio}

function maxAverageRatio(classes: number[][], extraStudents: number): number {
    const comparator = (a: [number, number], b: [number, number]): number => {
        const [x, y]: [number, number] = a
        const [u, v]: [number, number] = b
        return (u + 1) / (v + 1) - u / v - (x + 1) / (y + 1) + x / y
    }

    const pq: PriorityQueue<[number, number]> = new PriorityQueue<[number, number]>(comparator)

    for (const [pass, total] of classes) {
        pq.enqueue([pass, total])
    }

    while (extraStudents > 0) {
        const [pass, total]: [number, number] = pq.dequeue() as [number, number]
        pq.enqueue([pass + 1, total + 1])
        extraStudents--
    }

    let sum: number = 0
    while (!pq.isEmpty()) {
        const [pass, total]: [number, number] = pq.dequeue() as [number, number]
        sum += pass / total
    }

    return sum / classes.length
}

type CompareFn<T> = (a: T, b: T) => number

class PriorityQueue<T> {
    private heap: T[] = []
    private readonly compare: CompareFn<T>

    constructor(compareFn: CompareFn<T>) {
        this.compare = compareFn
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    private leftChild(index: number): number {
        return 2 * index + 1
    }

    private rightChild(index: number): number {
        return 2 * index + 2
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    private siftUp(index: number): void {
        while (index > 0) {
            const parentIndex = this.parent(index)
            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) {
                break
            }
            this.swap(index, parentIndex)
            index = parentIndex
        }
    }

    private siftDown(index: number): void {
        const size = this.heap.length
        while (this.leftChild(index) < size) {
            let smallest = this.leftChild(index)
            const right = this.rightChild(index)
            if (right < size && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right
            }
            if (this.compare(this.heap[index], this.heap[smallest]) <= 0) {
                break
            }
            this.swap(index, smallest)
            index = smallest
        }
    }

    public enqueue(item: T): void {
        this.heap.push(item)
        this.siftUp(this.heap.length - 1)
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined
        }
        const root = this.heap[0]
        const last = this.heap.pop()
        if (this.heap.length > 0 && last !== undefined) {
            this.heap[0] = last
            this.siftDown(0)
        }
        return root
    }

    public peek(): T | undefined {
        return this.heap[0]
    }

    public isEmpty(): boolean {
        return this.heap.length === 0
    }

    public size(): number {
        return this.heap.length
    }
}
