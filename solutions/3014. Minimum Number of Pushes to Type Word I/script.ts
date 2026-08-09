export {minimumPushes}

const KEYS_COUNT: number = 8

function minimumPushes(word: string): number {
    const wordLength: number = word.length

    let totalPushes: number = 0
    for (let letterIndex: number = 0; letterIndex < wordLength; letterIndex++) {
        const pushesForLetter: number = Math.floor(letterIndex / KEYS_COUNT) + 1
        totalPushes += pushesForLetter
    }

    return totalPushes
}
