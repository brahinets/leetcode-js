export { checkStrings }

function checkStrings(first: string, second: string): boolean {
    return sortedCharacters(first, 0) === sortedCharacters(second, 0)
        && sortedCharacters(first, 1) === sortedCharacters(second, 1)
}

function sortedCharacters(text: string, parity: number): string {
    return text
        .split('')
        .filter((character: string, index: number): boolean => index % 2 === parity)
        .sort()
        .join('')
}
