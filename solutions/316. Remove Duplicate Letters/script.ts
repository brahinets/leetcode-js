export {removeDuplicateLetters}

function removeDuplicateLetters(s: string): string {
    const result: string[] = []

    for (let i: number = 0; i < s.length; i++) {
        const char: string = s[i]

        if (result.includes(char)) {
            continue
        }

        while (last(result) > char && s.indexOf(last(result), i) > i) {
            result.pop()
        }

        result.push(char)
    }

    return result.join("")
}

function last(string: string[]): string {
    return string.length > 0 ? string[string.length - 1] : ""
}
