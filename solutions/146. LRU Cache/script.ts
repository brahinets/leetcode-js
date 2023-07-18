export {LRUCache}

class LRUCache {
    private readonly capacity: number;
    private cache: Map<number, number>;
    private usageLog: number[];

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, number>();
        this.usageLog = [];
    }

    get(key: number): number {
        const number: number | undefined = this.cache.get(key);

        if (number === undefined) {
            return -1;
        } else {
            this.refreshUsageLog(key);
            return number;
        }
    }

    put(key: number, value: number): void {
        if (this.cache.size >= this.capacity && !this.cache.has(key)) {
            const lastUsedKey: number | undefined = this.findLeastRecentlyUsedKey();
            if (lastUsedKey !== undefined) {
                this.cache.delete(lastUsedKey)
            }
        }

        this.cache.set(key, value);
        this.refreshUsageLog(key);
    }

    private findLeastRecentlyUsedKey(): number | undefined {
        return this.usageLog.shift();
    }

    private refreshUsageLog(key: number): void {
        let index: number;
        while ((index = this.usageLog.indexOf(key)) !== -1) {
            this.usageLog.splice(index, 1)
        }

        this.usageLog.push(key);
    }
}
