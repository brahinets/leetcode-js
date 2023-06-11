export {SnapshotArray}

class SnapshotArray {
    private readonly snaps: Map<number, number[]>;
    private readonly data: number[];

    constructor(length: number) {
        this.snaps = new Map<number, number[]>();
        this.data = new Array(length).fill(0);
    }

    set(index: number, val: number): void {
        this.data[index] = val;
    }

    snap(): number {
        let snapId: number = -1;
        for (const id of this.snaps.keys()) {
            if (id > snapId) {
                snapId = id;
            }
        }

        this.snaps.set(snapId + 1, Array.of(...this.data));

        return snapId + 1;
    }

    get(index: number, snapId: number): number {
        let data: number[] | undefined = this.snaps.get(snapId);

        if (data === undefined) {
            data = this.data;
        }

        return data[index];
    }
}
