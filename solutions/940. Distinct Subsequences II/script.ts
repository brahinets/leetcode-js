import { arrayOfZeros } from "../../common/array-factories"

export { distinctSubseqII }

const MODULO: number = 1_000_000_007
const ALPHABET_SIZE: number = 26

function distinctSubseqII(s: string): number {
    const endingCounts: number[] = arrayOfZeros(ALPHABET_SIZE)
    let totalCount: number = 0

    for (let index: number = 0; index < s.length; index++) {
        const characterIndex: number = s.charCodeAt(index) - 97
        const previousEndingCount: number = endingCounts[characterIndex]
        const newEndingCount: number = (totalCount + 1) % MODULO

        totalCount = (totalCount - previousEndingCount + newEndingCount + MODULO) % MODULO
        endingCounts[characterIndex] = newEndingCount
    }

    return totalCount
}
