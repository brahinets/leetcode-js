export {MyCircularDeque}

class MyCircularDeque {
    private readonly data: number[]
    private readonly size: number

    constructor(k: number) {
        this.data = []
        this.size = k
    }

    insertFront(value: number): boolean {
        if (this.isFull()) {
            return false
        }

        this.data.unshift(value)
        return true
    }

    insertLast(value: number): boolean {
        if (this.isFull()) {
            return false
        }

        this.data.push(value)
        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) {
            return false
        }

        this.data.shift()
        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) {
            return false
        }

        this.data.pop()
        return true
    }

    getFront(): number {
        if (this.isEmpty()) {
            return -1
        }

        return this.data[0]
    }

    getRear(): number {
        if (this.isEmpty()) {
            return -1
        }

        return this.data[this.data.length - 1]
    }

    isEmpty(): boolean {
        return this.data.length === 0
    }

    isFull(): boolean {
        return this.data.length === this.size
    }
}
