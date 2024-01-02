import {count} from "../../common/array-utils"

export {findMatrix}

function findMatrix(nums: number[]): number[][] {
    const counts: Map<number, number> = count(nums)

    const result: number[][] = []

    for (const [number, count] of counts.entries()) {
        for (let i:number = 0; i < count; i++) {
            if (!result[i]) {
                result.push([])
            }

            result[i].push(number)
        }
    }

    return result
}
