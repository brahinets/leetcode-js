import {matrixOfZeros} from "../../common/array-factories"

export {getLengthOfOptimalCompression}

function getLengthOfOptimalCompression(s: string, k: number): number {
    const minFor: number[][] = matrixOfZeros(s.length + 1, k + 1)

    for (let start: number = s.length - 1; start >= 0; start--) {
        for (let deletes: number = 0; deletes <= k; deletes++) {
            minFor[start][deletes] = deletes > 0 ? minFor[start + 1][deletes - 1] : Infinity

            let sameChars: number = 0
            let deletesLeft: number = deletes
            for (let end: number = start; end < s.length; end++) {
                if (s[end] === s[start]) {
                    sameChars++
                    minFor[start][deletes] = Math.min(
                        minFor[start][deletes],
                        encodedLength(sameChars) + minFor[end + 1][deletesLeft]
                    )
                } else {
                    if (deletesLeft > 0) {
                        deletesLeft--
                    } else {
                        break
                    }
                }
            }
        }
    }

    return minFor[0][k]
}

function encodedLength(length: number): number {
    if (length === 1) {
        return 1
    } else {
        return Math.floor(Math.log10(length)) + 2
    }
}
