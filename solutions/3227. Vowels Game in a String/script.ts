export {doesAliceWin}

const VOWELS: string = "aeiou"

function doesAliceWin(s: string): boolean {
    return [...s].some((c: string): boolean => VOWELS.includes(c))
}
