import {matrixOf} from "../../common/array-utils"

export {canCross}

const SLOW_DOWN: number = -1
const KEEP_PACE: number = 0
const SPEED_UP: number = 1
const TURNS: number[] = [SLOW_DOWN, KEEP_PACE, SPEED_UP]


function canCross(stones: number[]): boolean {
    const maxJumpsCount: number = stones.length
    const maxStonesCount: number = stones.length
    const memo: number[][] = matrixOf(-1, maxStonesCount, maxJumpsCount)

    const stonesIndex: Map<number, number> = stones
        .reduce((map: Map<number, number>, s: number, i: number,): Map<number, number> => map.set(s, i), new Map<number, number>())

    return hasLandForNextStep(stones, memo, stonesIndex, 0, 0)
}

function hasLandForNextStep(stones: number[], memo: number[][], stonesIndex: Map<number, number>, currentStone: number, prevJumpLength: number): boolean {
    if (currentStone === stones.length - 1) {
        return true
    }

    if (memo[currentStone][prevJumpLength] !== -1) {
        return memo[currentStone][prevJumpLength] === 1
    }

    let can: boolean = false
    for (const turn of TURNS) {
        const jumpOnLength: number = prevJumpLength + turn
        const nextStoneIfJump: number | undefined = stonesIndex.get(stones[currentStone] + jumpOnLength)

        if (jumpOnLength > 0 && nextStoneIfJump !== undefined) {
            can ||= hasLandForNextStep(stones, memo, stonesIndex, nextStoneIfJump, jumpOnLength)
            if (can) {
                break
            }
        }
    }

    memo[currentStone][prevJumpLength] = can ? 1 : 0
    return can
}
