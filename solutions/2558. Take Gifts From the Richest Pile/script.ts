import {sum} from "../../common/array-utils"

export {pickGifts}

function pickGifts(gifts: number[], k: number): number {
    for (let i: number = 0; i < k; i++) {
        let richestPileIndex: number = 0

        for (let currentPileIndex: number = 0; currentPileIndex < gifts.length; currentPileIndex++) {
            if (gifts[richestPileIndex] < gifts[currentPileIndex]) {
                richestPileIndex = currentPileIndex
            }
        }

        gifts[richestPileIndex] = Math.floor(
            Math.sqrt(gifts[richestPileIndex])
        )
    }

    return sum(gifts)
}
