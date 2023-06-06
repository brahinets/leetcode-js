import {findCircleNum} from '../script'

describe('547. Number of Provinces', (): void => {
    it('No provinces', (): void => {
        expect(findCircleNum([])).toBe(0);
    });

    it('One small province', (): void => {
        expect(findCircleNum([
            [1, 1],
            [1, 1]
        ])).toBe(1);
    });

    it('One big province', (): void => {
        expect(findCircleNum([
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [0, 1, 1, 1],
            [1, 0, 1, 1]
        ])).toBe(1);
    });

    it('Two provinces', (): void => {
        expect(findCircleNum([
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 1]
        ])).toBe(2);
    });

    it('Three provinces', (): void => {
        expect(findCircleNum([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ])).toBe(3);
    });
});
