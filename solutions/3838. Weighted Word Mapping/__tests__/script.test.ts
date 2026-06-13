import { mapWordWeights } from "../script";

describe("3838. Weighted Word Mapping", (): void => {
    it("maps multiple words with varied character weights", (): void => {
        const words: string[] = ["abcd", "def", "xyz"];
        const weights: number[] = [
            5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9,
            8, 3, 7, 7, 2,
        ];

        const result: string = mapWordWeights(words, weights);

        expect(result).toBe("rij");
    });

    it("maps each word when all character weights are equal", (): void => {
        const words: string[] = ["a", "b", "c"];
        const weights: number[] = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1,
        ];

        const result: string = mapWordWeights(words, weights);

        expect(result).toBe("yyy");
    });

    it("single word maps to correct letter", (): void => {
        const words: string[] = ["abcd"];
        const weights: number[] = [
            7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1,
            3, 4, 4, 5,
        ];

        const result: string = mapWordWeights(words, weights);

        expect(result).toBe("g");
    });

    it("word weight that is exactly divisible by 26 maps to z", (): void => {
        const words: string[] = ["z"];
        const weights: number[] = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 26,
        ];

        const result: string = mapWordWeights(words, weights);

        expect(result).toBe("z");
    });

    it("single character word maps using its character weight", (): void => {
        const words: string[] = ["a"];
        const weights: number[] = [
            25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1,
        ];

        const result: string = mapWordWeights(words, weights);

        expect(result).toBe("a");
    });
});
