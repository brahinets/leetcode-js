import {arrayOfZeros} from "../../common/array-factories"

export {robotWithString}

function robotWithString(s: string): string {
    let counts: number[] = arrayOfZeros(26)
    for (let c of s) {
        counts[c.charCodeAt(0) - "a".charCodeAt(0)]++
    }

    let stack: string[] = []
    let result: string[] = []
    let minCharacter: string = "a"

    for (let char of s) {
        stack.push(char)
        counts[char.charCodeAt(0) - "a".charCodeAt(0)]--

        while (minCharacter !== "z" && counts[minCharacter.charCodeAt(0) - "a".charCodeAt(0)] === 0) {
            minCharacter = String.fromCharCode(minCharacter.charCodeAt(0) + 1)
        }

        while (stack.length > 0 && stack[stack.length - 1] <= minCharacter) {
            result.push(stack.pop()!)
        }
    }

    return result.join("")
}
