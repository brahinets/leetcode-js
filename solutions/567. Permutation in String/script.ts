import {mapsAreEqual} from "../../common/map-utils"
import {count} from "../../common/array-utils"

export {checkInclusion}

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false
    }

    const s1Map: Map<string, number> = count(s1.split(""))
    const s2Map: Map<string, number> = new Map<string, number>()
    for (let i: number = 0; i < s1.length; i++) {
        const char: string = s2[i]
        s2Map.set(char, (s2Map.get(char) ?? 0) + 1)
    }
    if (mapsAreEqual(s1Map, s2Map)) {
        return true
    }

    for (let i: number = s1.length; i < s2.length; i++) {
        const charToRemove: string = s2[i - s1.length]
        const charToAdd: string = s2[i]

        s2Map.set(charToRemove, s2Map.get(charToRemove)! - 1)
        if (s2Map.get(charToRemove) === 0) {
            s2Map.delete(charToRemove)
        }

        s2Map.set(charToAdd, (s2Map.get(charToAdd) ?? 0) + 1)

        if (mapsAreEqual(s1Map, s2Map)) {
            return true
        }
    }

    return false
}
