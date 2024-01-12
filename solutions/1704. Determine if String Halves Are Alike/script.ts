export {halvesAreAlike}

function halvesAreAlike(s: string): boolean {
    const middle: number = Math.floor(s.length / 2)
    const firstHalf: string[] = keepVowels(s.slice(0, middle))
    const secondHalf: string[] = keepVowels(s.slice(middle))

    return firstHalf.length == secondHalf.length
}

function keepVowels(s: string): string[] {
    return s.split("").filter(isVowel)
}

function isVowel(s: string): boolean {
    return ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(s)
}
