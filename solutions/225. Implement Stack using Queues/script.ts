export {MyStack}

class MyStack {
    private readonly data: number[]

    constructor() {
        this.data = []
    }

    push(x: number): void {
        this.data.push(x)
    }

    pop(): number {
        const value: number | undefined = this.data.splice(this.data.length - 1)[0]

        if (value === undefined) {
            throw new Error("Illegal state")
        }

        return value
    }

    top(): number {
        const value: number | undefined = this.data[this.data.length - 1]

        if (value === undefined) {
            throw new Error("Illegal state")
        }

        return value
    }

    empty(): boolean {
        return this.data.length === 0
    }
}
