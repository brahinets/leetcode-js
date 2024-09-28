export {sortVowels}

const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u']

function sortVowels(s: string): string {
    const vowels: string[] = s.split('')
        .filter((ch: string): boolean => isVowel(ch))
        .sort((a: string, b: string): number => a.charCodeAt(0) - b.charCodeAt(0))

    return s.split('')
        .map((ch: string): string => isVowel(ch) ? vowels.shift()! : ch)
        .join('')
}

function isVowel(ch: string): boolean {
    return VOWELS.includes(ch.toLowerCase())
}
