import {arrayOf} from "../../common/array-factories"

export {clearStars}

const ALPHABET_LENGTH: number = 26

function clearStars(s: string): string {
    const counts: number[][] = arrayOf([], ALPHABET_LENGTH)

    const result: string[] = s.split("")
    for (let i: number = 0; i < result.length; i++) {
        if (result[i] !== "*") {
            counts[result[i].charCodeAt(0) - "a".charCodeAt(0)].push(i)
        } else {
            for (let j: number = 0; j < ALPHABET_LENGTH; j++) {
                if (counts[j].length > 0) {
                    result[counts[j].pop()!] = "*"

                    break
                }
            }
        }
    }

    return result
        .filter((c: string): boolean => c !== "*")
        .join("")
}
