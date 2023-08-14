import {count} from "../../common/array-utils"

export {change}

function change(amount: number, coins: number[]): number {
    const combinations: number[][] = []

    collectCombinations(amount, coins, [], combinations)

    return combinations.length
}

function collectCombinations(amount: number, coins: number[], currentCombination: number[], combinations: number[][]): void {
    if (amount === 0) {
        combinations.push(currentCombination)
        return
    }

    for (const coin of coins) {
        const newCombination: number[] = [...currentCombination, coin]

        if (amount === coin) {
            if (!includes(combinations, newCombination)) {
                combinations.push([...currentCombination, coin])
            }
        } else {
            if (coin <= amount) {
                if (!includes(combinations, newCombination)) {
                    collectCombinations(amount - coin, coins, newCombination, combinations)
                }
            }
        }
    }
}

function includes(combinations: number[][], another: number[]): boolean {
    for (const combination of combinations) {
        const first: Map<number, number> = count(combination)
        const second: Map<number, number> = count(another)

        if (first.size === second.size) {
            if (equal(first, second)) {
                return true
            }
        }
    }

    return false
}

function equal(first: Map<number, number>, second: Map<number, number>): boolean {
    for (const kv of first) {
        const secondValue: number | undefined = second.get(kv[0])

        if (secondValue === undefined) {
            return false
        }

        if (secondValue !== kv[1]) {
            return false
        }
    }

    return true
}
