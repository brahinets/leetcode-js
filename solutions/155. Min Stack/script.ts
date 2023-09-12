export {MinStack}

class MinStack {
    private readonly data: number[];

    constructor() {
        this.data = []
    }

    push(val: number): void {
        this.data.push(val)
    }

    pop(): void {
        this.data.pop()
    }

    top(): number {
        return this.data[this.data.length - 1]
    }

    getMin(): number {
        return Math.min(...this.data)
    }
}
