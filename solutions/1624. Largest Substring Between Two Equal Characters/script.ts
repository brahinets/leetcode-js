export {maxLengthBetweenEqualCharacters}

function maxLengthBetweenEqualCharacters(s: string): number {
    const chars: string[] = s.split("")
    const first: Map<string, number> = new Map<string, number>()
    const last: Map<string, number> = new Map<string, number>()

    for (let i: number = 0; i < chars.length; i++) {
        const char: string = chars[i]
        if (!first.has(char)) {
            first.set(char, i)
        }
        last.set(char, i)
    }

    let max: number = -1
    for (const char of first.keys()) {
        const firstIndex: number = first.get(char) ?? 0
        const lastIndex: number = last.get(char) ?? 0
        max = Math.max(max, lastIndex - firstIndex - 1)
    }

    return max
}
