import {isPalindrome} from "../../common/string-utils"

export {kMirror}

function kMirror(k: number, n: number): number {
    let count: number = 0
    let sum: number = 0
    let num: number = 1

    while (count < n) {
        if (isKMirror(num, k)) {
            sum += num
            count++
        }

        num++
    }

    return sum
}

function isKMirror(num: number, k: number): boolean {
    const baseK: string = num.toString(k)
    const base10: string = num.toString(10)

    return isPalindrome(baseK) && isPalindrome(base10)
}
