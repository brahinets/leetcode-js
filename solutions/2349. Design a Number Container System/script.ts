export {NumberContainers}

class NumberContainers {
    private indexToNumber: Map<number, number>
    private numberToIndices: Map<number, Set<number>>

    constructor() {
        this.indexToNumber = new Map<number, number>()
        this.numberToIndices = new Map<number, Set<number>>()
    }

    change(index: number, number: number): void {
        if (this.indexToNumber.has(index)) {
            const oldNumber: number = this.indexToNumber.get(index)!

            if (this.numberToIndices.has(oldNumber)) {
                this.numberToIndices.get(oldNumber)!.delete(index)

                if (this.numberToIndices.get(oldNumber)!.size === 0) {
                    this.numberToIndices.delete(oldNumber)
                }
            }
        }

        this.indexToNumber.set(index, number)
        if (!this.numberToIndices.has(number)) {
            this.numberToIndices.set(number, new Set<number>())
        }
        this.numberToIndices.get(number)!.add(index)
    }

    find(number: number): number {
        if (!this.numberToIndices.has(number) || this.numberToIndices.get(number)!.size === 0) {
            return -1
        }

        return Math.min(...this.numberToIndices.get(number)!)
    }
}
