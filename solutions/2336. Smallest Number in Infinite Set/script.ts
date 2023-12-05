export {SmallestInfiniteSet}

class SmallestInfiniteSet {

    private ranges: Range[]

    constructor() {
        this.ranges = [new Range(1, undefined)]
    }

    findRangeBiggerThan(number: number): number {
        let min: number | undefined
        for (let i: number = 0; i < this.ranges.length; i++) {
            if (min === undefined || this.ranges[i].start > number && this.ranges[i].start < this.ranges[min].start) {
                min = i
            }
        }

        if (min === undefined) {
            throw new Error("Min not found")
        }

        return min
    }

    findRangeIncluding(number: number): number | undefined {
        let index: number | undefined

        for (let i: number = 0; i < this.ranges.length; i++) {
            if (this.ranges[i].start <= number) {
                const end: number | undefined = this.ranges[i].end
                if (end === undefined || end >= number) {
                    index = i
                }
            }
        }

        return index
    }

    popSmallest(): number {
        const index: number = this.findRangeBiggerThan(0)
        const min: Range = this.ranges[index]
        const before: Range[] = this.ranges.slice(0, index)
        const after: Range[] = this.ranges.slice(index + 1)

        this.ranges = [...before, ...after]

        if (min.start !== min.end) {
            this.ranges.push(new Range(min.start + 1, min.end))
        }

        return min.start
    }

    addBack(num: number): void {
        const index: number | undefined = this.findRangeIncluding(num)
        if (index !== undefined) {
            return
        }

        const bigger: number = this.findRangeBiggerThan(num)
        if (this.ranges[bigger].start === num + 1) {
            const before: Range[] = this.ranges.slice(0, bigger)
            const after: Range[] = this.ranges.slice(bigger + 1)

            this.ranges = [...before, new Range(num, this.ranges[bigger].end), ...after]
        } else {
            this.ranges.push(new Range(num, num))
        }
    }
}


class Range {
    start: number
    end: number | undefined

    constructor(start: number, set: number | undefined) {
        this.start = start
        this.end = set
    }
}
