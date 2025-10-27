import {arrayOf, matrixOf} from "../../common/array-factories"

export {isScramble}

function isScramble(s1: string, s2: string): boolean {
    const strLength: number = s1.length
    if (strLength !== s2.length) {
        return false
    }

    const scrambleDP: boolean[][][] = arrayOf(matrixOf(false, strLength, strLength + 1), strLength)
    initializeDP(scrambleDP, s1, s2, strLength)
    fillDP(scrambleDP, strLength)

    return scrambleDP[0][0][strLength]
}

function initializeDP(
    scrambleDP: boolean[][][],
    s1: string,
    s2: string,
    strLength: number
): void {
    for (let startIdx1: number = 0; startIdx1 < strLength; startIdx1++) {
        for (let startIdx2: number = 0; startIdx2 < strLength; startIdx2++) {
            scrambleDP[startIdx1][startIdx2][1] = s1[startIdx1] === s2[startIdx2]
        }
    }
}

function fillDP(scrambleDP: boolean[][][], strLength: number): void {
    for (let subStrLen: number = 2; subStrLen <= strLength; subStrLen++) {
        for (let startIdx1: number = 0; startIdx1 <= strLength - subStrLen; startIdx1++) {
            for (let startIdx2: number = 0; startIdx2 <= strLength - subStrLen; startIdx2++) {
                for (let splitLen: number = 1; splitLen < subStrLen; splitLen++) {
                    if (
                        (scrambleDP[startIdx1][startIdx2][splitLen] &&
                            scrambleDP[startIdx1 + splitLen][startIdx2 + splitLen][subStrLen - splitLen]) ||
                        (scrambleDP[startIdx1][startIdx2 + subStrLen - splitLen][splitLen] &&
                            scrambleDP[startIdx1 + splitLen][startIdx2][subStrLen - splitLen])
                    ) {
                        scrambleDP[startIdx1][startIdx2][subStrLen] = true
                        break
                    }
                }
            }
        }
    }
}
