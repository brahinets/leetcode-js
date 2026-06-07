import {sum} from "../../common/array-utils"

export {addDigits}

function addDigits(num: number): number {
    let result: number = num

    while (`${result}`.length !== 1) {
        result = sum(`${result}`.split("").map(Number))
    }

    return result
}
