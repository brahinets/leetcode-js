export {repeatedSubstringPattern}

function repeatedSubstringPattern(s: string): boolean {
    const doubled: string = s + s

    return doubled.substring(1, doubled.length - 1).includes(s)
}
