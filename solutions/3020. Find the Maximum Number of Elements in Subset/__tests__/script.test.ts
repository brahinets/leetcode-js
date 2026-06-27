import { maximumLength } from "../script";

describe("3020. Find the Maximum Number of Elements in Subset", (): void => {
    it("selects a pair around a square in a mixed array", (): void => {
        const numbers: number[] = [5, 4, 1, 2, 2];

        const result: number = maximumLength(numbers);

        expect(result).toBe(3);
    });

    it("falls back to a single element when no pair can be formed", (): void => {
        const numbers: number[] = [1, 3, 2, 4];

        const result: number = maximumLength(numbers);

        expect(result).toBe(1);
    });

    it("extends chain through multiple squarings", (): void => {
        const numbers: number[] = [2, 4, 16, 4, 2];

        const result: number = maximumLength(numbers);

        expect(result).toBe(5);
    });

    it("uses all ones when count is odd", (): void => {
        const numbers: number[] = [1, 1, 1];

        const result: number = maximumLength(numbers);

        expect(result).toBe(3);
    });

    it("drops one element when ones count is even", (): void => {
        const numbers: number[] = [1, 1];

        const result: number = maximumLength(numbers);

        expect(result).toBe(1);
    });

    it("handles single element array", (): void => {
        const numbers: number[] = [5];

        const result: number = maximumLength(numbers);

        expect(result).toBe(1);
    });

    it("ignores extra copies when square is absent", (): void => {
        const numbers: number[] = [3, 3, 3];

        const result: number = maximumLength(numbers);

        expect(result).toBe(1);
    });

    it("forms a pair when element and its square each appear at least twice", (): void => {
        const numbers: number[] = [3, 3, 9, 9];

        const result: number = maximumLength(numbers);

        expect(result).toBe(3);
    });

    it("picks longer chain over shorter one starting mid-chain", (): void => {
        const numbers: number[] = [2, 2, 4, 4, 16];

        const result: number = maximumLength(numbers);

        expect(result).toBe(5);
    });

    it("handles large ones count with odd total", (): void => {
        const numbers: number[] = [1, 1, 1, 1, 1];

        const result: number = maximumLength(numbers);

        expect(result).toBe(5);
    });
});
