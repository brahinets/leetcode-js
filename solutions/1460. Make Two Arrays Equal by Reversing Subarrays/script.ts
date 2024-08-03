import {count} from "../../common/array-utils"
import {mapsAreEqual} from "../../common/map-utils"

export {canBeEqual}

function canBeEqual(target: number[], arr: number[]): boolean {
    const countsTarget: Map<number, number> = count(target)
    const countsArr: Map<number, number> = count(arr)

    return mapsAreEqual(countsTarget, countsArr)
}
