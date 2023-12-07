export {largestOddNumber}

function largestOddNumber(num: string): string {
    let index: number = num.length - 1

    while (index >= 0) {
        if (isOdd(num[index])) {
            return num.slice(0, index + 1)
        }

        index--
    }

    return ""
}

function isOdd(num: string): boolean {
    return Number(num) % 2 === 1
}
