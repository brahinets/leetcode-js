import {arrayOf} from "../../common/array-factories"

export {candy}

function candy(ratings: number[]): number {
    const childrenCount = ratings.length
    if (childrenCount === 0) {
        return 0
    }

    const candies = arrayOf(1, childrenCount)
    for (let i: number = 1; i < childrenCount; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }

    for (let i: number = childrenCount - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        }
    }

    return candies.reduce((sum: number, candy: number): number => sum + candy, 0)
}
