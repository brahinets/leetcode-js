import {count} from "../../common/array-utils"

export {minWindow}

function minWindow(s: string, t: string): string {
    let min: string | undefined = undefined

    const required: Map<string, number> = count(t.split(""))
    const present: Map<string, number> = new Map<string, number>()

    let start: number = 0
    let end: number = 0
    while (end < s.length) {
        present.set(s[end], (present.get(s[end]) ?? 0) + 1)
        end++

        while (missing(required, present) === 0 && start <= end) {
            if (min === undefined || end - start < min.length) {
                min = s.slice(start, end)
            }

            present.set(s[start], present.get(s[start])! - 1)
            start++
        }
    }

    return min ?? ""
}

function missing(required: Map<string, number>, present: Map<string, number>): number {
    let missing: number = 0

    for (const [letter, need] of required) {
        if (!present.has(letter)) {
            missing += need
        } else if (present.get(letter)! < need) {
            missing += (need - present.get(letter)!)
        }
    }

    return missing
}
