export {largestNumber}

function largestNumber(nums: number[]): string {
    return nums
        .map((num: number): string => num.toString())
        .sort((a: string, b: string): number => (b + a).localeCompare(a + b))
        .join('')
        .replace(/^0+/, '0')
}
