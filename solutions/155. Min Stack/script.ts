export {MinStack}

class MinStack {
    private readonly data: number[]
    private min: number | undefined

    constructor() {
        this.data = []
    }

    push(val: number): void {
        this.data.push(val)

        if (this.min === undefined || val < this.min) {
            this.min = val
        }
    }

    pop(): void {
        this.data.pop()

        if (this.data.length > 0) {
            this.min = Math.min(...this.data)
        } else {
            this.min = undefined
        }
    }

    top(): number {
        return this.data[this.data.length - 1]
    }

    getMin(): number {
        if (this.min === undefined) {
            throw new Error("No data")
        }

        return this.min
    }
}
