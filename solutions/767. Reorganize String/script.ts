export {reorganizeString}

function reorganizeString(s: string): string {
    try {
        return reorganize(s[0], s.substring(1).split(""))
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

    const next: string = allowed[0]
    available.splice(available.indexOf(next), 1)

    return reorganize(str + next, available)
}
