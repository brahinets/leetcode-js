export {removeOccurrences}

function removeOccurrences(s: string, part: string): string {
    let result: string = s

    while (result.includes(part)) {
        result = result.replace(part, '')
    }

    return result
}
