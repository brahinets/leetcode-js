import {first, last} from "../../common/array-utils";

export {AllOne}

class AllOne {
    private count: Map<string, number>
    private pairs: Pair<number, string>[]

    constructor() {
        this.count = new Map<string, number>()
        this.pairs = []
    }

    inc(key: string): void {
        const oldCount: number | undefined = this.count.get(key)
        const newCount: number = (oldCount || 0) + 1

        this.count.set(key, newCount)
        this.updatePairs(key, oldCount, newCount)
    }

    dec(key: string): void {
        const oldCount: number | undefined = this.count.get(key)
        if (oldCount === undefined) {
            return
        }

        if (oldCount === 1) {
            this.count.delete(key)

            const index: number = this.getIndex(1, key)
            if (index !== -1) {
                this.pairs.splice(index, 1)
            }
        } else {
            const newCount: number = oldCount - 1

            this.count.set(key, newCount)
            this.updatePairs(key, oldCount, newCount)
        }
    }

    getMaxKey(): string {
        return this.pairs.length > 0 ? last(this.pairs)!.value : ""
    }

    getMinKey(): string {
        return this.pairs.length > 0 ? first(this.pairs)!.value : ""
    }

    private sortPairs(): void {
        this.pairs.sort((a: Pair<number, string>, b: Pair<number, string>): number => {
            if (a.key !== b.key) {
                return a.key - b.key
            }

            return a.value.localeCompare(b.value)
        })
    }

    private updatePairs(key: string, oldCount: number | undefined, newCount: number): void {
        if (oldCount !== undefined) {
            const index: number = this.getIndex(oldCount, key)
            if (index !== -1) {
                this.pairs.splice(index, 1)
            }
        }

        this.pairs.push(new Pair(newCount, key))
        this.sortPairs()
    }

    private getIndex(count: number, key: string) {
        return this.pairs.findIndex((p: Pair<number, string>): boolean => p.key === count && p.value === key)
    }
}

class Pair<T, U> {
    constructor(public key: T, public value: U) {
    }
}
