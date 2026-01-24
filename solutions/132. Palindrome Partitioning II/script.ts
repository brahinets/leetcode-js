import {matrixOf, arrayOfZeros} from "../../common/array-factories"

export {minCut}

function minCut(s: string): number {
    const length = s.length
    if (length <= 1) {
        return 0
    }

    const isPalindrome: boolean[][] = matrixOf(false, length, length)

    for (let index = 0; index < length; index++) {
        isPalindrome[index][index] = true
    }

    for (let start = 0; start < length - 1; start++) {
        isPalindrome[start][start + 1] = s[start] === s[start + 1]
    }

    for (let substringLength = 3; substringLength <= length; substringLength++) {
        for (let start = 0; start <= length - substringLength; start++) {
            const end = start + substringLength - 1
            isPalindrome[start][end] = s[start] === s[end] && isPalindrome[start + 1][end - 1]
        }
    }

    const minCuts: number[] = arrayOfZeros(length)

    for (let end = 0; end < length; end++) {
        if (isPalindrome[0][end]) {
            minCuts[end] = 0
        } else {
            minCuts[end] = end
            for (let partitionStart = 1; partitionStart <= end; partitionStart++) {
                if (isPalindrome[partitionStart][end]) {
                    minCuts[end] = Math.min(minCuts[end], minCuts[partitionStart - 1] + 1)
                }
            }
        }
    }

    return minCuts[length - 1]
}
