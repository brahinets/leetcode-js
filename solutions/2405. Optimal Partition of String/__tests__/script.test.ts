import {partitionString} from '../script'

describe('2405. Optimal Partition of String', (): void => {
    it('Different partitions', (): void => {
        expect(partitionString("abacaba"))
            .toBe(4);
    });
    it('Equal partitions', (): void => {
        expect(partitionString("ssssss"))
            .toBe(6);
    });
})
