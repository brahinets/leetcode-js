export {titleToNumber}

function titleToNumber(columnTitle: string): number {
    let result = 0

    for (const char of columnTitle) {
        result = result * 26 + (char.charCodeAt(0) - 64)
    }

    return result
}
