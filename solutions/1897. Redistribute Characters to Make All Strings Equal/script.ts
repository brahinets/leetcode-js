import {count} from "../../common/array-utils"

export {makeEqual}

function makeEqual(words: string[]): boolean {
    const chars: Map<string, number> = count(words.join("").split(""))

    for (const count of chars.values()) {
        if (count % words.length !== 0) {
            return false
        }
    }

    return true
}
