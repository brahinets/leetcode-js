export {checkValidString}

function checkValidString(s: string): boolean {
    const openedBraces: string[] = []
    let cheatsCount: number = 0

    for (const ch of s) {
        if (ch === '*') {
            cheatsCount++
        } else {
            if (ch === '(') {
                openedBraces.push(ch)
            } else if (ch === ')') {
                if (openedBraces.length > 0) {
                    openedBraces.pop()
                } else if (cheatsCount > 0) {
                    cheatsCount--
                } else {
                    return false
                }
            }
        }
    }

    return openedBraces.length === 0
}
