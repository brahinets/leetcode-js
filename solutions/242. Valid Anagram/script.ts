import {mapsAreEqual} from "../../common/map-utils"
import {count} from "../../common/array-utils"

export {isAnagram}

function isAnagram(s: string, t: string): boolean {
    const sCounts: Map<string, number> = count(s.split(""))
    const tCounts: Map<string, number> = count(t.split(""))

    return mapsAreEqual(sCounts, tCounts)
}
