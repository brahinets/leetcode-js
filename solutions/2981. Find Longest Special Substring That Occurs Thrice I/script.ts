export {maximumLength}

function maximumLength(s: string): number {
    const count: Map<string, number> = new Map<string, number>()

    for (let start: number = 0; start < s.length; start++) {
        let current: string = ""

        for (let end: number = start; end < s.length; end++) {
            if (current.length === 0 || current[current.length - 1] === s[end]) {
                current += s[end]
                count.set(current, (count.get(current) || 0) + 1)
            } else {
                break
            }
        }
    }

    let result: number = 0
    for (const [str, frequency] of count.entries()) {
        if (frequency >= 3 && str.length > result) {
            result = str.length
        }
    }

    return result === 0 ? -1 : result
}
