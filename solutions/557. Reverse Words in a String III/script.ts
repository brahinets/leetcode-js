import {reverseString} from "../344. Reverse String/script"

export {reverseWords}

function reverseWords(s: string): string {
    const words: string[] = s.split(' ')
    const reversedWords: string[] = []

    for (const word of words) {
        const string = word.split('')

        reverseString(string)
        reversedWords.push(string.join(''))
    }

    return reversedWords.join(' ')
}
