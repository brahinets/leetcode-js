export {MyHashMap}

class MyHashMap {
    private readonly data: Array<number | undefined>

    constructor() {
        this.data = []
    }

    put(key: number, value: number): void {
        this.data[key] = value
    }

    get(key: number): number {
        return this.data[key] ?? -1
    }

    remove(key: number): void {
        this.data[key] = undefined
    }
}
