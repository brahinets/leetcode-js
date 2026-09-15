import {matrixOf, arrayOfZeros} from '../../common/array-factories'

export {maxPalindromes}

function maxPalindromes(s: string, k: number): number {
    const length: number = s.length
    const isPalindrome: boolean[][] = matrixOf(false, length, length)

    for (let index: number = 0; index < length; index++) {
        isPalindrome[index][index] = true
    }

    for (let start: number = 0; start < length - 1; start++) {
        isPalindrome[start][start + 1] = s[start] === s[start + 1]
    }

    for (let substringLength: number = 3; substringLength <= length; substringLength++) {
        for (let start: number = 0; start <= length - substringLength; start++) {
            const end: number = start + substringLength - 1
            isPalindrome[start][end] = s[start] === s[end] && isPalindrome[start + 1][end - 1]
        }
    }

    const maximumCounts: number[] = arrayOfZeros(length + 1)

    for (let end: number = 1; end <= length; end++) {
        maximumCounts[end] = maximumCounts[end - 1]

        if (end >= k && isPalindrome[end - k][end - 1]) {
            maximumCounts[end] = Math.max(maximumCounts[end], maximumCounts[end - k] + 1)
        }

        if (end >= k + 1 && isPalindrome[end - k - 1][end - 1]) {
            maximumCounts[end] = Math.max(maximumCounts[end], maximumCounts[end - k - 1] + 1)
        }
    }

    return maximumCounts[length]
}
