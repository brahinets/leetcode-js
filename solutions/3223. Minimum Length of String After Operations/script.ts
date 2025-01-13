import {count} from "../../common/array-utils"

export {minimumLength}

function minimumLength(s: string): number {
    let charFrequencies: Map<string, number> = count(s.split(""))

    let deleteCount: number = 0
    for (const frequency of charFrequencies.values()) {
        if (frequency % 2 == 1) {
            deleteCount += frequency - 1
        } else {
            deleteCount += frequency - 2
        }
    }

    return s.length - deleteCount
}
