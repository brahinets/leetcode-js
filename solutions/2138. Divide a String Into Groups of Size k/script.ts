export {divideString}

function divideString(s: string, k: number, fill: string): string[] {
    const result: string[] = []
    let start: number = 0

    while (start < s.length) {
        const end: number = Math.min(start + k, s.length)

        result.push(s.slice(start, end))

        start += k
    }

    const last: string = result[result.length - 1]
    if (last.length < k) {
        result[result.length - 1] = last + fill.repeat(k - last.length)
    }

    return result
}
