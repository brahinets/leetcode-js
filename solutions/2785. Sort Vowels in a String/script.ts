export {sortVowels}

const VOWELS_CHARS: Set<string> = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

function sortVowels(s: string): string {
    const chars: string[] = s.split('')
    const vowelIndices: number[] = []
    const vowels: string[] = []

    for (let i: number = 0; i < chars.length; i++) {
        if (VOWELS_CHARS.has(chars[i])) {
            vowelIndices.push(i)
            vowels.push(chars[i])
        }
    }

    vowels.sort((a: string, b: string): number => a.charCodeAt(0) - b.charCodeAt(0))
    for (let i: number = 0; i < vowelIndices.length; i++) {
        chars[vowelIndices[i]] = vowels[i]
    }

    return chars.join('')
}
