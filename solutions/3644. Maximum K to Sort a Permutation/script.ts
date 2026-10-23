export { sortPermutation }

function sortPermutation(numbers: number[]): number {
    let misplacedAnd: number = -1

    for (let index: number = 0; index < numbers.length; index++) {
        if (numbers[index] !== index) {
            misplacedAnd &= numbers[index]
        }
    }

    if (misplacedAnd === -1) {
        return 0
    }

    return misplacedAnd
}
