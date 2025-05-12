export {findEvenNumbers}

function findEvenNumbers(digits: number[]): number[] {
    const nums: Set<number> = new Set<number>()

    for (let i: number = 0; i < digits.length; ++i) {
        for (let j: number = 0; j < digits.length; ++j) {
            for (let k: number = 0; k < digits.length; ++k) {
                if (i === j || j === k || i === k) {
                    continue
                }

                const num: number = digits[i] * 100 + digits[j] * 10 + digits[k]
                if (num >= 100 && num % 2 === 0) {
                    nums.add(num)
                }
            }
        }
    }

    return Array.from(nums).sort((a: number, b: number): number => a - b)
}
