export {clearDigits}

function clearDigits(s: string): string {
    let result: string[] = []

    for (const char of s) {
        if (isNaN(parseInt(char))) {
            result.push(char)
        } else {
            result.pop()
        }
    }

    return result.join('')
}
