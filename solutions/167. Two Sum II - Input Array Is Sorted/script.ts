export {twoSum}

function twoSum(numbers: number[], target: number): number[] {
    for (let i: number = 0; i < numbers.length; i++) {
        for (let j: number = 0; j < numbers.length; j++) {
            if (i === j) {
                continue
            }

            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }

    return [-1, -1]
}
