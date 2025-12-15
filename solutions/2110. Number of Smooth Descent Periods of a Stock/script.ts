export {getDescentPeriods}

function getDescentPeriods(prices: number[]): number {
    let totalPeriods: number = 0
    let currentLength: number = 1

    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] === prices[i - 1] - 1) {
            currentLength++
        } else {
            totalPeriods += (currentLength * (currentLength + 1)) / 2
            currentLength = 1
        }
    }

    totalPeriods += (currentLength * (currentLength + 1)) / 2

    return totalPeriods
}
