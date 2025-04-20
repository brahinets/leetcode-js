import {count} from "../../common/array-utils"

export {numRabbits}

function numRabbits(answers: number[]): number {
    const counts: Map<number, number> = count(answers)

    let result: number = 0
    for (const [response, count] of counts.entries()) {
        result += Math.ceil(count / (response + 1)) * (response + 1)
    }

    return result
}
