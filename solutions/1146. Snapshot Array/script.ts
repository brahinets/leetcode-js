export {SnapshotArray}

class SnapshotArray {
    private readonly deltas: Map<number, Map<number, number>>;
    private readonly length: number;
    private delta: Map<number, number>;

    constructor(length: number) {
        this.deltas = new Map<number, Map<number, number>>();
        this.delta = new Map<number, number>();
        this.length = length;
    }

    set(index: number, val: number): void {
        if(index > this.length) {
            throw new Error("Element index is out of bounds")
        }

        this.delta.set(index, val);
    }

    snap(): number {
        let snapId: number = -1;
        for (const id of this.deltas.keys()) {
            if (id > snapId) {
                snapId = id;
            }
        }

        this.deltas.set(snapId + 1, this.delta);
        this.delta = new Map<number, number>();

        return snapId + 1;
    }

    get(index: number, snapId: number): number {
        if(index > this.length) {
            throw new Error("Element index is out of bounds")
        }

        if (snapId > this.deltas.size) {
            throw new Error("Snap does not exist");
        }

        let result: number = 0;
        for (let i: number = 0; i <= snapId; i++) {
            const delta: Map<number, number> | undefined = this.deltas.get(i);
            if (delta === undefined) {
                throw new Error("Snap does not exist");
            }

            result = this.applyDelta(result, index, delta)
        }

        return result;
    }

    private applyDelta(result: number, index: number, map: Map<number, number>): number {
        for (const kv of map) {
            if (index === kv[0]) {
                result = kv[1];
            }
        }

        return result;
    }
}
