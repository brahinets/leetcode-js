import {count} from "../../common/array-utils"

export {repeatLimitedString}

function repeatLimitedString(s: string, repeatLimit: number): string {
    const frequency: Map<string, number> = count(s.split(""))
    const result: string[] = []

    const sortedChars: string[] = Array.from(frequency.keys()).sort().reverse()
    while (sortedChars.length > 0) {
        const currentChar: string = sortedChars[0]
        const use: number = Math.min(frequency.get(currentChar)!, repeatLimit)
        for (let k: number = 0; k < use; k++) {
            result.push(currentChar)
        }
        frequency.set(currentChar, frequency.get(currentChar)! - use)

        if (frequency.get(currentChar)! > 0) {
            let smallerCharIndex: number = 1
            while (smallerCharIndex < sortedChars.length && frequency.get(sortedChars[smallerCharIndex]) === 0) {
                smallerCharIndex++
            }

            if (smallerCharIndex >= sortedChars.length) {
                break
            }

            const smallerChar: string = sortedChars[smallerCharIndex]
            result.push(smallerChar)
            frequency.set(smallerChar, frequency.get(smallerChar)! - 1)
        }

        if (frequency.get(currentChar)! === 0) {
            sortedChars.shift()
        }
    }

    return result.join('')
}
