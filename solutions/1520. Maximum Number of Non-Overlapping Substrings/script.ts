import { arrayOf } from "../../common/array-factories"

export { maxNumOfSubstrings }

interface SelectionResult {
    readonly count: number
    readonly totalLength: number
    readonly substrings: readonly string[]
}

function maxNumOfSubstrings(s: string): string[] {
    const length: number = s.length
    const firstIndex: number[] = arrayOf(-1, 26)
    const lastIndex: number[] = arrayOf(-1, 26)

    for (let index = 0; index < length; index++) {
        const characterCode: number = s.charCodeAt(index) - 97
        if (firstIndex[characterCode] === -1) {
            firstIndex[characterCode] = index
        }

        lastIndex[characterCode] = index
    }

    const validEnd: number[] = computeValidEnds(s, firstIndex, lastIndex)
    const bestFromIndex: SelectionResult[] = computeBestSelection(s, validEnd)

    return [...bestFromIndex[0].substrings]
}

function computeValidEnds(s: string, firstIndex: readonly number[], lastIndex: readonly number[]): number[] {
    const length: number = s.length
    const validEnd: number[] = arrayOf(-1, length)

    for (let start = 0; start < length; start++) {
        const characterCode: number = s.charCodeAt(start) - 97
        if (firstIndex[characterCode] !== start) {
            continue
        }

        let end: number = lastIndex[characterCode]
        let isValid: boolean = true

        for (let cursor = start; cursor <= end; cursor++) {
            const cursorCharacterCode: number = s.charCodeAt(cursor) - 97
            if (firstIndex[cursorCharacterCode] < start) {
                isValid = false
                break
            }

            end = Math.max(end, lastIndex[cursorCharacterCode])
        }

        if (isValid) {
            validEnd[start] = end
        }
    }

    return validEnd
}

function computeBestSelection(s: string, validEnd: readonly number[]): SelectionResult[] {
    const length: number = s.length
    const bestFromIndex: SelectionResult[] = new Array<SelectionResult>(length + 1)
    bestFromIndex[length] = { count: 0, totalLength: 0, substrings: [] }

    for (let index = length - 1; index >= 0; index--) {
        const skipResult: SelectionResult = bestFromIndex[index + 1]

        if (validEnd[index] === -1) {
            bestFromIndex[index] = skipResult
            continue
        }

        const end: number = validEnd[index]
        const nextResult: SelectionResult = bestFromIndex[end + 1]
        const takeResult: SelectionResult = {
            count: nextResult.count + 1,
            totalLength: nextResult.totalLength + (end - index + 1),
            substrings: [s.slice(index, end + 1), ...nextResult.substrings]
        }

        const shouldTake: boolean =
            takeResult.count > skipResult.count ||
            (takeResult.count === skipResult.count && takeResult.totalLength < skipResult.totalLength)

        bestFromIndex[index] = shouldTake ? takeResult : skipResult
    }

    return bestFromIndex
}