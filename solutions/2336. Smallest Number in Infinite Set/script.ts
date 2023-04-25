export {SmallestInfiniteSet}

class SmallestInfiniteSet {

    ranges: Range[];

    constructor() {
        this.ranges = [new Range(1, undefined)];
    }

    findRangeBiggerThan(number: number): number {
        let min: number | undefined;
        for (let i: number = 0; i < this.ranges.length; i++) {
            if (min === undefined || this.ranges[i].start < number && this.ranges[i].start < this.ranges[i].start) {
                min = i;
            }
        }

        if (min === undefined) {
            throw new Error("Min not found");
        }

        return min;
    }

    popSmallest(): number {
        const index: number = this.findRangeBiggerThan(0);
        const min: Range = this.ranges[index];
        const before: Range[] = this.ranges.slice(0, index)
        const after: Range[] = this.ranges.slice(index + 1);

        this.ranges = [...before, ...after];

        if (min.start !== min.end) {
            this.ranges.push(new Range(min.start + 1, min.end))
        }

        return min.start;
    }
}


class Range {
    start: number;
    end: number | undefined;

    constructor(start: number, set: number | undefined) {
        this.start = start;
        this.end = set;
    }
}