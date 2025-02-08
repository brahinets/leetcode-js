export {NumberContainers}

class NumberContainers {
    private readonly nums: Map<number, number>

    constructor() {
        this.nums = new Map<number, number>()
    }

    change(index: number, number: number): void {
        this.nums.set(index, number)
    }

    find(number: number): number {
        for (const [index, value] of [...this.nums].sort()) {
            if (value === number) {
                return index
            }
        }

        return -1
    }
}
