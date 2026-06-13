export { mapWordWeights }

const A_CHAR_CODE: number = 'a'.charCodeAt(0)

function mapWordWeights(words: string[], weights: number[]): string {
    let result: string = ''

    for (const word of words) {
        let wordWeight: number = 0

        for (const character of word) {
            wordWeight += weights[character.charCodeAt(0) - A_CHAR_CODE]
        }

        result += String.fromCharCode(A_CHAR_CODE + 25 - (wordWeight % 26))
    }

    return result
}
