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
        if (snapId > this.deltas.size) {
            throw new Error("Snap does not exist");
        }

        const data: number[] = new Array(this.length).fill(0);

        for (let i: number = 0; i <= snapId; i++) {
            const delta: Map<number, number> | undefined = this.deltas.get(i);
            if (delta === undefined) {
                throw new Error("Snap does not exist");
            }

            this.applyDelta(data, delta)
        }

        if(this.deltas.size === snapId) {
            this.applyDelta(data, this.delta)
        }

        return data[index];
    }

    private applyDelta(data: number[], map: Map<number, number>): void {
        for (const kv of map) {
            const index: number = kv[0];
            const value: number = kv[1];
            data[index] = value;
        }
    }
}
