export {leftRightDifference}

function leftRightDifference(numbers: number[]): number[] {
    const totalSum: number = numbers.reduce((sum: number, value: number): number => sum + value, 0)
    const answer: number[] = []
    let leftSum: number = 0

    for (let i: number = 0; i < numbers.length; i++) {
        const rightSum: number = totalSum - leftSum - numbers[i]
        answer[i] = Math.abs(leftSum - rightSum)
        leftSum += numbers[i]
    }

    return answer
}
