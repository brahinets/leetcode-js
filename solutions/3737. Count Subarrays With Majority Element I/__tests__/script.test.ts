import { countMajoritySubarrays } from "../script";

describe("3737. Count Subarrays With Majority Element I", (): void => {
    it("target appears majority in multiple subarrays", (): void => {
        const numbers: number[] = [1, 2, 2, 3];
        const target: number = 2;

        const result: number = countMajoritySubarrays(numbers, target);

        expect(result).toBe(5);
    });

    it("all elements equal target", (): void => {
        const numbers: number[] = [1, 1, 1, 1];
        const target: number = 1;

        const result: number = countMajoritySubarrays(numbers, target);

        expect(result).toBe(10);
    });

    it("target not present in array", (): void => {
        const numbers: number[] = [1, 2, 3];
        const target: number = 4;

        const result: number = countMajoritySubarrays(numbers, target);

        expect(result).toBe(0);
    });

    it("single element equal to target", (): void => {
        const numbers: number[] = [5];
        const target: number = 5;

        const result: number = countMajoritySubarrays(numbers, target);

        expect(result).toBe(1);
    });

    it("single element not equal to target", (): void => {
        const numbers: number[] = [3];
        const target: number = 7;

        const result: number = countMajoritySubarrays(numbers, target);

        expect(result).toBe(0);
    });

    it("target appearing exactly half the time does not count as majority", (): void => {
        const numbers: number[] = [1, 2];
        const target: number = 1;

        const result: number = countMajoritySubarrays(numbers, target);

        expect(result).toBe(1);
    });
});
