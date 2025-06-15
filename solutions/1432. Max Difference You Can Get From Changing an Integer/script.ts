export {maxDiff}

function maxDiff(num: number): number {
    let minValue: number = num
    let maxValue: number = num

    for (let digitToReplace: number = 0; digitToReplace < 10; digitToReplace++) {
        for (let replacementDigit: number = 0; replacementDigit < 10; replacementDigit++) {
            const candidate = replaceDigit(num, digitToReplace, replacementDigit)

            if (candidate[0] !== "0") {
                const candidateValue: number = parseInt(candidate)

                minValue = Math.min(minValue, candidateValue)
                maxValue = Math.max(maxValue, candidateValue)
            }
        }
    }

    return maxValue - minValue
}

function replaceDigit(num: number, digitToReplace: number, replacementDigit: number): string {
    const numStr = num.toString()
    if (digitToReplace === replacementDigit) {
        return numStr
    }

    let result: string = ""
    for (const ch of numStr) {
        result += (parseInt(ch) === digitToReplace) ? replacementDigit.toString() : ch
    }

    return result
}
