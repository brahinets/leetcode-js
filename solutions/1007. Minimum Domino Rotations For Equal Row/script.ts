import {arrayOfZeros} from "../../common/array-factories"

export {minDominoRotations}

function minDominoRotations(tops: number[], bottoms: number[]): number {
    const count: number[] = arrayOfZeros(7)
    let minRotations: number = Infinity

    for (let i: number = 0; i < tops.length; i++) {
        count[tops[i]]++
        count[bottoms[i]]++
    }

    for (let i: number = 1; i <= 6; i++) {
        if (count[i] >= tops.length) {
            const rotations: number = Math.min(getRotations(tops, bottoms, i), getRotations(bottoms, tops, i))

            minRotations = Math.min(minRotations, rotations)
        }
    }

    return minRotations === Infinity ? -1 : minRotations
}

function getRotations(tops: number[], bottoms: number[], i: number): number {
    let rotations: number = 0

    for (let j: number = 0; j < tops.length; j++) {
        if (tops[j] !== i && bottoms[j] !== i) {
            return Infinity
        }

        if (tops[j] !== i) {
            rotations++
        }
    }

    return rotations
}
