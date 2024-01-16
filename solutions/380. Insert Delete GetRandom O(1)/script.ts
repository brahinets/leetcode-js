export {RandomizedSet}

class RandomizedSet {
    private readonly values: Set<number>

    constructor() {
        this.values = new Set<number>()
    }

    insert(val: number): boolean {
        if (this.values.has(val)) {
            return false
        } else {
            this.values.add(val)
            return true
        }
    }

    remove(val: number): boolean {
        return this.values.delete(val)
    }

    getRandom(): number {
        const index: number = Math.floor(Math.random() * this.values.size)
        return Array.from(this.values)[index]
    }
}
