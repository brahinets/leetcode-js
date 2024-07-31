import {arrayOfZeros} from "../../common/array-factories"

export {minHeightShelves}

function minHeightShelves(books: number[][], shelfWidth: number): number {
    const dp: number[] = arrayOfZeros(books.length + 1)
    dp[0] = 0

    for (let i: number = 1; i <= books.length; i++) {
        let width: number = books[i - 1][0]
        let height: number = books[i - 1][1]
        dp[i] = dp[i - 1] + height

        for (let j = i - 1; j > 0 && width + books[j - 1][0] <= shelfWidth; j--) {
            width += books[j - 1][0]
            height = Math.max(height, books[j - 1][1])
            dp[i] = Math.min(dp[i], dp[j - 1] + height)
        }
    }

    return dp[books.length]
}
