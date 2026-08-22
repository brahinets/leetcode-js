export {findKthSmallest}

function findKthSmallest(coins: number[], k: number): number {
    const minimumCoin: number = Math.min(...coins)

    let low: number = 1
    let high: number = k * minimumCoin

    while (low < high) {
        const middle: number = Math.floor((low + high) / 2)

        if (countAmountsUpTo(coins, middle) >= k) {
            high = middle
        } else {
            low = middle + 1
        }
    }

    return low
}

function countAmountsUpTo(coins: number[], amount: number): number {
    const subsetCount: number = 1 << coins.length

    let count: number = 0

    for (let subset: number = 1; subset < subsetCount; subset++) {
        let leastCommonMultiple: number = 1
        let bitCount: number = 0
        let exceedsAmount: boolean = false

        for (let index: number = 0; index < coins.length; index++) {
            if ((subset & (1 << index)) !== 0) {
                leastCommonMultiple = lowestCommonMultiple(leastCommonMultiple, coins[index])
                bitCount += 1

                if (leastCommonMultiple > amount) {
                    exceedsAmount = true
                    break
                }
            }
        }

        if (exceedsAmount) {
            continue
        }

        const contribution: number = Math.floor(amount / leastCommonMultiple)

        if (bitCount % 2 === 1) {
            count += contribution
        } else {
            count -= contribution
        }
    }

    return count
}

function lowestCommonMultiple(firstNumber: number, secondNumber: number): number {
    return (firstNumber / greatestCommonDivisor(firstNumber, secondNumber)) * secondNumber
}

function greatestCommonDivisor(firstNumber: number, secondNumber: number): number {
    return secondNumber === 0 ? firstNumber : greatestCommonDivisor(secondNumber, firstNumber % secondNumber)
}
