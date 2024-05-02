import {matrixOf} from "../../common/array-factories"

export {findRotateSteps}

const PUSH:number = 1

function findRotateSteps(ring: string, key: string): number {
    const charPositions: Map<string, number[]> = positions(ring)

    const subKey: number[][] = matrixOf(Infinity, key.length, ring.length)
    for (const pos of charPositions.get(key[0])!) {
        subKey[0][pos] = minDistance(0, pos, ring.length) + PUSH
    }

    for (let i: number = 1; i < key.length; i++) {
        const prevPositions: number[] = charPositions.get(key[i - 1])!
        const currentPositions: number[] = charPositions.get(key[i])!
        for (const curPos of currentPositions) {
            for (const prevPos of prevPositions) {
                const steps: number = minDistance(prevPos, curPos, ring.length) + PUSH
                subKey[i][curPos] = Math.min(subKey[i][curPos], subKey[i - 1][prevPos] + steps)
            }
        }
    }

    return Math.min(...subKey[key.length - 1])
}

function minDistance(start: number, target: number, ringLength: number): number {
    const clockwise: number = (target - start + ringLength) % ringLength
    const counterClockwise: number = (start - target + ringLength) % ringLength
    return Math.min(clockwise, counterClockwise)
}

function positions(ring: string): Map<string, number[]> {
    const charPositions: Map<string, number[]> = new Map<string, number[]>()

    for (let i: number = 0; i < ring.length; i++) {
        const char: string = ring[i]
        if (!charPositions.has(char)) {
            charPositions.set(char, [])
        }
        charPositions.get(char)!.push(i)
    }

    return charPositions
}
