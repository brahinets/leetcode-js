import {count} from "../../common/array-utils";

export {isAnagram}

function isAnagram(s: string, t: string): boolean {
    const sCounts: Map<string, number> = count(s.split(""))
    const tCounts: Map<string, number> = count(t.split(""))

    return mapsAreEqual(sCounts, tCounts)
}

function mapsAreEqual(m1: Map<string, number>, m2: Map<string, number>): boolean {
    return m1.size === m2.size
        && Array.from(m1.keys()).every((key: string): boolean => m1.get(key) === m2.get(key))
}
