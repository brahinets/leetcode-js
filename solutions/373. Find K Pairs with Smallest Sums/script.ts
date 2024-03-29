export {kSmallestPairs}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const topPairs: PriorityHeap = new PriorityHeap(k)

    for (let i: number = 0; i < Math.min(k, nums1.length); i++) {
        for (let j: number = 0; j < Math.min(k, nums2.length); j++) {
            topPairs.add(nums1[i], nums2[j])
        }
    }

    return topPairs.data.map((pair: number[]): number[] => [pair[0], pair[1]])
}

class PriorityHeap {
    data: number[][]
    limit: number
    max: number | undefined
    maxIndex: number | undefined

    constructor(limit: number) {
        this.data = []
        this.limit = limit
        this.max = undefined
    }

    add(p1: number, p2: number): void {
        const sum: number = p1 + p2

        if (this.data.length < this.limit) {
            this.data.push([p1, p2, sum])

            if (!this.max || sum > this.max) {
                this.max = sum
                this.maxIndex = this.data.length - 1
            }
        } else {
            if (sum < this.max!) {
                this.data[this.maxIndex!] = [p1, p2, sum]
                const [newMax, nexMaxIndex] = findMaxIndex(this.data)
                this.max = newMax
                this.maxIndex = nexMaxIndex
            }
        }
    }
}

function findMaxIndex(data: number[][]): number[] {
    let max: number = data[0][2]
    let maxIndex: number = 0
    for (let i: number = 1; i < data.length; i++) {
        const pairSum: number = data[i][2]

        if (pairSum > max) {
            max = pairSum
            maxIndex = i
        }
    }

    return [max, maxIndex]
}
