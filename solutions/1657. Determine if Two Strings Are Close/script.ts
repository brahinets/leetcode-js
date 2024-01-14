import {arraysAreEqual, count} from "../../common/array-utils"

export {closeStrings}

function closeStrings(word1: string, word2: string): boolean {
    const sCounts: Map<string, number> = count(word1.split(""))
    const tCounts: Map<string, number> = count(word2.split(""))

    const sLetters: string[] = Array.from(sCounts.keys()).sort()
    const tLetters: string[] = Array.from(tCounts.keys()).sort()

    if (!arraysAreEqual(sLetters, tLetters)) {
        return false
    }

    const sCountsValues: number[] = Array.from(sCounts.values()).sort()
    const tCountsValues: number[] = Array.from(tCounts.values()).sort()

    return arraysAreEqual(sCountsValues, tCountsValues)
}
