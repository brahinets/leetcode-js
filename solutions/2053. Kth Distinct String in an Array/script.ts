import {count} from "../../common/array-utils"

export {kthDistinct}

function kthDistinct(arr: string[], k: number): string {
    const counts: Map<string, number> = count(arr)

    for (const [string, count] of counts) {
        if (count === 1) {
            k--

            if (k === 0) {
                return string
            }
        }
    }

    return ""
}
