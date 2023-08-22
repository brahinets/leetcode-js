import {convertToTitle} from '../script'

describe('168. Excel Sheet Column Title', (): void => {

    it('First order', (): void => {
        expect(convertToTitle(1))
            .toBe("A");
    });

    it('Second order', (): void => {
        expect(convertToTitle(28))
            .toBe("AB");
    });

    it('Edge order', (): void => {
        expect(convertToTitle(52))
            .toBe("AZ");
    });

    it('Big order', (): void => {
        expect(convertToTitle(701))
            .toBe("ZY");
    });

    it('Very big order', (): void => {
        expect(convertToTitle(2147483647))
            .toBe("FXSHRXW");
    });
})
