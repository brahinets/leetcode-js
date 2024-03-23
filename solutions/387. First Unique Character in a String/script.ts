import {count} from "../../common/array-utils"

export {firstUniqChar}

function firstUniqChar(s: string): number {
    const counts: Map<string, number> = count(s.split(""))

    for (let i: number = 0; i < s.length; i++) {
        const char = s.charAt(i)

        if (counts.get(char)! === 1) {
            return i
        }
    }

    return -1
}
