import {arrayOfZeros} from "../../common/array-factories"

export {minOperations}

function minOperations(boxes: string): number[] {
    const answer: number[] = arrayOfZeros(boxes.length)

    let ballsToLeft: number = 0
    let movesToLeft: number = 0
    let ballsToRight: number = 0
    let movesToRight: number = 0

    for (let i: number = 0; i < boxes.length; i++) {
        answer[i] += movesToLeft
        ballsToLeft += Number(boxes.charAt(i))
        movesToLeft += ballsToLeft

        const j: number = boxes.length - 1 - i
        answer[j] += movesToRight
        ballsToRight += Number(boxes.charAt(j))
        movesToRight += ballsToRight
    }

    return answer
}
