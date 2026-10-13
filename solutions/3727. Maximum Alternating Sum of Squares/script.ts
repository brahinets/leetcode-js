export { maxAlternatingSum }

function maxAlternatingSum(nums: number[]): number {
    const squares: number[] = nums.map((value: number): number => value * value)

    squares.sort((first: number, second: number): number => second - first)

    const positiveCount: number = Math.ceil(squares.length / 2)
    let result: number = 0

    for (let index: number = 0; index < squares.length; index++) {
        if (index < positiveCount) {
            result += squares[index]
        } else {
            result -= squares[index]
        }
    }

    return result
}
