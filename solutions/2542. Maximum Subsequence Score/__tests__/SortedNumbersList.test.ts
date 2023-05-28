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

        list.removeAt(3);
        expect(list.toArray())
            .toStrictEqual([0, 1, 2]);

        list.removeAt(1);
        expect(list.toArray())
            .toStrictEqual([0, 2]);

        list.removeAt(0);
        expect(list.toArray())
            .toStrictEqual([2]);
    });
})