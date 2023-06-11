import {SnapshotArray} from "../script";

describe('1146. Snapshot Array', (): void => {
    it('Test first snapshot', (): void => {
        const snapshotArr: SnapshotArray = new SnapshotArray(3);
        snapshotArr.set(0, 5);
        snapshotArr.snap();

        const snap0: number = snapshotArr.get(0, 0);
        expect(snap0).toBe(5);
    });

    it('Test first index after modification', (): void => {
        const snapshotArr: SnapshotArray = new SnapshotArray(3);
        snapshotArr.set(0, 5);
        snapshotArr.snap();
        snapshotArr.set(0, 6);

        const snap: number = snapshotArr.get(0, 0);
        expect(snap).toBe(5);
    });

    it('Test another snapshot', (): void => {
        const snapshotArr: SnapshotArray = new SnapshotArray(3);
        snapshotArr.set(0, 5);
        snapshotArr.snap();
        snapshotArr.set(0, 6);
        snapshotArr.snap();

        const snap0: number = snapshotArr.get(0, 1);
        expect(snap0).toBe(6);
    });

    it('Error for non existing snap', (): void => {
        const snapshotArr: SnapshotArray = new SnapshotArray(3);

        expect(() => snapshotArr.get(0, 1))
            .toThrowError("Snap does not exist");
    });
})
