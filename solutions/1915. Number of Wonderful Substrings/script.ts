import {arrayOfZeros} from "../../common/array-factories";

export {wonderfulSubstrings}

function wonderfulSubstrings(word: string): number {
    const start: string = 'a'
    const end: string = 'j'
    const unique: number = end.charCodeAt(0) - start.charCodeAt(0)

    const frequency: number[] = arrayOfZeros(2 ** unique)
    frequency[0] = 1

    let result: number = 0
    let mask: number = 0
    for (const char of word) {
        const uniquenessIndex: number = char.charCodeAt(0) - start.charCodeAt(0)
        mask ^= 1 << uniquenessIndex

        result += frequency[mask]

        for (let i: number = 0; i < unique; i++) {
            result += frequency[mask ^ (1 << i)]
        }

        frequency[mask]++
    }

    return result
}
