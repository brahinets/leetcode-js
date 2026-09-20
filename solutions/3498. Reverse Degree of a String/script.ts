export { reverseDegree }

const ALPHABET_SIZE: number = 26
const LOWERCASE_A_CHARACTER_CODE: number = 97

function reverseDegree(s: string): number {
    let total: number = 0

    for (let index: number = 0; index < s.length; index++) {
        const reversedAlphabetPosition: number = ALPHABET_SIZE - (s.charCodeAt(index) - LOWERCASE_A_CHARACTER_CODE)
        total += reversedAlphabetPosition * (index + 1)
    }

    return total
}
