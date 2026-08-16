export {stoneGameIX}

function stoneGameIX(stones: number[]): boolean {
    const remainderCount: number[] = [0, 0, 0]

    for (const stone of stones) {
        remainderCount[stone % 3]++
    }

    if (remainderCount[0] % 2 === 0) {
        return remainderCount[1] >= 1 && remainderCount[2] >= 1
    }

    return Math.abs(remainderCount[1] - remainderCount[2]) > 2
}
