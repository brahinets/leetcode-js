export {canCross}

function canCross(stones: number[]): boolean {
    return hasLandOnStepK(0, 1, stones)
}

function hasLandOnStepK(currentStone: number, stepSize: number, stones: number[]): boolean {
    if (stepSize <= 0) {
        return false
    }

    if (currentStone < 0) {
        return false
    }

    if (currentStone === stones.length - 1) {
        return true
    }

    const nextStone: number = stones.indexOf(stones[currentStone] + stepSize);
    if (nextStone === -1) {
        return false
    }


    return hasLandOnStepK(nextStone, stepSize + 1, stones)
        || hasLandOnStepK(nextStone, stepSize, stones)
        || hasLandOnStepK(nextStone, stepSize - 1, stones)
}
