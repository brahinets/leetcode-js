import {binarySearch} from "../../common/array-utils"

export {fullBloomFlowers}

function fullBloomFlowers(flowers: number[][], people: number[]): number[] {
    const starts: number[] = []
    const ends: number[] = []
    for (const [start, end] of flowers) {
        starts.push(start)
        ends.push(end + 1)
    }
    starts.sort((a: number, b: number): number => a - b)
    ends.sort((a: number, b: number): number => a - b)

    const answer: number[] = []
    for (const person of people) {
        const i: number = binarySearch(starts, person)
        const j: number = binarySearch(ends, person)
        answer.push(i - j)
    }

    return answer
}
