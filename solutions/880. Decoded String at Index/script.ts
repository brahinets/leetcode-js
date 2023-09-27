export {decodeAtIndex}

function decodeAtIndex(s: string, k: number): string {
    let result: string = ""

    for (const char of s) {
        const count: number = Number(char)

        if (count >= 0 && count <= 9) {
            result = result.repeat(count)
        } else {
            result += char
        }

        if (result.length > k) {
            return result[k - 1]
        }
    }

    return result[k - 1]
}
