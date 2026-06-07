import {sum} from "../../common/array-utils"

export {leftRightDifference}

function leftRightDifference(numbers: number[]): number[] {
    const totalSum: number = sum(numbers)
    const answer: number[] = []
    let leftSum: number = 0

    for (let i: number = 0; i < numbers.length; i++) {
        const rightSum: number = totalSum - leftSum - numbers[i]
        answer[i] = Math.abs(leftSum - rightSum)
        leftSum += numbers[i]
    }

    return answer
}
