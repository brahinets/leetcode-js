export {maxConsecutiveAnswers}

function maxConsecutiveAnswers(answerKey: string, k: number): number {
    return Math.max(
        maxConsecutiveAnswersOf("T", answerKey, k),
        maxConsecutiveAnswersOf("F", answerKey, k)
    )
}

function maxConsecutiveAnswersOf(key: string, answerKey: string, limit: number): number {
    let maxCount: number = 0
    let start: number = 0
    let end: number = 0

    let change: number = 0

    for (let i: number = 0; i < answerKey.length; i++) {
        end++

        if (answerKey[i] !== key) {
            change++
            while (change > limit) {
                while (answerKey[start] === key) {
                    start++
                }
                start++
                change--
            }
        }

        maxCount = Math.max(end - start, maxCount)
    }

    return maxCount
}
