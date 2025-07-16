export {maximumLength}

const patterns: number[][] = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
]

function maximumLength(nums: number[]): number {
    let maximumLength: number = 0

    for (const pattern of patterns) {
        let count: number = 0

        for (const num of nums) {
            if (num % 2 === pattern[count % 2]) {
                count++
            }
        }

        maximumLength = Math.max(maximumLength, count)
    }

    return maximumLength
}
