export {sumGame}

interface DigitSumGroup {
    readonly sum: number
    readonly questionMarkCount: number
}

function sumGame(num: string): boolean {
    const halfLength: number = num.length / 2
    const firstHalf: DigitSumGroup = computeDigitSumGroup(num, 0, halfLength)
    const secondHalf: DigitSumGroup = computeDigitSumGroup(num, halfLength, num.length)

    const totalQuestionMarkCount: number = firstHalf.questionMarkCount + secondHalf.questionMarkCount

    if (totalQuestionMarkCount % 2 === 1) {
        return true
    }

    const sumDifference: number = firstHalf.sum - secondHalf.sum
    const questionMarkCountDifference: number = secondHalf.questionMarkCount - firstHalf.questionMarkCount
    const isBobWinning: boolean = sumDifference === (9 * questionMarkCountDifference) / 2

    return !isBobWinning
}

function computeDigitSumGroup(num: string, startIndex: number, endIndex: number): DigitSumGroup {
    let sum: number = 0
    let questionMarkCount: number = 0

    for (let index: number = startIndex; index < endIndex; index++) {
        if (num[index] === '?') {
            questionMarkCount += 1
        } else {
            sum += Number(num[index])
        }
    }

    return {sum, questionMarkCount}
}
