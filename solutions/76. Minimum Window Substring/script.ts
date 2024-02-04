import {count} from "../../common/array-utils"

export {minWindow}

function minWindow(s: string, t: string): string {

    let min: string = ""

    for (let start: number = 0; start <= s.length - t.length; start++) {
        for (let end: number = start + t.length; end <= s.length + 1; end++) {
            const check: string = s.slice(start, end)

            if ((min.length == 0 || check.length < min.length) && all(check, t)) {
                min = check
            }
        }
    }

    return min
}

function all(check: string, t: string): boolean {
    const required: Map<string, number> = count(t.split(""))
    const present: Map<string, number> = count(check.split(""))

    for (const [letter, count] of required) {
        if (!present.has(letter)) {
            return false
        }

        if (present.get(letter)! < count) {
            return false
        }
    }

    return true
}
