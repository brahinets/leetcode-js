export {longestSubsequence}

function longestSubsequence(s: string, k: number): number {
    let count: number = 0
    let currentValue: number = 0

    for (let i: number = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            count++
        } else if (currentValue + (1 << (s.length - 1 - i)) <= k) {
            count++

            currentValue += (1 << (s.length - 1 - i))
        }
    }

    return count
}
