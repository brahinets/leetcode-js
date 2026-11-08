import {arrayOfZeros} from '../../common/array-factories'

export {smallestPalindrome}

const LETTER_COUNT: number = 26
const COUNT_LIMIT: number = 10 ** 6
const CHARACTER_CODE_OF_LETTER_A: number = 'a'.charCodeAt(0)

function smallestPalindrome(s: string, k: number): string {
    const characterCounts: number[] = countCharacters(s)
    const halfCounts: number[] = halveCounts(characterCounts)
    const totalPermutations: number = countPermutationsCapped(halfCounts, COUNT_LIMIT)

    if (totalPermutations < k) {
        return ''
    }

    const half: string = selectKthHalf(halfCounts, k)
    const middleCharacter: string = extractMiddleCharacter(characterCounts)

    return half + middleCharacter + reverseString(half)
}

function countCharacters(s: string): number[] {
    const characterCounts: number[] = arrayOfZeros(LETTER_COUNT)

    for (const character of s) {
        characterCounts[character.charCodeAt(0) - CHARACTER_CODE_OF_LETTER_A]++
    }

    return characterCounts
}

function halveCounts(characterCounts: number[]): number[] {
    const halfCounts: number[] = arrayOfZeros(LETTER_COUNT)

    for (let index: number = 0; index < LETTER_COUNT; index++) {
        halfCounts[index] = Math.floor(characterCounts[index] / 2)
    }

    return halfCounts
}

function extractMiddleCharacter(characterCounts: number[]): string {
    for (let index: number = 0; index < LETTER_COUNT; index++) {
        if (characterCounts[index] % 2 === 1) {
            return String.fromCharCode(CHARACTER_CODE_OF_LETTER_A + index)
        }
    }

    return ''
}

function countPermutationsCapped(characterCounts: number[], limit: number): number {
    let remainingLength: number = sumOfCounts(characterCounts)
    let product: number = 1

    for (let index: number = 0; index < LETTER_COUNT; index++) {
        const count: number = characterCounts[index]

        if (count === 0) {
            continue
        }

        product = multiplyByBinomialCapped(product, remainingLength, count, limit)

        if (product > limit) {
            return product
        }

        remainingLength -= count
    }

    return product
}

function multiplyByBinomialCapped(product: number, n: number, r: number, limit: number): number {
    const smallerSide: number = Math.min(r, n - r)

    for (let step: number = 1; step <= smallerSide; step++) {
        product = (product * (n - smallerSide + step)) / step

        if (product > limit) {
            return product
        }
    }

    return product
}

function selectKthHalf(characterCounts: number[], k: number): string {
    const halfLength: number = sumOfCounts(characterCounts)
    let remainingRank: number = k
    let half: string = ''

    for (let position: number = 0; position < halfLength; position++) {
        for (let index: number = 0; index < LETTER_COUNT; index++) {
            if (characterCounts[index] === 0) {
                continue
            }

            characterCounts[index]--
            const permutationsWithCharacter: number =
                countPermutationsCapped(characterCounts, COUNT_LIMIT)

            if (remainingRank > permutationsWithCharacter) {
                remainingRank -= permutationsWithCharacter
                characterCounts[index]++

                continue
            }

            half += String.fromCharCode(CHARACTER_CODE_OF_LETTER_A + index)

            break
        }
    }

    return half
}

function sumOfCounts(characterCounts: number[]): number {
    let total: number = 0

    for (const count of characterCounts) {
        total += count
    }

    return total
}

function reverseString(value: string): string {
    return value.split('').reverse().join('')
}
