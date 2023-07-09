import {distributeCookies} from '../script'

describe('2305. Fair Distribution of Cookies', (): void => {
    it('By non equal number of cookies', (): void => {
        expect(distributeCookies([8, 15, 10, 20, 8], 2))
            .toBe(31);
    });

    it('By equal number of cookies', (): void => {
        expect(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3))
            .toBe(7);
    });
});

