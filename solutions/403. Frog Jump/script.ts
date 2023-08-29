import {matrixOf} from "../../common/array-utils"

export {canCross}

const MAX_STONES_COUNT: number = 2000

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

    const nextStoneIfSpeedUp: number = stones.indexOf(stones[currentStone] + prevJumpLength + 1)
    const speedUp: boolean = hasLandForNextStep(stones, memo, nextStoneIfSpeedUp, prevJumpLength + 1)
    memo[currentStone][prevJumpLength] = speedUp ? 1 : 0
    if (speedUp) {
        return true
    }

    const nextStoneIfKeepPace: number = stones.indexOf(stones[currentStone] + prevJumpLength)
    const keepPace: boolean = hasLandForNextStep(stones, memo, nextStoneIfKeepPace, prevJumpLength)
    memo[currentStone][prevJumpLength] = keepPace ? 1 : 0
    if (keepPace) {
        return true
    }

    const nextStoneIfSlowDown: number = stones.indexOf(stones[currentStone] + prevJumpLength)
    const slowDown: boolean = hasLandForNextStep(stones, memo, nextStoneIfSlowDown, prevJumpLength - 1)
    memo[currentStone][prevJumpLength] = slowDown ? 1 : 0
    return slowDown
}
