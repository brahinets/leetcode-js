import {matrixOf} from "../../common/array-factories"

export {countSubstrings}

function countSubstrings(s: string): number {
    let palindromesCount: number = 0

    const palindromeFromTo: boolean[][] = matrixOf(false, s.length, s.length)
    for (let i: number = 0; i < s.length; i++) {
        palindromeFromTo[i][i] = true
        palindromesCount++
    }

    for (let i: number = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            palindromeFromTo[i][i - 1] = true
            palindromesCount++
        }
    }

    for (let radius: number = 3; radius <= s.length; radius++) {
        for (let i: number = 0; i < s.length - radius + 1; i++) {
            const j: number = i + radius - 1

            if (s[i] === s[j] && palindromeFromTo[i + 1] [j - 1]) {
                palindromeFromTo[i][j] = true
                palindromesCount++
            }
        }
    }

    return palindromesCount
}
