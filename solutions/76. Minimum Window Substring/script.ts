import {count} from "../../common/array-utils"

export {minWindow}

function minWindow(s: string, t: string): string {
    let min: string = ""
    const required: Map<string, number> = count(t.split(""))

    for (let start: number = 0; start <= s.length - t.length; start++) {
        for (let end: number = start + t.length; end <= s.length + 1; end++) {
            const check: string = s.slice(start, end)
            const present: Map<string, number> = count(check.split(""))

            if ((min.length == 0 || check.length < min.length) && missing(required, present) === 0) {
                min = check
            }
        }
    }

    return min
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
