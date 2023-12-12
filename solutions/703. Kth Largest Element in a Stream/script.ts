export {KthLargest}

class KthLargest {
    private readonly limit: number;
    private stream: number[];

    constructor(k: number, nums: number[]) {
        this.limit = k;
        this.stream = this.merge(nums);
    }

    add(val: number): number {
        this.stream = this.merge(this.stream, val);

        return this.stream[0];
    }

    merge(nums: number[], val?: number): number[] {
        const numbers: number[] = [...nums];
        if (val !== undefined) {
            numbers.push(val);
        }

        return numbers
            .toSorted((a: number, b: number): number => a - b)
            .splice(Math.max(numbers.length - this.limit, 0));
    }
}
