import {last} from "../../common/array-utils"

export {removeDuplicateLetters}

function removeDuplicateLetters(s: string): string {
    const result: string[] = []

    for (let i: number = 0; i < s.length; i++) {
        const char: string = s[i]

        if (result.includes(char)) {
            continue
        }

        while (lastStr(result) > char && s.indexOf(lastStr(result), i) > i) {
            result.pop()
        }

        result.push(char)
    }

    return result.join("")
}

function lastStr(string: string[]): string {
    return last(string) ?? ""
}
