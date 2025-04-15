import {arrayOfZeros} from "../../common/array-factories"

export {goodTriplets}

function goodTriplets(nums1: number[], nums2: number[]): number {
    const pos2: number[] = []
    for (let i: number = 0; i < nums1.length; i++) {
        pos2[nums2[i]] = i
    }

    const reversedIndexMapping: number[] = []
    for (let i: number = 0; i < nums1.length; i++) {
        reversedIndexMapping[pos2[nums1[i]]] = i
    }

    const tree: FenwickTree = new FenwickTree(nums1.length)
    let res: number = 0

    for (let value: number = 0; value < nums1.length; value++) {
        const pos: number = reversedIndexMapping[value]
        const left: number = tree.query(pos)

        tree.update(pos, 1)

        const right: number = nums1.length - 1 - pos - (value - left)

        res += left * right
    }

    return res
}

class FenwickTree {
    private readonly tree: number[]

    constructor(size: number) {
        this.tree = arrayOfZeros(size + 1)
    }

    update(index: number, delta: number): void {
        index++

        while (index < this.tree.length) {
            this.tree[index] += delta
            index += index & -index
        }
    }

    query(index: number): number {
        index++
        let res: number = 0

        while (index > 0) {
            res += this.tree[index]
            index -= index & -index
        }

        return res
    }
}
