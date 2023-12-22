import {SnapshotArray} from "../script"

describe('1146. Snapshot Array', (): void => {
    it('Test first snapshot', (): void => {
        const array: SnapshotArray = new SnapshotArray(3)
        array.set(0, 5)
        array.snap()

        const snap: number = array.get(0, 0)
        expect(snap).toBe(5)
    })

    it('Test first index after modification', (): void => {
        const array: SnapshotArray = new SnapshotArray(3)
        array.set(0, 5)
        array.snap()
        array.set(0, 6)

        const snap: number = array.get(0, 0)
        expect(snap).toBe(5)
    })

    it('Test empty snapshots', (): void => {
        const array: SnapshotArray = new SnapshotArray(3)
        array.set(0, 5)
        array.snap()
        array.snap()
        array.snap()
        array.snap()
        array.snap()
        array.snap()

        const snap: number = array.get(0, 5)
        expect(snap).toBe(5)
    })

    it('Test another snapshot', (): void => {
        const array: SnapshotArray = new SnapshotArray(3)
        array.set(0, 5)
        array.snap()
        array.set(0, 6)
        array.snap()

        const snap: number = array.get(0, 1)
        expect(snap).toBe(6)
    })

    it('Error for non existing snap', (): void => {
        const array: SnapshotArray = new SnapshotArray(3)

        expect(() => array.get(0, 1))
            .toThrow("Snap does not exist")
    })

    it('Error for non existing index set', (): void => {
        const array: SnapshotArray = new SnapshotArray(3)

        expect(() => array.set(4, 1))
            .toThrow("Element index is out of bounds")
    })

    it('Error for non existing index get', (): void => {
        const array: SnapshotArray = new SnapshotArray(3)

        expect(() => array.get(4, 1))
            .toThrow("Element index is out of bounds")
    })
})
