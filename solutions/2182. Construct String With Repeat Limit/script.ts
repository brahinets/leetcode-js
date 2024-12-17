import {arrayOfZeros} from "../../common/array-factories"

export {repeatLimitedString}

function repeatLimitedString(s: string, repeatLimit: number): string {
    const frequency: number[] = arrayOfZeros(26)
    for (const ch of s) {
        frequency[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    const result: string[] = []
    let currentCharIndex: number = 25

    while (currentCharIndex >= 0) {
        if (frequency[currentCharIndex] === 0) {
            currentCharIndex--
            continue
        }

        const use: number = Math.min(frequency[currentCharIndex], repeatLimit)
        for (let k: number = 0; k < use; k++) {
            result.push(String.fromCharCode('a'.charCodeAt(0) + currentCharIndex))
        }
        frequency[currentCharIndex] -= use

        if (frequency[currentCharIndex] > 0) {
            let smallerCharIndex: number = currentCharIndex - 1
            while (smallerCharIndex >= 0 && frequency[smallerCharIndex] === 0) {
                smallerCharIndex--
            }

            if (smallerCharIndex < 0) {
                break
            }

            result.push(String.fromCharCode('a'.charCodeAt(0) + smallerCharIndex))
            frequency[smallerCharIndex]--
        }
    }

    return result.join('')
}
