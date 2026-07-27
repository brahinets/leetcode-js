export { findGCD }

function findGCD(nums: number[]): number {
    let smallest: number = nums[0]
    let largest: number = nums[0]
    for (const value of nums) {
        if (value < smallest) {
            smallest = value
        }

        if (value > largest) {
            largest = value
        }
    }

    return greatestCommonDivisor(smallest, largest)
}

function greatestCommonDivisor(first: number, second: number): number {
    let dividend: number = first
    let divisor: number = second
    while (divisor !== 0) {
        const remainder: number = dividend % divisor
        dividend = divisor
        divisor = remainder
    }

    return dividend
}
