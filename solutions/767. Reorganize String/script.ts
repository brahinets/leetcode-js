import {count} from "../../common/array-utils"

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

    const mostOften: string = mostFrequent(allowed)
    available.splice(available.indexOf(mostOften), 1)

    return reorganize(str + mostOften, available)
}

function mostFrequent(chars: string[]): string {
    const counts: Map<string, number> = count(chars)

    let mostOften: string | undefined = undefined
    let mostOftenCount: number = 0
    for (const [char, charCount] of counts) {
        if (charCount > mostOftenCount) {
            mostOften = char
            mostOftenCount = charCount
        }
    }

    if (mostOften === undefined) {
        throw new Error("Illegal state")
    }

    return mostOften
}
