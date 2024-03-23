export {countOdds}

function countOdds(low: number, high: number): number {
    return Math.ceil(high / 2) - Math.floor(low / 2)
}
