import {sum} from "../../common/array-utils"

export {minMoves}

function minMoves(numbers: number[]): number {
    const minimum: number = Math.min(...numbers)
    const total: number = sum(numbers)

    return total - numbers.length * minimum
}
