import {mapsAreEqual} from "../../common/map-utils"

export {findAnagrams}

function countChars(str: string): Map<string, number> {
    const charsCounts: Map<string, number> = new Map<string, number>()

    for (const char of str) {
        let count: number | undefined = charsCounts.get(char)

        if (count === undefined) {
            count = 0
        }

        charsCounts.set(char, count + 1)
    }

    return charsCounts
}

function findAnagrams(s: string, p: string): number[] {
    const anagramsBeginnings: number[] = []
    const charsP: Map<string, number> = countChars(p)

    for (let i: number = 0; i < s.length - p.length + 1; i++) {
        const anagram: boolean = mapsAreEqual(countChars(s.substring(i, i + p.length)), charsP)

        if (anagram) {
            anagramsBeginnings.push(i)
        }
    }

    return anagramsBeginnings
}
