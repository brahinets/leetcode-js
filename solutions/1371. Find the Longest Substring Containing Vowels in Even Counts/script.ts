export {findTheLongestSubstring}

const vowels: string = 'aeiou'

function findTheLongestSubstring(s: string): number {
    const positions: Map<number, number> = new Map<number, number>([[0, -1]])

    let state: number = 0
    let max: number = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (s[i] === vowels[j]) {
                state ^= 1 << j
            }
        }

        if (positions.has(state)) {
            max = Math.max(max, i - positions.get(state)!)
        } else {
            positions.set(state, i)
        }
    }
    return max
}
