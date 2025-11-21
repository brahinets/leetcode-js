export {restoreIpAddresses}

function restoreIpAddresses(s: string): string[] {
    const result: string[] = []

    backtrack(result, 0, [], s)

    return result
}

function backtrack(result: string[], startIndex: number, segments: string[], s: string): void {
    if (segments.length === 4 && startIndex === s.length) {
        result.push(segments.join('.'))
        return
    }

    if (segments.length >= 4) {
        return
    }

    for (let length: number = 1; length <= 3; length++) {
        if (startIndex + length > s.length) {
            break
        }

        const segment: string = s.substring(startIndex, startIndex + length)
        if ((segment.startsWith('0') && segment.length > 1) || (length === 3 && Number(segment) > 255)) {
            continue
        }

        segments.push(segment)

        backtrack(result, startIndex + length, segments, s)

        segments.pop()
    }
}
