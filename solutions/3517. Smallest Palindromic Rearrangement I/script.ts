import {arrayOfZeros} from '../../common/array-factories'

export {smallestPalindrome}

function smallestPalindromicRearrangement(s: string): string {
    const characterCounts: number[] = countCharacters(s)
    const half: string = buildHalf(characterCounts)
    const middleCharacter: string = extractMiddleCharacter(characterCounts)

    return half + middleCharacter + reverseString(half)
}

function countCharacters(s: string): number[] {
    const characterCounts: number[] = arrayOfZeros(26)
    const characterCodeOfLetterA: number = 'a'.charCodeAt(0)

    for (const character of s) {
        characterCounts[character.charCodeAt(0) - characterCodeOfLetterA]++
    }

    return characterCounts
}

function buildHalf(characterCounts: number[]): string {
    const characterCodeOfLetterA: number = 'a'.charCodeAt(0)
    let half: string = ''

    for (let index: number = 0; index < characterCounts.length; index++) {
        const halfCount: number = Math.floor(characterCounts[index] / 2)
        half += String.fromCharCode(characterCodeOfLetterA + index).repeat(halfCount)
    }

    return half
}

function extractMiddleCharacter(characterCounts: number[]): string {
    const characterCodeOfLetterA: number = 'a'.charCodeAt(0)

    for (let index: number = 0; index < characterCounts.length; index++) {
        if (characterCounts[index] % 2 === 1) {
            return String.fromCharCode(characterCodeOfLetterA + index)
        }
    }

    return ''
}

function reverseString(value: string): string {
    return value.split('').reverse().join('')
}
