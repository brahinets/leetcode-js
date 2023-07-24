import {myPow} from '../script'

describe('50. Pow(x, n)', (): void => {
    it('Integer in positive power', (): void => {
        expect(myPow(2.00000, 10))
            .toBeCloseTo(1024.00000, 5);
    });

    it('Float in positive power', (): void => {
        expect(myPow(2.10000, 3))
            .toBeCloseTo(9.26100, 5);
    });

    it('Integer in negative power', (): void => {
        expect(myPow(2.00000, -2))
            .toBeCloseTo(0.25000, 5);
    });

    it('Float in negative power', (): void => {
        expect(myPow(2.10000, -3))
            .toBeCloseTo(0.10798, 5);
    });
})
