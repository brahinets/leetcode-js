import {arrayOfZeros} from "../../common/array-factories"

export {fullBloomFlowers}

function fullBloomFlowers(flowers: number[][], people: number[]): number[] {
    const bloom: number[] = arrayOfZeros(365)

    for (const [start, end] of flowers) {
        for (let i: number = start; i <= end; i++) {
            bloom[i]++
        }
    }

    const result: number[] = []
    for (const day of people) {
        result.push(bloom[day])
    }

    return result
}
