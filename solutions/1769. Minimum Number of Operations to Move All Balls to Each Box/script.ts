import {arrayOfZeros} from "../../common/array-factories"

export {minOperations}

function minOperations(boxes: string): number[] {
    let answer: number[] = arrayOfZeros(boxes.length)

    for (let currentBox: number = 0; currentBox < boxes.length; currentBox++) {
        if (boxes.charAt(currentBox) == '1') {
            for (let newPosition = 0; newPosition < boxes.length; newPosition++) {
                answer[newPosition] += Math.abs(newPosition - currentBox)
            }
        }
    }

    return answer
}
