import {addBinary} from '../script'

describe('67. Add Binary', (): void => {
    it('Different length', (): void => {
        expect(addBinary("11", "1")).toBe("100");
    });

    it('Same length', (): void => {
        expect(addBinary("1010", "1011")).toBe("10101");
    });
});