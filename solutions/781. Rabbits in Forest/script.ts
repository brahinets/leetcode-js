import {count} from "../../common/array-utils"

export {numRabbits}

function numRabbits(answers: number[]): number {
    const counts: Map<number, number> = count(answers)

    let result: number = 0
    for (const [key, value] of counts.entries()) {
        result += Math.ceil(value / (key + 1)) * (key + 1)
    }

    return result
}
