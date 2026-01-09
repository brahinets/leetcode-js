export {lengthOfLastWord}

function lengthOfLastWord(s: string): number {
    const words: string[] = s.replace(/\s+/g, ' ')
        .trim()
        .split(" ")

    return words[words.length - 1].length
}
