export {SnapshotArray}

class SnapshotArray {
    private readonly deltas: Map<number, Map<number, number>>
    private readonly length: number
    private delta: Map<number, number>
    private snaps: number

    constructor(length: number) {
        this.deltas = new Map<number, Map<number, number>>()
        this.delta = new Map<number, number>()
        this.length = length
        this.snaps = -1
    }

    set(index: number, val: number): void {
        if (index > this.length) {
            throw new Error("Element index is out of bounds")
        }

        this.delta.set(index, val)
    }

    snap(): number {
        if (this.delta.size > 0) {
            this.deltas.set(this.snaps + 1, this.delta)
            this.delta = new Map<number, number>()
        }

        return ++this.snaps
    }

    get(index: number, snapId: number): number {
        if (index > this.length) {
            throw new Error("Element index is out of bounds")
        }

        if (snapId > this.snaps) {
            throw new Error("Snap does not exist")
        }

        let result: number = 0
        for (let i: number = 0; i <= snapId; i++) {
            const delta: Map<number, number> | undefined = this.deltas.get(i)
            if (delta === undefined) {
                continue
            }

            result = this.applyDelta(result, index, delta)
        }

        return result
    }

    private applyDelta(result: number, index: number, map: Map<number, number>): number {
        const delta: number | undefined = map.get(index)
        return delta === undefined ? result : delta
    }
}
