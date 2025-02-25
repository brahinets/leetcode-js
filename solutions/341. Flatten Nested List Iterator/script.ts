export {NestedIterator, NestedInteger}

class NestedIterator {
    private readonly stack: number[] = []

    constructor(nestedList: NestedInteger[]) {
        this.initialise(nestedList)
    }

    initialise(nestedList: NestedInteger[]) {
        let n: NestedInteger | undefined
        while (n = nestedList.pop()) {
            if (n.isInteger()) {
                this.stack.push(n.getInteger())
            } else {
                this.initialise(n.getList())
            }
        }
    }

    hasNext(): boolean {
        return this.stack.length > 0
    }

    next(): number {
        return this.stack.pop()!
    }
}

class NestedInteger {
    private readonly value: number | NestedInteger[]

    constructor(value: number | NestedInteger[]) {
        this.value = value
    }

    isInteger(): boolean {
        return typeof this.value === 'number'
    }

    getInteger(): number {
        return this.value as number
    }

    getList(): NestedInteger[] {
        return this.value as NestedInteger[]
    }
}
