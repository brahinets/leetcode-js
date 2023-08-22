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

    it('Big order', (): void => {
        expect(convertToTitle(701))
            .toBe("ZY");
    });
})
