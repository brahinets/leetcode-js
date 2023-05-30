export {MyHashSet}

class MyHashSet {
    private data:Map<number, boolean>;
    constructor() {
        this.data = new Map<number, boolean>();
    }

    add(key: number): void {
        this.data.set(key, true);
    }

    remove(key: number): void {
        this.data.delete(key);
    }

    contains(key: number): boolean {
        return this.data.has(key);
    }
}