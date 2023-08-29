import {matrixOf} from "../../common/array-utils"

export {canCross}

const MAX_STONES_COUNT: number = 2000

const SLOW_DOWN: number = -1
const KEEP_PACE: number = 0
const SPEED_UP: number = 1

function canCross(stones: number[]): boolean {
    const memo: number[][] = matrixOf(-1, MAX_STONES_COUNT, MAX_STONES_COUNT)

    return hasLandForNextStep(stones, memo, 0, 0)
}

function hasLandForNextStep(stones: number[], memo: number[][], currentStone: number, prevJumpLength: number): boolean {
    if (currentStone === -1) {
        return false
    }

    if (currentStone === stones.length - 1) {
        return true
    }

    if (memo[currentStone][prevJumpLength] !== -1) {
        return memo[currentStone][prevJumpLength] === 1
    }

    let can: boolean = false
    for (const turn of [SLOW_DOWN, KEEP_PACE, SPEED_UP]) {
        const jumpOnLength: number = prevJumpLength + turn

        if (jumpOnLength > 0) {
            const nextStone: number = stones.indexOf(stones[currentStone] + jumpOnLength)
            can ||= hasLandForNextStep(stones, memo, nextStone, jumpOnLength)
        }
    }

    memo[currentStone][prevJumpLength] = can ? 1 : 0
    return can
}
