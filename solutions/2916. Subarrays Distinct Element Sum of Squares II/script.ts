export { sumCounts }

const MODULO: number = 1_000_000_007

function sumCounts(nums: number[]): number {
    const tree: SquaredDistinctCountTree = new SquaredDistinctCountTree(nums.length)
    const lastIndexByValue: Map<number, number> = new Map<number, number>()
    let total: number = 0

    for (let index: number = 0; index < nums.length; index++) {
        const previousIndex: number = lastIndexByValue.get(nums[index]) ?? -1

        tree.addToRange(previousIndex + 1, index, 1)
        lastIndexByValue.set(nums[index], index)
        total = (total + tree.sumOfSquares()) % MODULO
    }

    return total
}

class SquaredDistinctCountTree {
    private readonly size: number
    private readonly sums: number[]
    private readonly sumsOfSquares: number[]
    private readonly pendingAdditions: number[]

    constructor(size: number) {
        this.size = size
        this.sums = new Array<number>(4 * size).fill(0)
        this.sumsOfSquares = new Array<number>(4 * size).fill(0)
        this.pendingAdditions = new Array<number>(4 * size).fill(0)
    }

    addToRange(left: number, right: number, value: number): void {
        this.update(1, 0, this.size - 1, left, right, value)
    }

    sumOfSquares(): number {
        return this.sumsOfSquares[1]
    }

    private update(nodeIndex: number, nodeLeft: number, nodeRight: number, left: number, right: number, value: number): void {
        if (right < nodeLeft || nodeRight < left) {
            return
        }

        if (left <= nodeLeft && nodeRight <= right) {
            this.applyAddition(nodeIndex, nodeRight - nodeLeft + 1, value)

            return
        }

        const middle: number = Math.floor((nodeLeft + nodeRight) / 2)

        this.pushDown(nodeIndex, nodeLeft, middle, nodeRight)
        this.update(2 * nodeIndex, nodeLeft, middle, left, right, value)
        this.update(2 * nodeIndex + 1, middle + 1, nodeRight, left, right, value)
        this.pullUp(nodeIndex)
    }

    private applyAddition(nodeIndex: number, length: number, value: number): void {
        this.sumsOfSquares[nodeIndex] += 2 * value * this.sums[nodeIndex] + length * value * value
        this.sums[nodeIndex] += length * value
        this.pendingAdditions[nodeIndex] += value
    }

    private pushDown(nodeIndex: number, nodeLeft: number, middle: number, nodeRight: number): void {
        const pendingAddition: number = this.pendingAdditions[nodeIndex]

        this.applyAddition(2 * nodeIndex, middle - nodeLeft + 1, pendingAddition)
        this.applyAddition(2 * nodeIndex + 1, nodeRight - middle, pendingAddition)
        this.pendingAdditions[nodeIndex] = 0
    }

    private pullUp(nodeIndex: number): void {
        this.sums[nodeIndex] = this.sums[2 * nodeIndex] + this.sums[2 * nodeIndex + 1]
        this.sumsOfSquares[nodeIndex] = this.sumsOfSquares[2 * nodeIndex] + this.sumsOfSquares[2 * nodeIndex + 1]
    }
}
