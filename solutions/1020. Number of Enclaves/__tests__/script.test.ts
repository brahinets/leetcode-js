import {ISLAND, numEnclaves, WATER} from '../script'

describe('1020. Number of Enclaves', (): void => {
    it('No enclave. Empty sea', (): void => {
        expect(numEnclaves([])).toBe(0);
    });

    it('No enclave', (): void => {
        expect(numEnclaves([
            [WATER, ISLAND, ISLAND, WATER],
            [WATER, WATER, ISLAND, WATER],
            [WATER, WATER, ISLAND, WATER],
            [WATER, WATER, WATER, WATER]
        ])).toBe(0);
    });

    it('Three enclave', (): void => {
        expect(numEnclaves([
            [WATER, WATER, WATER, WATER],
            [ISLAND, WATER, ISLAND, WATER],
            [WATER, ISLAND, ISLAND, WATER],
            [WATER, WATER, WATER, WATER]
        ])).toBe(3);
    });
});