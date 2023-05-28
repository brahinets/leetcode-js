import {SortedNumbersList} from "../SortedNumbersList";

describe('Sorted Numbers List', (): void => {
    it('Initial list is empty', (): void => {
        const list: SortedNumbersList = new SortedNumbersList();

        expect(list.toArray())
            .toStrictEqual([]);
    });

    it('Insert one', (): void => {
        const list: SortedNumbersList = new SortedNumbersList();
        list.add(1);

        expect(list.toArray())
            .toStrictEqual([1]);
    });

    it('Insertion in different positions', (): void => {
        const list: SortedNumbersList = new SortedNumbersList();

        list.add(1);
        expect(list.toArray())
            .toStrictEqual([1]);

        list.add(0);
        expect(list.toArray())
            .toStrictEqual([0, 1]);

        list.add(3);
        expect(list.toArray())
            .toStrictEqual([0, 1, 3]);

        list.add(2);
        expect(list.toArray())
            .toStrictEqual([0, 1, 2, 3]);
    });

    it('Removal of the last', (): void => {
        const list: SortedNumbersList = new SortedNumbersList();
        list.add(1);

        expect(list.toArray())
            .toStrictEqual([1]);

        list.removeAt(0);
        expect(list.toArray())
            .toStrictEqual([]);
    });

    it('Removal of different positions', (): void => {
        const list: SortedNumbersList = new SortedNumbersList();
        list.add(1);
        list.add(0);
        list.add(3);
        list.add(2);
        expect(list.toArray())
            .toStrictEqual([0, 1, 2, 3]);

        let removed: number | null;

        removed = list.removeAt(3);
        expect(removed)
            .toBe(3);
        expect(list.toArray())
            .toStrictEqual([0, 1, 2]);

        removed = list.removeAt(1);
        expect(removed)
            .toBe(1);
        expect(list.toArray())
            .toStrictEqual([0, 2]);

        removed = list.removeAt(0);
        expect(removed)
            .toBe(0);
        expect(list.toArray())
            .toStrictEqual([2]);
    });

    it('Removal of non existing should fail', (): void => {
        const list: SortedNumbersList = new SortedNumbersList();

        expect(() => list.removeAt(0))
            .toThrowError("Index Out Of Bound");
    });
})