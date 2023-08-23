import {count} from "../../common/array-utils";

export {reorganizeString}

function reorganizeString(s: string): string {
    try {
        return reorganize("", s.split(""))
    } catch (error) {
        return ""
    }
}

function reorganize(str: string, available: string[]): string {
    if (available.length === 0) {
        return str
    }

    const forbidden: string = str[str.length - 1]
    const allowed: string[] = available.filter((s: string): boolean => s !== forbidden)
    if (available.length > 0 && allowed.length === 0) {
        throw Error("Cannot finish")
    }

    const mostOften: string = [...count(allowed).entries()]
        .sort(([, count1], [, count2]): number => count2 - count1)[0][0]
    available.splice(available.indexOf(mostOften), 1)

    return reorganize(str + mostOften, available)
}
