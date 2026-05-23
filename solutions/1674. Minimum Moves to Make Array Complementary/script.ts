import { arrayOfZeros } from "../../common/array-factories"

export {minMoves}

function minMoves(numbers: number[], limit: number): number {
    const differenceArray: number[] = arrayOfZeros(2 * limit + 2)
    const halfLength: number = numbers.length / 2

    for (let index: number = 0; index < halfLength; index++) {
        const left: number = numbers[index]
        const right: number = numbers[numbers.length - 1 - index]
        const pairSum: number = left + right
        const minimumOfPair: number = Math.min(left, right)
        const maximumOfPair: number = Math.max(left, right)

        differenceArray[2] += 2
        differenceArray[minimumOfPair + 1] -= 1
        differenceArray[pairSum] -= 1
        differenceArray[pairSum + 1] += 1
        differenceArray[maximumOfPair + limit + 1] += 1
    }

    let minimumMoves: number = numbers.length
    let currentMoves: number = 0

    for (let target: number = 2; target <= 2 * limit; target++) {
        currentMoves += differenceArray[target]

        if (currentMoves < minimumMoves) {
            minimumMoves = currentMoves
        }
    }

    return minimumMoves
}
