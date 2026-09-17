import {arrayOfZeros} from '../../common/array-factories'

export {deckRevealedIncreasing}

function deckRevealedIncreasing(deck: number[]): number[] {
    const result: number[] = []
    const queue: number[] = arrayOfZeros(deck.length).map((_: number, index: number): number => index)

    deck.sort((a: number, b: number): number => a - b)

    for (let q: number = 0; q < deck.length; q++) {
        result[queue.shift()!] = deck[q]

        queue.push(queue.shift()!)
    }


    return result
}
