import {count} from "../../common/array-utils"

export {reorganizeString}

function reorganizeString(s: string): string {
    const charsSortedByCountAsc: [string, number][] = [...count(s.split("")).entries()]
        .toSorted(([, count1], [, count2]): number => count1 - count2)

    const result: string[] = Array(s.length).fill("")

    let i: number = 0
    while (charsSortedByCountAsc.length > 0) {
        const [topChar, topCount] = charsSortedByCountAsc.pop() ?? ["", 0]

        if (topCount > Math.ceil(s.length / 2)) {
            return ""
        }

        for (let j = 0; j < topCount; j++) {
            result[i] = topChar

            i += 2
            if (i >= s.length) {
                i = 1
            }
        }
    }

    return result.join("")
}
