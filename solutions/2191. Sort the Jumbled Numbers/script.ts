export {sortJumbled}

function sortJumbled(mapping: number[], nums: number[]): number[] {
    return nums.toSorted((a: number, b: number): number => mapDigits(a, mapping) - mapDigits(b, mapping))
}

function mapDigits(number: number, mapping: number[]): number {
    return Number(number.toString()
        .split("")
        .reduce((res: string, digit): string => res + mapping[Number(digit)] + "", ""))
}
