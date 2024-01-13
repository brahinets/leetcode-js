import {count} from "../../common/array-utils"

export {minSteps}

function minSteps(s: string, t: string): number {
    const sCounts: Map<string, number> = count(s.split(""))
    const tCounts: Map<string, number> = count(t.split(""))

    let steps: number = 0
    for (const [letter, count] of sCounts.entries()) {
        const tCount: number = tCounts.get(letter) ?? 0
        steps += Math.max(0, count - tCount)
    }

    return steps
}
