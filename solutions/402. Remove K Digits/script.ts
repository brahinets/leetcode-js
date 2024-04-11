import {last} from "../../common/array-utils"

export {removeKdigits}

function removeKdigits(num: string, k: number): string {
    const digits: number[] = []

    for (const char of num.split("")) {
        const digit: number = Number(char)

        while (digits && digit < last(digits)! && k > 0) {
            digits.pop()
            k--
        }

        digits.push(digit)
    }

    while (digits && k > 0) {
        digits.pop()
        k--
    }

    while (digits && digits[0] === 0) {
        digits.shift()
    }

    return digits.map((digit: number): string => String(digit)).join("") || "0"
}
