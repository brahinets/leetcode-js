import {count} from "../../common/array-utils"

export {longestSubsequenceRepeatedK, countSubsequence}

function longestSubsequenceRepeatedK(s: string, k: number): string {
    const frequency: Map<string, number> = count(s.split(""))

    const candidates: string[] = Array.from(frequency.entries())
        .filter(([, count]: [string, number]): boolean => count >= k)
        .map(([char]: [string, number]): string => char)
        .sort()
        .reverse()

    const queue: string[] = [...candidates]
    let answer: string = ''

    while (queue.length > 0) {
        const current: string = queue.shift()!

        if (current.length > answer.length) {
            answer = current
        }

        for (const char of candidates) {
            const next: string = current + char

            if (countSubsequence(s, next) >= k) {
                queue.push(next)
            }
        }
    }

    return answer
}

function countSubsequence(s: string, pattern: string): number {
    let i: number = 0
    let count: number = 0

    for (const char of s) {
        if (char === pattern[i]) {
            i++

            if (i === pattern.length) {
                count++
                i = 0
            }
        }
    }

    return count
}
