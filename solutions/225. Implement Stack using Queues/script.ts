export {MyStack}

class MyStack {
    private readonly queue: HomebrewQueue

    constructor() {
        this.queue = new HomebrewQueue()
    }

    push(x: number): void {
        const rotation: number = this.queue.size()

        this.queue.push(x)

        for (let i: number = 0; i < rotation; i++) {
            this.queue.push(this.queue.pop())
        }
    }

    pop(): number {
        return this.queue.pop()
    }

    top(): number {
        return this.queue.peek()
    }

    empty(): boolean {
        return this.queue.isEmpty()
    }
}

class HomebrewQueue {
    queue: number[]

    constructor() {
        this.queue = []
    }

    push(n: number): void {
        this.queue.push(n)
    }

    peek(): number {
        const value: number | undefined = this.queue[0]

        if (value === undefined) {
            throw new Error("Illegal state")
        }

        return value
    }

    pop(): number {
        const top: number = this.peek()
        this.queue.shift()
        return top
    }

    size(): number {
        return this.queue.length
    }

    isEmpty(): boolean {
        return this.queue.length == 0
    }
}
