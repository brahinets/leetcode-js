export {deckRevealedIncreasing}

function deckRevealedIncreasing(deck: number[]): number[] {
    const result: number[] = []
    const queue: number[] = Array.from(Array(deck.length).keys())

    deck.sort((a: number, b: number): number => a - b)

    for (let q: number = 0; q < deck.length; q++) {
        result[queue.shift()!] = deck[q]

        queue.push(queue.shift()!)
    }


    return result
}
