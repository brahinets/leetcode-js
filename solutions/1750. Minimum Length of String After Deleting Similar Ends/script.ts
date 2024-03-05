export {minimumLength}

function minimumLength(s: string): number {
    let start: number = 0
    let end: number = s.length - 1

    while (start < end && s[start] === s[end]) {
        const ch: string = s[start]

        while (start <= end && s[start] === ch) {
            start++
        }

        while (end >= start && s[end] === ch) {
            end--
        }
    }

    return Math.max(0, end - start + 1)
}
