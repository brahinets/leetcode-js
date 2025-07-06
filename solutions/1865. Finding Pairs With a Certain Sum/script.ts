import {count} from "../../common/array-utils"

export {FindSumPairs}

class FindSumPairs {
    private readonly nums1: number[]
    private readonly nums2: number[]
    private count2: Map<number, number>

    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1
        this.nums2 = nums2
        this.count2 = count(nums2)
    }

    add(index: number, val: number): void {
        const oldVal: number = this.nums2[index]
        const newVal: number = oldVal + val

        this.count2.set(oldVal, this.count2.get(oldVal)! - 1)
        if (this.count2.get(oldVal) === 0) {
            this.count2.delete(oldVal)
        }

        this.count2.set(newVal, (this.count2.get(newVal) || 0) + 1)

        this.nums2[index] = newVal
    }

    count(tot: number): number {
        let result: number = 0

        for (const num1 of this.nums1) {
            const target: number = tot - num1

            result += this.count2.get(target) || 0
        }

        return result
    }
}
