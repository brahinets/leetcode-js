import {count} from "../../common/array-utils"

export {nextBeautifulNumber}

function nextBeautifulNumber(n: number): number {
    let candidate: number = n + 1

    while (true) {
        if (isNumericallyBalanced(candidate)) {
            return candidate
        }

        candidate++
    }
}

function isNumericallyBalanced(num: number): boolean {
    const countDigits: Map<string, number> = count(num.toString().split(''))

    for (const [digit, count] of countDigits) {
        if (Number(digit) !== count) {
            return false
        }
    }

    return true
}
