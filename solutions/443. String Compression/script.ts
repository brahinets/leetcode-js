export {compress}

function compress(chars: string[]): number {
    const result: string[] = []

    for (let i: number = 0; i < chars.length;) {
        const char: string = chars[i]

        let count: number = 0
        while (chars[i] === char) {
            count++
            i++
        }

        result.push(char)
        if (count > 1) {
            result.push(...String(count))
        }
    }

    chars.length = 0
    chars.push(...result)

    return result.length
}
