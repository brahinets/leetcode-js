import {tallestBillboard} from '../script'

describe('956. Tallest Billboard', (): void => {

    it('Cannot build', (): void => {
        expect(tallestBillboard([1, 2]))
            .toBe(0);
    });

    it('Use some elements', (): void => {
        expect(tallestBillboard([1, 2, 3, 4, 5, 6]))
            .toBe(10);
    });

    it('Use all elements', (): void => {
        expect(tallestBillboard([1, 2, 3, 6]))
            .toBe(6);
    });
})
