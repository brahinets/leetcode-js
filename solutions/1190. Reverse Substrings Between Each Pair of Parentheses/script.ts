import {arrayOfZeros} from "../../common/array-factories"

export {reverseParentheses}

function reverseParentheses(s: string): string {
    const pair: number[] = collectBracesIndices(s)

    let result: string = ""
    for (let i: number = 0, direction = 1; i < s.length; i += direction) {
        if (s.charAt(i) === '(' || s.charAt(i) === ')') {
            i = pair[i]
            direction = -direction
        } else {
            result += s.charAt(i)
        }
    }

    return result
}

function collectBracesIndices(s: string): number[] {
    const parentheses: number[] = []
    const pair: number[] = arrayOfZeros(s.length)

    for (let i: number = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            parentheses.push(i)
        }

        if (s.charAt(i) === ')') {
            const j: number = parentheses.pop()!
            pair[i] = j
            pair[j] = i
        }
    }

    return pair
}
