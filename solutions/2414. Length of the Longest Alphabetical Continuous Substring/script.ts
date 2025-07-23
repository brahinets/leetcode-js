export {longestContinuousSubstring}

function longestContinuousSubstring(s: string): number {
    let maxLength: number = 1
    let currentLength: number = 1

    for (let i:number = 1; i < s.length; i++) {
        if (s.charCodeAt(i) === s.charCodeAt(i - 1) + 1) {
            currentLength++
        } else {
            maxLength = Math.max(maxLength, currentLength)
            currentLength = 1
        }
    }

    return Math.max(maxLength, currentLength)
}
