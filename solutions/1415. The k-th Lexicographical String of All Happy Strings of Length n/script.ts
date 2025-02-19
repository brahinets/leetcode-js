export {getHappyString}

function getHappyString(n: number, k: number): string {
    const letters: string[] = ['a', 'b', 'c']
    const result: string[] = generateHappyStrings(n, letters, '')

    return result[k - 1] || ''
}

function generateHappyStrings(n: number, letters: string[], str: string): string[] {
    const result: string[] = []

    if (str.length === n) {
        result.push(str)
        return result
    }

    for (let i: number = 0; i < letters.length; i++) {
        if (str[str.length - 1] !== letters[i]) {
            result.push(...generateHappyStrings(n, letters, str + letters[i]))
        }
    }

    return result
}
