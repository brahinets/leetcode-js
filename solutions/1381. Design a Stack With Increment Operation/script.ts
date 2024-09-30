export {CustomStack}

class CustomStack {
    private readonly stack: number[]
    private readonly maxSize: number

    constructor(maxSize: number) {
        this.stack = []
        this.maxSize = maxSize
    }

    push(x: number): void {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x)
        }
    }

    pop(): number {
        if (this.stack.length === 0) {
            return -1
        }

        return this.stack.pop()!
    }

    increment(k: number, val: number): void {
        for (let i = 0; i < Math.min(k, this.stack.length); i++) {
            this.stack[i] += val
        }
    }
}
