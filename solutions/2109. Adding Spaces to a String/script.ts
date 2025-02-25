export {addSpaces}

function addSpaces(s: string, spaces: number[]): string {
    let result: string = ''
    let spacesIndex: number = 0

    for (let i: number = 0; i < s.length; i++) {
        if (spacesIndex < spaces.length && i === spaces[spacesIndex]) {
            result += ' '
            spacesIndex++
        }

        result += s[i]
    }

    return result
}
