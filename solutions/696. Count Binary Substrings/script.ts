export { countBinarySubstrings }

function countBinarySubstrings(s: string): number {
    let result: number = 0
    let prev: number = 0
    let curr: number = 1

    for (let i: number = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curr++
        } else {
            result += Math.min(prev, curr)
            prev = curr
            curr = 1
        }
    }

    return result + Math.min(prev, curr)
}
