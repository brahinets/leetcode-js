export {maxCoins}

function maxCoins(piles: number[]): number {
    piles = piles.sort((a: number, b: number): number => a - b)

    let result: number = 0
    const start: number = Math.floor(piles.length / 3)
    for (let i: number = start; i < piles.length; i += 2) {
        result += piles[i]
    }

    return result
}
