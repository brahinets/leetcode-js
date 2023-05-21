import {shortestBridge} from '../script'

describe('934. Shortest Bridge', (): void => {
    it('No islands. Empty sea', (): void => {
        expect(shortestBridge([]))
            .toBe(0);
    });

    it('Small close island', (): void => {
        expect(shortestBridge([
            [0, 1],
            [1, 0]
        ])).toBe(1);
    });

    it('Small far island', (): void => {
        expect(shortestBridge([
            [0, 1, 0],
            [0, 0, 0],
            [0, 0, 1]
        ])).toBe(2);
    });

    it('Big close islands', (): void => {
        expect(shortestBridge([
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1]
        ])).toBe(1);
    });
    it('Big far islands', (): void => {
        expect(shortestBridge([
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0]
        ])).toBe(4);
    });
});
